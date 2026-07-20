// Shopify Storefront API client for checkout
const SHOPIFY_API_VERSION = "2025-07";
const SHOPIFY_STORE_PERMANENT_DOMAIN = "premium-sip-flow-k6d2n.myshopify.com";
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = "15e8c7b732ab2e6dd7a9849a7a062443";

// Maps local product IDs to Shopify variant GIDs.
// Add more entries here as Shopify products are created.
export const SHOPIFY_VARIANT_MAP: Record<string, string> = {
  m1: "gid://shopify/ProductVariant/48686255505631",
  b1: "gid://shopify/ProductVariant/50586774110431",
  b2: "gid://shopify/ProductVariant/50586776207583",
  b3: "gid://shopify/ProductVariant/50586778534111",
};

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart { id checkoutUrl }
      userErrors { field message }
    }
  }
`;

async function storefrontApiRequest(query: string, variables: Record<string, unknown> = {}) {
  const res = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Shopify HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors.map((e: { message: string }) => e.message).join(", "));
  return json;
}

function formatCheckoutUrl(url: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set("channel", "online_store");
    return u.toString();
  } catch {
    return url;
  }
}

export async function createShopifyCheckout(
  lines: { variantId: string; quantity: number }[]
): Promise<string> {
  const data = await storefrontApiRequest(CART_CREATE_MUTATION, {
    input: {
      lines: lines.map((l) => ({ merchandiseId: l.variantId, quantity: l.quantity })),
    },
  });
  const userErrors = data?.data?.cartCreate?.userErrors || [];
  if (userErrors.length > 0) {
    throw new Error(userErrors.map((e: { message: string }) => e.message).join(", "));
  }
  const checkoutUrl = data?.data?.cartCreate?.cart?.checkoutUrl;
  if (!checkoutUrl) throw new Error("No checkout URL returned from Shopify");
  return formatCheckoutUrl(checkoutUrl);
}
