import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
function WorkExperience() {
  return (
    <section className="pt-20" id="work">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Work Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="p-10 space-y-8"
      >
        {EXPERIENCES.map((expierence, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            key={index}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          >
            <h3 className="text-2xl font-semibold">{expierence.title}</h3>
            <p className="text-xl">{expierence.company}</p>

            <p className="text-sm text-stone-300">{expierence.duration}</p>
            <p className="text-base mt-2">{expierence.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WorkExperience;
