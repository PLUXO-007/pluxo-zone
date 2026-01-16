"use client";
import { motion } from "framer-motion";
import { Trophy, Users, Zap, Gamepad2, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import RegistrationForm from "@/components/RegistrationForm";
import Leaderboard from "@/components/Leaderboard";
import LiveMatch from "@/components/LiveMatch";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-orange-500 bg-grid">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - High Quality Gaming Visual */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')",
            filter: "hue-rotate(10deg)" 
          }}
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-block mb-4 px-4 py-1 border border-orange-500/50 rounded-full bg-orange-500/10 text-orange-500 text-sm font-bold tracking-widest uppercase"
          >
            The Ultimate Esports Arena
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase mb-6 leading-none">
            PLUXO<span className="text-orange-500 text-neon">-ZONE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-medium">
            Dominate the <span className="text-white">Free Fire Max</span> leaderboards. 
            Elite tournaments, daily scrims, and massive prizes.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#register">
              <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-black font-black py-5 px-10 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,107,0,0.3)]">
                JOIN TOURNAMENT
              </button>
            </a>
            <a href="#leaderboard">
              <button className="w-full md:w-auto border-2 border-white/10 hover:border-orange-500/50 hover:bg-white/5 py-5 px-10 rounded-2xl transition-all font-bold">
                VIEW RANKINGS
              </button>
            </a>
          </div>
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- LIVE MATCH SECTION --- */}
      <section id="live" className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-800"></div>
            <h2 className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Active Battleground</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-zinc-800"></div>
          </div>
          <LiveMatch />
        </div>
      </section>

      {/* --- STATS GRID --- */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard icon={<Trophy className="text-orange-500" />} title="₹1,00,000+" desc="Monthly Prize Pool" />
          <StatCard icon={<Users className="text-orange-500" />} title="2,500+" desc="Active Survivors" />
          <StatCard icon={<Zap className="text-orange-500" />} title="24/7" desc="Fast Matchmaking" />
        </div>
      </section>

      {/* --- REGISTRATION SECTION --- */}
      <section id="register" className="py-24 relative overflow-hidden">
        {/* Abstract Background Shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black italic uppercase mb-4">Register Your <span className="text-orange-500">Squad</span></h2>
            <p className="text-zinc-500">Ensure all UIDs are correct. Squads with incorrect UIDs will be disqualified.</p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      {/* --- LEADERBOARD SECTION --- */}
      <section id="leaderboard" className="py-24 bg-zinc-900/20">
        <Leaderboard />
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 bg-zinc-950 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Gamepad2 className="text-orange-500" />
          <span className="text-xl font-black italic uppercase tracking-tighter">
            PLUXO<span className="text-orange-500">-ZONE</span>
          </span>
        </div>
        <p className="text-zinc-600 text-sm">
          © 2026 Pluxo-Zone Esports. Not affiliated with Garena Free Fire.
        </p>
      </footer>
    </main>
  );
}

// Reusable Stat Card Component
function StatCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5, borderColor: "rgba(249, 115, 22, 0.3)" }}
      className="p-10 rounded-3xl bg-zinc-900/50 border border-white/5 text-center flex flex-col items-center transition-all shadow-xl"
    >
      <div className="mb-6 p-4 bg-orange-500/10 rounded-2xl">{icon}</div>
      <h3 className="text-4xl font-black mb-2 tracking-tight">{title}</h3>
      <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs">{desc}</p>
    </motion.div>
  );
}