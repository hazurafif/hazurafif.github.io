import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const tags = ['Go', 'Python', 'AI Agents', 'Zabbix', 'Full-Stack'];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="scroll-mt-20 py-20 md:py-28 bg-muted/30">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[13px] font-semibold tracking-widest uppercase text-muted-foreground/60 mb-3">
            Experience
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.08] -tracking-[0.03em]">
            Currently building AI systems in production.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[680px]"
        >
          <div className="relative pl-8 border-l-2 border-border/60">
            <div className="mb-10 relative">
              <div className="absolute -left-[calc(1rem+1px)] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-foreground -tracking-[0.02em]">AI Application Engineer</h3>
                    <p className="text-[13px] text-muted-foreground mt-0.5">Full-Time &middot; June 2023 – Present</p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      ['AI Agents &amp; Chat Ecosystems:', 'Design, develop, and deploy intelligent AI agents and conversational applications tailored to solve complex user needs.'],
                      ['Infrastructure Automation:', 'Architected and developed Zabbix automation tools to streamline system monitoring, alerting, and operational efficiency.'],
                      ['Full-Stack Implementation:', 'Build and maintain the end-to-end architecture required to support high-performance AI models in production.'],
                    ].map(([strong, text]) => (
                      <li key={String(strong)} className="flex gap-3 text-sm text-muted-foreground leading-relaxed min-w-0">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-[0.55em]" />
                        <span className="min-w-0"><strong className="font-semibold text-foreground">{strong}</strong> {text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-border">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-muted-foreground text-[11px] px-2.5 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
