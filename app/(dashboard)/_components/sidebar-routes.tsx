"use client";

import { Activity, BarChart, Briefcase, Compass, Globe, Layout, LayoutDashboard, List, Mail, ShieldHalf } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Globe,
    label: "Browse",
    href: "/search",
  },
  {
    icon: ShieldHalf,
    label: "Meet Us",
    href: "/about",
  },
  {
    icon: Mail,
    label: "Contact Us",
    href: "/contact_us",
  },
  {
    icon: Briefcase,
    label: "Join Us",
    href: "/JoinUs",
  },
];


const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}