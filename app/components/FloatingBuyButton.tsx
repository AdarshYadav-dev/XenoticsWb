export function FloatingBuyButton({ href = "#", label = "Buy template" }: { href?: string; label?: string }) {
  return (
    <div className="fixed right-6 bottom-6 z-[100]">
      <a className="inline-flex px-4 py-3 rounded-full bg-black text-white shadow-lg hover:opacity-90" href={href}>
        {label}
      </a>
    </div>
  );
}