import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, User, MapPin, Package } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/");
      else setUser(session.user);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) return <div className="min-h-screen bg-blush" />;

  return (
    <div className="min-h-screen bg-blush">
      <Navbar />
      <main className="pt-8 pb-16 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <h1 className="font-display text-crimson text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-8">
          My Account
        </h1>

        <div className="space-y-6">
          {/* Personal Details */}
          <div className="bg-blush-light rounded-2xl p-6 border border-crimson/10">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-crimson" />
              <h2 className="font-display text-crimson text-base font-bold uppercase tracking-wider">Personal Details</h2>
            </div>
            <div className="space-y-2 font-body text-crimson/70 text-sm">
              <p><span className="font-medium text-crimson">Name:</span> {user?.user_metadata?.full_name || "Not set"}</p>
              <p><span className="font-medium text-crimson">Email:</span> {user?.email}</p>
              <p><span className="font-medium text-crimson">Phone:</span> {user?.user_metadata?.phone || "Not set"}</p>
            </div>
          </div>

          {/* Order History */}
          <div className="bg-blush-light rounded-2xl p-6 border border-crimson/10">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-5 h-5 text-crimson" />
              <h2 className="font-display text-crimson text-base font-bold uppercase tracking-wider">Order History</h2>
            </div>
            <p className="font-body text-crimson/40 text-sm">No orders yet. Start shopping to see your orders here!</p>
          </div>

          {/* Saved Addresses */}
          <div className="bg-blush-light rounded-2xl p-6 border border-crimson/10">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-crimson" />
              <h2 className="font-display text-crimson text-base font-bold uppercase tracking-wider">Saved Addresses</h2>
            </div>
            <p className="font-body text-crimson/40 text-sm">No addresses saved yet.</p>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 border-2 border-crimson text-crimson font-display text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-crimson hover:text-blush transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
