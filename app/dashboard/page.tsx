import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Metadata } from "next";

import DashboardTable from "@/components/data-table";
import HeaderCard from "@/components/card";

import { UserIcon } from "lucide-react";
import { DollarSignIcon } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "libMan | Dashboard",
};

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b justify-between">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  Home
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <ModeToggle />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="mx-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a href="#">Profile</a>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <a href="#">Settings</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 grid-rows-1 lg:grid-cols-5 md:grid-rows-1">
            <div className="bg-muted/50 aspect-video rounded-xl">
              <HeaderCard
                title="Users"
                value="12,345"
                icon={<UserIcon className="w-8 h-8 text-blue-700" />} // Pass as JSX
                color="blue"
              />
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl">
              <HeaderCard
                title="Revenue"
                value="$45,678"
                icon={<DollarSignIcon className="w-8 h-8 text-green-700" />}
                color="green"
              />
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl">
              <HeaderCard
                title="Orders"
                value="1,234"
                icon={<ShoppingCartIcon className="w-8 h-8 text-purple-700" />}
                color="purple"
              />
            </div>
          </div>
          <div className="bg-muted/50 flex-1 rounded-xl p-6">
            <DashboardTable />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
