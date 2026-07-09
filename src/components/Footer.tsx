import { Separator } from './ui/separator';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Separator />
      <div className="max-w-[1060px] mx-auto px-6 md:px-8 py-8 flex flex-wrap justify-between items-center gap-4">
        <p className="text-[13px] text-muted-foreground">&copy; {year} Hanif Zufar Rafif</p>
        <p className="text-[13px] text-muted-foreground/60">
          Built with React &middot; Hosted on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
