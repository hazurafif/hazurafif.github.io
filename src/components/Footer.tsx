export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-hairline/40">
      <div className="max-w-[1060px] mx-auto px-6 md:px-8 flex flex-wrap justify-between items-center gap-4">
        <p className="text-[13px] text-ink-muted">&copy; {year} Hanif Zufar Rafif</p>
        <p className="text-[13px] text-ink-muted/60">
          Built with React &middot; Hosted on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
