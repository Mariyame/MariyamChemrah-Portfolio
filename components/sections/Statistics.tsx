import { Card } from "@/components/ui/card";
import {
  FolderKanban,
  CalendarDays,
  Code2,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: FolderKanban,
    name: "Projects Completed",
    value: "30+",
  },
  {
    id: 2,
    icon: CalendarDays,
    name: "Years of Experience",
    value: "8+",
  },
  {
    id: 3,
    icon: Code2,
    name: "Technologies",
    value: "20+",
  },
  {
    id: 4,
    icon: BadgeCheck,
    name: "Commitment",
    value: "100%",
  },
];

export default function Statistics() {
  return (
    <Card className="md:block contents">
      <dl className="grid grid-cols-2 md:grid-cols-4 lg:gap-y-0 gap-y-4 gap-1">
      {stats.map((stat) => (
        <Card key={stat.id} className="md:contents">
        <div  className="flex items-center gap-4 lg:border-r lg:border-white/10 lg:px-8 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
            <stat.icon className="size-6 text-accent" aria-hidden="true"/>
          </div>
          <div>
            <dt className="mt-1 text-3xl font-semibold tracking-tight">
              {stat.value}
            </dt>
            <dd className="text-sm text-muted-foreground">
              {stat.name}
            </dd>
          </div>
        </div>
        </Card>
        ))}
      </dl>
    </Card>

  )
}
