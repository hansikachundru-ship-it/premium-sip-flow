DROP POLICY IF EXISTS "Users can create own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can create order items" ON public.order_items;
REVOKE INSERT ON public.orders FROM authenticated;
REVOKE INSERT ON public.order_items FROM authenticated;