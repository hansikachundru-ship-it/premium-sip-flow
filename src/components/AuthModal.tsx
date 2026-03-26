import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: name, phone },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        toast({ title: "Account created!", description: "Check your email to verify your account." });
        onClose();
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast({ title: "Welcome back!" });
        onClose();
      }
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setPhone("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-charcoal/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-blush rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-crimson/10">
              <h2 className="font-display text-crimson text-lg font-bold uppercase tracking-wider">
                {mode === "login" ? "Log In" : "Sign Up"}
              </h2>
              <button onClick={onClose} className="text-crimson/50 hover:text-crimson">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
              {mode === "signup" && (
                <>
                  <div>
                    <label className="font-body text-crimson text-xs uppercase tracking-wider font-medium block mb-1.5">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-blush-light border border-crimson/20 rounded-lg px-4 py-2.5 font-body text-crimson text-sm outline-none focus:border-crimson/50 transition-colors placeholder:text-crimson/30"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-crimson text-xs uppercase tracking-wider font-medium block mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-blush-light border border-crimson/20 rounded-lg px-4 py-2.5 font-body text-crimson text-sm outline-none focus:border-crimson/50 transition-colors placeholder:text-crimson/30"
                      placeholder="Your phone number"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="font-body text-crimson text-xs uppercase tracking-wider font-medium block mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-blush-light border border-crimson/20 rounded-lg px-4 py-2.5 font-body text-crimson text-sm outline-none focus:border-crimson/50 transition-colors placeholder:text-crimson/30"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-body text-crimson text-xs uppercase tracking-wider font-medium block mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full bg-blush-light border border-crimson/20 rounded-lg px-4 py-2.5 font-body text-crimson text-sm outline-none focus:border-crimson/50 transition-colors placeholder:text-crimson/30"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-crimson text-blush font-display font-bold text-sm uppercase tracking-widest py-3 rounded-full hover:bg-crimson-dark transition-colors disabled:opacity-50"
              >
                {loading ? "Please wait..." : mode === "login" ? "Log In" : "Create Account"}
              </button>

              <p className="text-center font-body text-crimson/60 text-sm">
                {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => { setMode(mode === "login" ? "signup" : "login"); resetForm(); }}
                  className="text-crimson font-bold hover:underline"
                >
                  {mode === "login" ? "Sign Up" : "Log In"}
                </button>
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
