"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

export const path = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Article",
    href: "/dashboard/article",
  },
  {
    name: "Category",
    href: "/dashboard/category",
  },
  {
    name: "Edit",
    href: "/dashboard/category/edit",
  },
  {
    name: "Edit With Slug",
    href: "/dashboard/category/edit/slug-article-db-data",
  },
];

export const NavBar = () => {
  return (
    <header className="w-full h-14 flex items-center justify-center py-4">
      <NavigationMenu>
        <NavigationMenuList className="w-full flex flex-row gap-[30px]">
          {path.map((item) => (
            <NavigationMenuItem key={item.name}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink>{item.name}</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
