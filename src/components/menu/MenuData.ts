import matchaLatteDefault from "@/assets/menu/matcha-latte-default.png";
const pureImg = matchaLatteDefault;
const honeyImg = matchaLatteDefault;
const vanillaSilkImg = matchaLatteDefault;
import strawberryImg from "@/assets/menu/strawberry.png";
import blueberryImg from "@/assets/menu/blueberry.png";
import raspberryImg from "@/assets/menu/raspberry.png";
import mangoImg from "@/assets/menu/mango.png";
import caramelToffeeImg from "@/assets/menu/caramel-toffee.png";
import bananaPuddingImg from "@/assets/menu/banana-pudding.png";
import cookieButterImg from "@/assets/menu/cookie-butter.png";
import rosyRoseImg from "@/assets/menu/rosy-rose.png";
import peachCobblerImg from "@/assets/menu/peach-cobbler.png";
import vanillaSoftServeImg from "@/assets/menu/vanilla-soft-serve.png";

export interface MenuItem {
  num: number;
  name: string;
  desc: string;
  image?: string;
  badge?: string;
  sweetness?: string;
}

export const classicLattes: MenuItem[] = [
  { num: 1, name: "Pure Iced Matcha Latte", desc: "Premium grade matcha shaken with milk. Unsweetened, clean, and bold.", image: pureImg },
  { num: 2, name: "Honey Iced Matcha Latte", desc: "Premium grade matcha lightly sweetened with natural honey.", image: honeyImg },
  { num: 3, name: "Vanilla Silk Iced Matcha Latte", desc: "Premium grade matcha with a subtle hint of French vanilla.", image: vanillaSilkImg },
  { num: 4, name: "Strawberry Iced Matcha Latte", desc: "Lightly sweet, fruity, and smooth with premium grade matcha.", image: strawberryImg },
  { num: 5, name: "Blueberry Vanilla Iced Matcha Latte", desc: "A perfect balance of Premium Matcha, Blueberry & Vanilla.", image: blueberryImg },
  { num: 6, name: "Raspberry Iced Matcha Latte", desc: "Subtle tangy & fruity punch of raspberry with premium matcha.", image: raspberryImg },
  { num: 7, name: "Mango Iced Matcha Latte", desc: "A perfect combination of tropical mango paired with premium matcha for a refreshing sip.", image: mangoImg, badge: "Best Seller" },
  { num: 8, name: "Toffee Caramel Iced Matcha Latte", desc: "Rich toffee caramel blended with premium matcha.", image: caramelToffeeImg },
];

export const cloudLattes: MenuItem[] = [
  { num: 1, name: "Banana Pudding Cloud Iced Matcha Latte", desc: "Creamy banana, soft biscuit notes, and smooth premium matcha.", sweetness: "4/5 (Medium Sweet)", badge: "Best Seller", image: bananaPuddingImg },
  { num: 2, name: "Cookie Butter Cloud Iced Matcha Latte", desc: "Buttery cookie cream swirled with smooth premium matcha.", sweetness: "5/5 (Sweet)", badge: "Best Seller", image: cookieButterImg },
  { num: 3, name: "Rosy Cloud Iced Matcha Latte", desc: "Delicate rose notes cloud layered over smooth premium matcha.", sweetness: "3/5 (Mild Sweet)", image: rosyRoseImg },
  { num: 4, name: "Peach Cobbler Cloud Iced Matcha Latte", desc: "Juicy peach cobbler dessert notes layered over smooth premium matcha.", sweetness: "3/5 (Mild Sweet)", image: peachCobblerImg },
];

export const softServes: MenuItem[] = [
  { num: 1, name: "Vanilla Silk Premium Soft Serve", desc: "Creamy perfectly balanced vanilla soft serve.", sweetness: "3/5 (Mild Sweet)" },
  { num: 2, name: "Strawberry Crush Premium Soft Serve", desc: "Creamy perfectly balanced fruity strawberry milk soft serve.", sweetness: "4/5 (Sweet)" },
  { num: 3, name: "Vanilla & Strawberry Swirl Premium Soft Serve", desc: "Creamy perfectly balanced fruity strawberry milk soft serve.", sweetness: "4/5 (Sweet)" },
];

export const desserts: MenuItem[] = [
  { num: 1, name: "Matcha Cookie", desc: "Perfectly balanced matcha cookie with a soft, buttery center." },
  { num: 2, name: "Matcha Cheesecakes", desc: "Silky matcha cheesecake with a soft, creamy texture and balanced sweetness." },
];

export const savouryTreats: MenuItem[] = [
  { num: 1, name: "Onigiri", desc: "Perfectly seasoned Japanese rice ball with a savory, comforting filling." },
  { num: 2, name: "Toasts", desc: "Crispy toast loaded with bold, balanced flavours." },
];
