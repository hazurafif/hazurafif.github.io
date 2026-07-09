import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from './ui/badge';

const skills = [
  'Go', 'Python', 'AI Agents', 'Infrastructure Automation',
  'Full-Stack Web Development', 'API Design', 'RBAC',
  'Zabbix', 'Git', 'Linux', 'Docker',
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-28">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[13px] font-semibold tracking-widest uppercase text-muted-foreground/60 mb-3">
            Skills
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.08] -tracking-[0.03em]">Technologies I work with.</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 max-w-[640px]"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            >
              <Badge variant="outline" className="text-muted-foreground font-medium">
                {skill}
              </Badge>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
