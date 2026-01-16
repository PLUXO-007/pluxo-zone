"use client";
import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";

const mockData = [
  { id: 1, team: "Team Pluxo Elite", played: 12, booyahs: 4, points: 145 },
  { id: 2, team: "Zone Breakers", played: 12, booyahs: 2, points: 120 },
  { id: 3, team: "Free Fire Kings", played: 10, booyahs: 2, points: 112 },
  { id: 4, team: "Shadow Strikers", played: 11, booyahs: 1, points: 98 },
  { id: 5, team: "Garena Titans", played: 12, booyahs: 0, points: 85 },
];

export default function Leaderboard() {
  return (
    <section className="py-20 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black uppercase italic italic flex items-center justify-center gap-3">
            <Trophy className="text-orange-500 w-10 h-10" />
            Pluxo-Zone <span className="text-orange-500">Rankings</span>
          </h2>
          <p className="text-zinc-500 mt-2">The most dominant squads of the season</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-zinc-400 text-sm uppercase tracking-wider">
                <th className="p-4 font-medium">Rank</th>
                <th className="p-4 font-medium">Squad Name</th>
                <th className="p-4 font-medium text-center">Played</th>
                <th className="p-4 font-medium text-center">Booyahs</th>
                <th className="p-4 font-medium text-right text-orange-500">Total Pts</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((squad, index) => (
                <motion.tr 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={squad.id} 
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <td className="p-4">
                    {index === 0 ? <Medal className="text-yellow-400" /> : 
                     index === 1 ? <Medal className="text-zinc-400" /> :
                     index === 2 ? <Medal className="text-orange-700" /> : 
                     <span className="ml-2 text-zinc-600 font-mono">{index + 1}</span>}
                  </td>
                  <td className="p-4 font-bold group-hover:text-orange-500 transition-colors">
                    {squad.team}
                  </td>
                  <td className="p-4 text-center text-zinc-400 font-mono">{squad.played}</td>
                  <td className="p-4 text-center font-bold text-green-500">{squad.booyahs}</td>
                  <td className="p-4 text-right font-black text-xl text-orange-500 font-mono italic">
                    {squad.points}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}