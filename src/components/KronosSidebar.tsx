import { Shield, Database, DollarSign, Activity, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Eliminated Supers", url: "/", icon: Shield },
  { title: "Omnidroid Logs", url: "/omnidroid", icon: Database },
  { title: "Island Finances", url: "/finances", icon: DollarSign },
  { title: "System Access", url: "/access-logs", icon: Activity },
];

export function KronosSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      className={`${isCollapsed ? "w-16" : "w-64"} border-r border-border bg-card/95 backdrop-blur-sm`}
      collapsible="icon"
    >
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="font-system text-primary-foreground font-black text-sm">K</span>
          </div>
          {!isCollapsed && (
            <div>
              <div className="font-terminal text-sm font-bold text-foreground tracking-wider">
                KRONOS
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                v2.1.7
              </div>
            </div>
          )}
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-terminal text-xs text-muted-foreground tracking-widest">
            COMMAND MODULES
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-sm transition-all duration-200 font-terminal text-sm tracking-wider ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-border">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            {!isCollapsed && (
              <div className="font-mono text-xs text-muted-foreground">
                BUDDY.PINE
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}