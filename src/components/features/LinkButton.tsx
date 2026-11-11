type LinkButtonProps = {
  label: string;
  href: string;
};

export function LinkButton({ label, href }: LinkButtonProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center rounded-lg border border-[var(--stroke-color)] bg-[var(--surface-color)] px-6 py-4 text-center text-base font-medium text-[var(--text-color)] backdrop-blur-sm transition hover:bg-[var(--surface-color-hover)]"
      >
        {label}
      </a>
    </li>
  );
}
