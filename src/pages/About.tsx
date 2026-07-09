import { useHead } from '@unhead/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function About() {
  useHead({
    title: 'About — Hanif Zufar Rafif',
    meta: [
      { name: 'description', content: 'About Hanif Zufar Rafif — Computer Engineer & AI Application Engineer' },
    ],
  });

  return (
    <section className="py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="link" asChild className="px-0 h-auto text-sm text-muted-foreground hover:text-foreground mb-8">
            <Link to="/">&larr; Back to home</Link>
          </Button>
          <p className="section-label">About</p>
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] -tracking-[0.03em]">A bit about me.</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[680px] space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a Computer Engineer and AI Application Engineer based in Indonesia.
            I graduated with a degree in <strong className="font-semibold text-foreground">Computer Engineering</strong> from the
            <strong className="font-semibold text-foreground"> University of Indonesia</strong> (Class of 2018), where I built a
            strong foundation in both hardware-software integration and software engineering principles.
          </p>
          <p>
            Today, I specialize in bridging the gap between core backend systems and
            cutting-edge Artificial Intelligence. My work spans designing intelligent
            AI agents and conversational applications, architecting infrastructure
            automation tools, and building end-to-end systems that put AI models into
            production at scale.
          </p>
          <p>
            I'm passionate about the intersection of backend engineering and AI.
            Outside of work, I'm always exploring new tools, reading about distributed
            systems, and thinking about how AI will reshape the way we build software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
