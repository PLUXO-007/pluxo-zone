"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    teamName: '',
    captainWhatsApp: '',
    player1UID: '',
    player2UID: '',
    player3UID: '',
    player4UID: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Team Registered for Pluxo-Zone:", formData);
    alert("Success! Your squad is registered for Pluxo-Zone.");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto p-8 bg-zinc-900 border border-orange-500/20 rounded-3xl shadow-2xl shadow-orange-500/5"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">REGISTER FOR <span className="text-orange-500">BATTLE</span></h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-zinc-400">Team Name</label>
          <input 
            required
            className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
            placeholder="e.g. Pluxo Warriors"
            onChange={(e) => setFormData({...formData, teamName: e.target.value})}
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400">Captain's WhatsApp Number</label>
          <input 
            required
            type="tel"
            className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded-lg focus:outline-none focus:border-orange-500"
            placeholder="+91 00000 00000"
            onChange={(e) => setFormData({...formData, captainWhatsApp: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num}>
              <label className="text-sm text-zinc-400">Player {num} UID</label>
              <input 
                required
                className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="UID"
                onChange={(e) => setFormData({...formData, [`player${num}UID`]: e.target.value})}
              />
            </div>
          ))}
        </div>

        <button 
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black py-4 rounded-xl mt-4 uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]"
        >
          Confirm Entry
        </button>
      </form>
    </motion.div>
  );
}