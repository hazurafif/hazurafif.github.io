import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mail, ArrowRight, Globe, ExternalLink } from 'lucide-react';

const contactInfo = [
  { label: 'Email', href: 'mailto:your.email@example.com', text: 'your.email@example.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', text: 'linkedin.com/in/yourusername', icon: ExternalLink },
  { label: 'GitHub', href: 'https://github.com/yourusername', text: 'github.com/yourusername', icon: Globe },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28 bg-muted/30">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-[640px]"
        >
          <p className="text-[13px] font-semibold tracking-widest uppercase text-muted-foreground/60 mb-3">
            Contact
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.08] -tracking-[0.03em] mb-10">
            Let's talk AI, backend architecture, or the future of automation.
          </h2>
          <Card>
            <CardContent className="p-0">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <Button key={item.label} variant="ghost" asChild className="w-full justify-start gap-4 px-6 py-4 h-auto no-underline rounded-none hover:bg-muted/50 group">
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="size-4 text-primary shrink-0" />
                      <span className="text-sm font-semibold text-primary min-w-[4.5rem]">{item.label}</span>
                      <span className="flex-1 text-sm text-muted-foreground">{item.text}</span>
                      <ArrowRight className="size-4 text-muted-foreground/40 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
