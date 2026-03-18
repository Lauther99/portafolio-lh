export function ScrollIndicator() {
  return (
    <div className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex-col items-center gap-3">
      <span className="text-muted-foreground text-[10px] tracking-[0.25em] uppercase">
        Scroll o haz clic para navegar
      </span>
    </div>
  );
}
