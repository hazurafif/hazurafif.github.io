import { useHead } from '@unhead/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  useHead({
    title: '404 — Page not found',
  });

  return (
    <section className="min-h-[80vh] flex items-center py-24">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-[440px]"
        >
          <p className="text-[clamp(4rem,10vw,6rem)] font-bold leading-none text-primary mb-4">404</p>
          <h1 className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.08] -tracking-[0.03em] mb-3">Page not found</h1>
          <p className="text-ink-muted mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/">
            <Button variant="primary" className="rounded-full">Go Home &rarr;</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
