import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/stores/cartStore";

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/50 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-[101] bg-blush shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-crimson/10">
              <h2 className="font-display text-crimson text-lg font-bold uppercase tracking-wider">Your Cart</h2>
              <button onClick={closeCart} className="text-crimson/50 hover:text-crimson">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <ShoppingBag className="w-12 h-12 text-crimson/20" />
                  <p className="font-body text-crimson/40 text-sm">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 py-3 border-b border-crimson/10">
                      <div className="w-16 h-16 rounded-lg bg-crimson/10 flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="w-6 h-6 text-crimson/30" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-crimson text-sm font-bold leading-tight truncate">{item.name}</h3>
                        <p className="font-body text-crimson/60 text-xs mt-1">{item.priceDisplay}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full border border-crimson/20 flex items-center justify-center text-crimson hover:bg-crimson hover:text-blush transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-body text-crimson text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full border border-crimson/20 flex items-center justify-center text-crimson hover:bg-crimson hover:text-blush transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-crimson/30 hover:text-crimson text-xs font-body"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-crimson/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-crimson text-sm uppercase tracking-wider">Total</span>
                  <span className="font-display text-crimson text-lg font-bold">
                    Rs. {totalPrice().toLocaleString("en-IN")}
                  </span>
                </div>
                <button className="w-full bg-crimson text-blush font-display font-bold text-sm uppercase tracking-widest py-3.5 rounded-full hover:bg-crimson-dark transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
