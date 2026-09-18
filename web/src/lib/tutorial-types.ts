export type Block =
  | { kind: "text"; text: string }
  | { kind: "code"; lang: string; code: string; caption?: string }
  | { kind: "output"; text: string }
  | { kind: "shot"; src: string; caption: string }
  | { kind: "note"; text: string }
  | { kind: "warn"; text: string }
  | { kind: "list"; items: string[] };

export interface Step {
  title: string;
  blocks: Block[];
}

export interface Plan {
  name: string;
  price: string;
  includes: string;
  highlight?: boolean;
}

export interface EnvCheck {
  label: string;
  check: string;
  pass: string;
  command?: string;
  output?: string;
}

export type Surface = "desktop" | "cli";

export interface Tutorial {
  difficulty: string;
  os: string;
  plans?: Plan[];
  envCheck?: EnvCheck[];
  prereq: { label: string; detail: string }[];
  steps: Step[];
  desktop?: Step[];
  cli?: Step[];
  configs: { path: string; desc: string; code: string }[];
  troubles: { problem: string; fix: string }[];
  cost: string;
}

export type TutorialSet = Record<string, { zh: Tutorial; en: Tutorial }>;
