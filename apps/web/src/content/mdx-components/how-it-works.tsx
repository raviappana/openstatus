import { cn } from "@/lib/utils";
import { Bell, Globe, Monitor } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Add your monitors",
    description:
      "Connect your websites and APIs in seconds. Set your check frequency and regions.",
    icon: Monitor,
  },
  {
    number: 2,
    title: "Get notified instantly",
    description:
      "Receive alerts via email, Slack, or SMS the moment downtime is detected.",
    icon: Bell,
  },
  {
    number: 3,
    title: "Share your status",
    description:
      "Publish a beautiful public status page to keep your users informed.",
    icon: Globe,
  },
];

export function HowItWorks() {
  return (
    <section className="not-prose my-12 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 py-12 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            How it works
          </h2>
          <p className="mt-2 text-muted-foreground">
            Get started in minutes with just three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* Connecting line - desktop only */}
          <div
            className="absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] hidden md:block"
            aria-hidden="true"
          >
            <div className="h-px w-full border-t border-dashed border-border/50" />
          </div>

          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center">
              {/* Card */}
              <div
                className={cn(
                  "relative flex w-full flex-col items-center rounded-lg border border-border bg-background p-6 text-center transition-colors hover:border-success/40"
                )}
              >
                {/* Number badge */}
                <span className="absolute -top-3 left-4 flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs font-medium text-white">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                  <step.icon className="h-5 w-5 text-success" />
                </div>

                {/* Title */}
                <h3 className="mb-2 font-medium text-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Mobile connecting line */}
              {index < steps.length - 1 && (
                <div className="my-3 flex items-center justify-center md:hidden">
                  <div className="h-4 w-px border-l border-dashed border-border/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
