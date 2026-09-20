import type { Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import type {
  Block,
  EnvCheck,
  Plan,
  Step,
  Tutorial as TutorialData,
} from "@/lib/tutorials";
import { isNetworkEnvLabel, networkCurlCommand } from "@/lib/network";
import CodeBlock from "@/components/CodeBlock";
import Shot from "@/components/Shot";
import RichText from "@/components/RichText";
import {
  IconAlert,
  IconCheck,
  IconClose,
  IconCreditCard,
  IconInfo,
  IconLifeBuoy,
  IconList,
  IconMonitor,
  IconScan,
  IconTerminal,
  IconWallet,
  SectionTitle,
} from "@/components/Icons";

function StepList({ steps, locale }: { steps: Step[]; locale: Locale }) {
  return (
    <ol className="mt-4 space-y-4">
      {steps.map((step, i) => (
        <li
          key={i}
          className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6"
        >
          <div className="flex items-baseline gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
              {i + 1}
            </span>
            <h3 className="text-lg font-bold text-zinc-900">{step.title}</h3>
          </div>
          <div className="mt-3 pl-0 sm:pl-10">
            {step.blocks.map((block, j) => (
              <BlockView key={j} block={block} locale={locale} />
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Prereq({
  items,
  locale,
}: {
  items: { label: string; detail: string }[];
  locale: Locale;
}) {
  const d = t(locale);
  return (
    <section id="prereq" className="mt-8 scroll-mt-24">
      <SectionTitle icon={IconList}>{d.prereq}</SectionTitle>
      <p className="mt-2 text-sm text-zinc-500">{d.prereqHint}</p>
      <ol className="mt-4 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        {items.map((item, i) => (
          <li key={item.label} className="flex gap-4 px-5 py-4">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
              {i + 1}
            </span>
            <div className="min-w-0">
              <p className="font-bold text-zinc-900">{item.label}</p>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                <RichText text={item.detail} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Plans({ plans, locale }: { plans: Plan[]; locale: Locale }) {
  const d = t(locale);
  return (
    <section id="plans" className="mt-8 scroll-mt-24">
      <SectionTitle icon={IconCreditCard}>{d.plans}</SectionTitle>
      <p className="mt-2 text-sm text-zinc-500">{d.plansHint}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border bg-white p-4 ${
              plan.highlight
                ? "border-zinc-900 ring-1 ring-zinc-900"
                : "border-zinc-200"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-bold text-zinc-900">{plan.name}</p>
              {plan.highlight && (
                <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[11px] font-medium text-white">
                  {d.recommended}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-semibold text-zinc-800">{plan.price}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{plan.includes}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function withTerminalNetworkCheck(
  item: EnvCheck,
  website: string,
  locale: Locale,
): EnvCheck {
  if (!isNetworkEnvLabel(item.label) || item.command) return item;
  const zh = locale === "zh";
  return {
    ...item,
    check: zh
      ? "打开终端，把下面命令贴进去回车（Windows 可写成 curl.exe）。"
      : "Open a terminal, paste this, and press Enter (on Windows you can type curl.exe).",
    command: networkCurlCommand(website),
    output: "HTTP/2 200",
    pass: zh
      ? "几秒内出现 HTTP 状态码（200、301、302、403 都行，说明能连上）。超时或 Could not resolve 说明现在上不了。"
      : "An HTTP status (200, 301, 302, or even 403) appears within a few seconds. Timeout or Could not resolve means you cannot reach it yet.",
  };
}

function EnvChecks({
  items,
  locale,
  website,
}: {
  items: EnvCheck[];
  locale: Locale;
  website: string;
}) {
  const d = t(locale);
  const rows = items.map((item) =>
    withTerminalNetworkCheck(item, website, locale),
  );
  if (!rows.some((item) => isNetworkEnvLabel(item.label))) {
    rows.unshift(
      withTerminalNetworkCheck(
        {
          label: locale === "zh" ? "网络" : "Network",
          check: "",
          pass: "",
        },
        website,
        locale,
      ),
    );
  }
  return (
    <section id="env" className="mt-10 scroll-mt-24">
      <SectionTitle icon={IconScan}>{d.envCheck}</SectionTitle>
      {rows.length > 0 && (
      <ol className="mt-4 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        {rows.map((item, i) => (
          <li key={item.label} className="px-5 py-4">
            <div className="flex gap-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-zinc-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  <span className="font-medium text-zinc-500">{d.envHow}：</span>
                  <RichText text={item.check} />
                </p>
                {item.command && (
                  <CodeBlock
                    code={item.command}
                    lang="bash"
                    caption={item.label}
                    locale={locale}
                  />
                )}
                {item.output && (
                  <div className="my-3 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
                    <p className="border-b border-zinc-200 px-4 py-2 text-xs text-zinc-500">
                      {d.expected}
                    </p>
                    <pre className="overflow-x-auto px-4 py-3 text-[13px] leading-6">
                      <code className="font-mono text-zinc-600">{item.output}</code>
                    </pre>
                  </div>
                )}
                <div className="mt-2 flex items-start gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm leading-6 text-emerald-800">
                  <IconCheck className="mt-[3px] h-4 w-4 shrink-0" />
                  <p className="min-w-0">
                    <span className="font-medium">{d.envPass}：</span>
                    {item.pass}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      )}
    </section>
  );
}

function BlockView({ block, locale }: { block: Block; locale: Locale }) {
  const d = t(locale);

  switch (block.kind) {
    case "text":
      return (
        <p className="my-3 leading-7 text-zinc-700">
          <RichText text={block.text} />
        </p>
      );
    case "code":
      return (
        <CodeBlock
          code={block.code}
          lang={block.lang}
          caption={block.caption}
          locale={locale}
        />
      );
    case "output":
      return (
        <div className="my-3 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
          <p className="border-b border-zinc-200 px-4 py-2 text-xs text-zinc-500">
            {d.expected}
          </p>
          <pre className="overflow-x-auto px-4 py-3 text-[13px] leading-6">
            <code className="font-mono text-zinc-600">{block.text}</code>
          </pre>
        </div>
      );
    case "shot":
      return (
        <Shot
          src={block.src}
          caption={block.caption}
          hint={d.shotHint}
          label={d.shotLabel}
          guide={d.shotGuide}
        />
      );
    case "note":
      return (
        <div className="my-3 flex gap-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
          <IconInfo className="mt-0.5 h-4 w-4 text-blue-500" />
          <p className="text-sm leading-6 text-blue-900">
            <RichText text={block.text} />
          </p>
        </div>
      );
    case "warn":
      return (
        <div className="my-3 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
          <IconAlert className="mt-0.5 h-4 w-4 text-amber-500" />
          <p className="text-sm leading-6 text-amber-900">
            <RichText text={block.text} />
          </p>
        </div>
      );
    case "list":
      return (
        <ul className="my-3 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-6 text-zinc-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
  }
}

export default function Tutorial({
  data,
  locale,
  website,
}: {
  data: TutorialData;
  locale: Locale;
  website: string;
}) {
  const d = t(locale);
  const plans = data.plans ?? [];
  const envCheck = data.envCheck ?? [];
  const prereq = data.prereq ?? [];
  const desktop = data.desktop ?? [];
  const cli = data.cli ?? [];
  const dual = desktop.length > 0 && cli.length > 0;
  const looseSteps = desktop.length === 0 && cli.length === 0 ? data.steps : [];

  const sections = [
    { id: "prereq", label: d.prereq, show: prereq.length > 0 },
    { id: "plans", label: d.plans, show: plans.length > 0 },
    { id: "env", label: d.envCheck, show: true },
    { id: "desktop", label: d.desktopUsage, show: desktop.length > 0 },
    { id: "cli", label: d.cliUsage, show: cli.length > 0 },
    { id: "steps", label: d.stepsTitle, show: looseSteps.length > 0 },
    { id: "troubles", label: d.troubles, show: data.troubles.length > 0 },
    { id: "cost", label: d.cost, show: data.cost.length > 0 },
  ].filter((s) => s.show);

  return (
    <div className="mt-8 lg:grid lg:grid-cols-[1fr_190px] lg:items-start lg:gap-8">
      <div className="min-w-0">
        <div className="flex flex-wrap gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-sm">
          <span className="text-zinc-500">
            {d.difficulty}：<span className="text-zinc-800">{data.difficulty}</span>
          </span>
          <span className="text-zinc-500">
            {d.osLabel}：<span className="text-zinc-800">{data.os}</span>
          </span>
        </div>

        {prereq.length > 0 && <Prereq items={prereq} locale={locale} />}
        {plans.length > 0 && <Plans plans={plans} locale={locale} />}
        <EnvChecks
          items={envCheck}
          locale={locale}
          website={website}
        />

        {dual && (
          <p className="mt-10 rounded-2xl border border-sky-100 bg-sky-50 px-5 py-3 text-sm leading-6 text-sky-950">
            {d.dualHint}
          </p>
        )}
        <p className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-3 text-sm leading-6 text-emerald-950">
          {d.beginnerHint}
        </p>

        {desktop.length > 0 && (
          <section id="desktop" className="mt-10 scroll-mt-24">
            <SectionTitle icon={IconMonitor}>{d.desktopUsage}</SectionTitle>
            <StepList steps={desktop} locale={locale} />
          </section>
        )}

        {cli.length > 0 && (
          <section id="cli" className="mt-10 scroll-mt-24">
            <SectionTitle icon={IconTerminal}>{d.cliUsage}</SectionTitle>
            <StepList steps={cli} locale={locale} />
          </section>
        )}

        {looseSteps.length > 0 && (
          <section id="steps" className="mt-10 scroll-mt-24">
            <SectionTitle icon={IconList}>{d.stepsTitle}</SectionTitle>
            <StepList steps={looseSteps} locale={locale} />
          </section>
        )}

        {data.troubles.length > 0 && (
          <section id="troubles" className="mt-10 scroll-mt-24">
            <SectionTitle icon={IconLifeBuoy}>{d.troubles}</SectionTitle>
            <div className="mt-4 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              {data.troubles.map((item) => (
                <div key={item.problem} className="p-5">
                  <p className="flex items-start gap-2 font-bold text-zinc-900">
                    <IconClose className="mt-0.5 h-4 w-4 text-zinc-400" />
                    <span>
                      <RichText text={item.problem} />
                    </span>
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-zinc-600">
                    <IconCheck className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>
                      <RichText text={item.fix} />
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {data.cost.length > 0 && (
          <section id="cost" className="mt-10 scroll-mt-24">
            <SectionTitle icon={IconWallet}>{d.cost}</SectionTitle>
            <p className="mt-4 rounded-2xl border border-zinc-200 bg-white p-5 text-sm leading-7 text-zinc-700">
              <RichText text={data.cost} />
            </p>
          </section>
        )}
      </div>

      <nav className="sticky top-6 mt-8 hidden lg:mt-0 lg:block">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
          {d.toc}
        </p>
        <ul className="mt-3 space-y-2 border-l border-zinc-200 pl-3">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
