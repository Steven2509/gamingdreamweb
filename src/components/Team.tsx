import { motion } from "framer-motion";
import { useEffect } from "react";

import thien from "../assets/thien.jpg";
import thai from "../assets/thai.jpg";
import duy from "../assets/duy.jpg";
import phuc from "../assets/phuc.jpg";
import phu from "../assets/phu.jpg";
import chau from "../assets/chau.jpg";
import minh from "../assets/minh.jpg";
import nghi from "../assets/nghi.png";


const members = [
  { name: "Thiện Sigma", caption: "Sigma PTNK", image: thien },
  { name: "Thái", caption: "24", image: thai },
  { name: "Duy", caption: "Chuyên Toán top 1 Grow A Garden", image: duy },
  { name: "Phúc", caption: "...", image: phuc },
  { name: "Phú", caption: "Sigma", image: phu },
  { name: "Châu", caption: "...", image: chau },
  { name: "Gia Minh", caption: "Lọ Vương", image: minh },
  { name: "Nghi", caption: "OFFLINE 24/24", image: nghi },
];

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-28 pb-16 px-4 md:px-12 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400 tracking-widest">
        AE TAO TOP 1
      </h1>

      <div className="space-y-24">
        {members.map((member, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center ${
                isEven ? "" : "md:flex-row-reverse"
              } gap-8 bg-white/5 rounded-2xl p-6 md:p-8 shadow-xl`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[300px] h-[300px] object-cover rounded-full border-4 border-green-500 shadow-md"
              />
              <div className="text-center md:text-left max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-green-300">
                  {member.name}
                </h2>
                <p className="text-lg text-gray-300">{member.caption}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamPage;