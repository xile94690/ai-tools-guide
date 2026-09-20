import type { ReactNode } from "react";

type IconProps = { className?: string };

function Svg({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 ${className}`}
    >
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconCreditCard({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="6" width="18" height="12" rx="2.5" {...stroke} />
      <path d="M3 10h18M7 15h3" {...stroke} />
    </Svg>
  );
}

export function IconScan({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 4H6a2 2 0 0 0-2 2v2M16 4h2a2 2 0 0 1 2 2v2M8 20H6a2 2 0 0 1-2-2v-2M16 20h2a2 2 0 0 0 2-2v-2M4 12h16" {...stroke} />
    </Svg>
  );
}

export function IconMonitor({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="13" rx="2" {...stroke} />
      <path d="M8 21h8M12 17v4" {...stroke} />
    </Svg>
  );
}

export function IconTerminal({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" {...stroke} />
      <path d="m7 9 3 3-3 3M13 15h4" {...stroke} />
    </Svg>
  );
}

export function IconList({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9 7h11M9 12h11M9 17h11M5 7h.01M5 12h.01M5 17h.01" {...stroke} />
    </Svg>
  );
}

export function IconSliders({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 17h16M8 4v6M16 14v6" {...stroke} />
    </Svg>
  );
}

export function IconLifeBuoy({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" {...stroke} />
      <circle cx="12" cy="12" r="3" {...stroke} />
      <path d="m6.3 6.3 3.2 3.2M14.5 14.5l3.2 3.2M17.7 6.3l-3.2 3.2M9.5 14.5l-3.2 3.2" {...stroke} />
    </Svg>
  );
}

export function IconWallet({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M4 8.5A2.5 2.5 0 0 1 6.5 6H19a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 17.5v-9Z"
        {...stroke}
      />
      <path d="M20 11h-4a1.5 1.5 0 0 0 0 3h4" {...stroke} />
    </Svg>
  );
}

export function IconFile({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" {...stroke} />
      <path d="M14 3v5h5M9 13h6M9 17h4" {...stroke} />
    </Svg>
  );
}

export function IconDownload({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 4v10M8 10l4 4 4-4M5 19h14" {...stroke} />
    </Svg>
  );
}

export function IconSparkle({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M7 7l2 2M15 15l2 2M17 7l-2 2M9 15l-2 2" {...stroke} />
      <circle cx="12" cy="12" r="2.5" {...stroke} />
    </Svg>
  );
}

export function IconKey({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="8" cy="12" r="3.5" {...stroke} />
      <path d="M11 12h9M17 12v3M20 12v2" {...stroke} />
    </Svg>
  );
}

export function IconUser({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="8.5" r="3" {...stroke} />
      <path d="M5 19c1.4-3 3.8-4.5 7-4.5s5.6 1.5 7 4.5" {...stroke} />
    </Svg>
  );
}

export function IconHelp({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" {...stroke} />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1.9-1.1 1.8V14" {...stroke} />
      <path d="M12 17h.01" {...stroke} />
    </Svg>
  );
}

export function IconInfo({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" {...stroke} />
      <path d="M12 11v5M12 8h.01" {...stroke} />
    </Svg>
  );
}

export function IconAlert({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 4 3.5 19h17L12 4Z" {...stroke} />
      <path d="M12 10v4M12 16h.01" {...stroke} />
    </Svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m5 12 5 5 9-10" {...stroke} />
    </Svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m7 7 10 10M17 7 7 17" {...stroke} />
    </Svg>
  );
}

export function SectionTitle({
  icon: Icon,
  children,
  size = "lg",
}: {
  icon: (p: IconProps) => ReactNode;
  children: ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <h2
      className={`flex items-center gap-2.5 font-bold text-zinc-900 ${
        size === "lg" ? "text-xl" : "text-lg"
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-800">
        <Icon className="h-4 w-4" />
      </span>
      {children}
    </h2>
  );
}
