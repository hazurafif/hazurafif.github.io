import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center bg-muted/30 pt-16">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm font-semibold mb-4"
        >
          Hanif Zufar Rafif
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[780px] mb-5 text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.08] -tracking-[0.03em]"
        >
          Computer Engineer &amp; AI Application Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-[540px] mb-10 leading-relaxed"
        >
          I build intelligent automation, scalable AI agents, and robust full-stack applications that bridge backend systems with cutting-edge AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-3 flex-wrap"
        >
          <a href="/#projects">
            <Button className="rounded-full">
              See my work
            </Button>
          </a>
          <a href="/#contact">
            <Button variant="outline" className="rounded-full">
              Get in touch
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
