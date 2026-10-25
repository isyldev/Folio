export default function FolioLogo() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <img
        src="/logo.png"
        alt=""
        className="h-8 w-8 shrink-0 object-contain"
      />
      <span className="text-lg font-semibold tracking-tight text-[#e8e8ea]">
        Folio
      </span>
    </div>
  );
}