"use client";
import { motion } from "framer-motion";
import { Gamepad2, Trophy, LayoutDashboard, Info } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-orange-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Gamepad2 className="text-black w-6 h-6" />
          </div>
          <span className="text-2xl font-black italic tracking-tighter uppercase">
            PLUXO<span className="text-orange-500">-ZONE</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink icon={<Trophy size={18} />} label="Tournaments" href="#tournaments" />
          <NavLink icon={<LayoutDashboard size={18} />} label="Leaderboard" href="#leaderboard" />
          <NavLink icon={<Info size={18} />} label="Rules" href="#rules" />
          
          <button className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-orange-500 transition-colors">
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, label, href }: { icon: any, label: string, href: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wider">
      {icon}
      {label}
    </Link>
  );
}