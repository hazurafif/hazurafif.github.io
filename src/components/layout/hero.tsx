'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PixelBorder } from '@/components/pixel/pixel-border'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <PixelBorder className="inline-block px-6 py-3">
          <p className="font-heading text-[10px] tracking-widest text-accent-glow">
            COMPUTER ENGINEER & AI APPLICATION ENGINEER
          </p>
        </PixelBorder>

        <h1 className="font-heading text-2xl leading-relaxed tracking-wider text-text-primary md:text-3xl">
          Hanif Zufar Rafif
        </h1>

        <p className="mx-auto max-w-lg font-body text-base text-text-secondary leading-relaxed">
          I build intelligent automation, scalable AI agents, and robust
          full-stack applications that bridge backend systems with cutting-edge
          AI.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link href="/projects">
            <Button variant="default" size="lg">
              View Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
