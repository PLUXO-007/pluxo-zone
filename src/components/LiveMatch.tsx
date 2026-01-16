"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Users, Clock } from 'lucide-react';

export default function LiveMatch() {
  const [accessCode, setAccessCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  // In a real scenario, this code would be sent to the Captain via WhatsApp
  const CORRECT_CODE = "PLUXO77"; 

  const handleUnlock = () => {
    if (accessCode.toUpperCase() === CORRECT_CODE) {
      setIsUnlocked(true);
    } else {
      alert("Invalid Access Code! Check your WhatsApp group.");
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto bg-zinc-900 rounded-3xl border-2 border-orange-500/30 overflow-hidden">
        
        {/* Header */}
        <div className="bg-orange-500 p-4 text-black flex justify-between items-center">
          <h3 className="font-black uppercase italic flex items-center gap-2">
            <Clock className="animate-pulse" /> Live Match Details
          </h3>
          <span className="bg-black text-white text-xs px-2 py-1 rounded font-bold">MAP: BERMUDA</span>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {!isUnlocked ? (
              <motion.div 
                key="locked"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center"
              >
                <Lock className="mx-auto w-12 h-12 text-zinc-600 mb-4" />
                <h4 className="text-xl font-bold mb-4">Enter Access Code</h4>
                <p className="text-zinc-500 mb-6 text-sm">Access codes are sent to registered Team Captains 15 mins before start.</p>
                
                <div className="flex gap-2">
                  <input 
                    type="text"
                    placeholder="ENTER CODE"
                    className="flex-1 bg-zinc-800 border border-zinc-700 p-3 rounded-lg focus:border-orange-500 outline-none text-center font-mono tracking-widest"
                    onChange={(e) => setAccessCode(e.target.value)}
                  />
                  <button 
                    onClick={handleUnlock}
                    className="bg-white text-black px-6 rounded-lg font-bold hover:bg-orange-500 transition-colors"
                  >
                    UNLOCK
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="unlocked"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 bg-zinc-800 p-6 rounded-2xl border border-green-500/50">
                  <Unlock className="text-green-500 w-10 h-10" />
                  <div>
                    <p className="text-zinc-400 text-xs uppercase font-bold">Custom Room ID</p>
                    <p className="text-3xl font-mono font-black text-white">8829 1023</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-zinc-800 p-6 rounded-2xl border border-green-500/50">
                  <Lock className="text-orange-500 w-10 h-10" />
                  <div>
                    <p className="text-zinc-400 text-xs uppercase font-bold">Password</p>
                    <p className="text-3xl font-mono font-black text-white">PLUXO44</p>
                  </div>
                </div>

                <p className="text-center text-red-500 text-xs font-bold animate-bounce">
                  DO NOT SHARE THESE DETAILS WITH UNREGISTERED PLAYERS!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}