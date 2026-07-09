import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const contactInfo = [
  { label: 'Email', href: 'mailto:your.email@example.com', text: 'your.email@example.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', text: 'linkedin.com/in/yourusername' },
  { label: 'GitHub', href: 'https://github.com/yourusername', text: 'github.com/yourusername' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28 bg-canvas-soft">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-[640px]"
        >
          <p className="section-label">Contact</p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.08] -tracking-[0.03em] mb-10">
            Let's talk AI, backend architecture, or the future of automation.
          </h2>
          <div className="flex flex-col">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="flex items-center gap-4 py-4 border-b border-divider first:border-t no-underline hover:opacity-60 transition-opacity group"
              >
                <span className="text-sm font-semibold text-primary min-w-[4.5rem]">{item.label}</span>
                <span className="flex-1 text-sm text-ink-muted">{item.text}</span>
                <span className="text-ink-muted-light text-sm transition-transform group-hover:translate-x-1">&rarr;</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
