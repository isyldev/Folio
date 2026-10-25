export default function FolioLogo() {
  return (
    <div className="flex items-center gap-1 shrink-0">
      <div className="h-10 w-10 flex items-center justify-center">
        <img
          src="/logo.png"
          alt=""
          className=" shrink-0 object-contain"
        />
      </div>
      <span className="text-lg font-semibold tracking-tight text-[#e8e8ea]">
        Folio
      </span>
    </div>
  );
}