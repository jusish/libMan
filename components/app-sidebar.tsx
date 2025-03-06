"use client";

import * as React from "react";
import { useState } from "react";
import { GalleryVerticalEnd, LogOutIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";

// Sample data
const data = {
  navMain: [
    { title: "Dashboard", url: "#" },
    { title: "Books", url: "#" },
    { title: "API Reference", url: "#" },
    { title: "Architecture", url: "#" },
    { title: "Community", url: "#" },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-sm">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">libMan</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className={`font-medium px-3 py-2  transition-colors ${activeItem === item.title
                        ? "bg-blue-500 text-white" // Active item color
                        : "hover:bg-blue-500 hover:text-slate-500"
                      }`}
                    onClick={() => setActiveItem(item.title)}
                  >
                    {item.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter className="my-10">
        <div className="flex gap-2 my-10 mx-2">
          <a href="#" className="flex items-center gap-2 font-medium">
            Darkmode
            <ModeToggle/>
          </a>
        </div>
        <SidebarMenuButton className="flex gap-2">
          <a href="#" className="flex items-center gap-2 font-medium">
            <LogOutIcon className="size-4" />
            Logout
          </a>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
