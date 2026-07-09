import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-semibold tracking-widest uppercase text-ink-muted-light mb-3">
      {children}
    </p>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label">About</p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.08] -tracking-[0.03em] max-w-[650px]">
            A foundation in hardware-software integration, applied to AI.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-ink-muted leading-relaxed space-y-5"
          >
            <p>
              I graduated with a degree in <strong className="font-semibold text-ink">Computer Engineering</strong> from the
              <strong className="font-semibold text-ink"> University of Indonesia</strong> (Class of 2018). Blending a strong
              foundation in hardware-software integration with modern software engineering,
              I specialize in bridging the gap between core backend systems and cutting-edge
              Artificial Intelligence.
            </p>
            <p>
              My work spans designing intelligent AI agents, building infrastructure automation
              tools, and architecting end-to-end systems for production AI workloads.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white rounded-xl border border-hairline/50 p-5">
              <SectionLabel>Education</SectionLabel>
              <p className="font-semibold text-[15px] text-ink mb-0.5 -tracking-[0.02em]">
                B.Eng Computer Engineering
              </p>
              <p className="text-[13px] text-ink-muted">Universitas Indonesia, 2018</p>
            </div>
            <div className="bg-white rounded-xl border border-hairline/50 p-5">
              <SectionLabel>Focus</SectionLabel>
              <p className="font-semibold text-[15px] text-ink mb-0.5 -tracking-[0.02em]">
                AI Agents &amp; Infrastructure
              </p>
              <p className="text-[13px] text-ink-muted">Backend systems + AI integration</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
