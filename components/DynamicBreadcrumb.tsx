"use client";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";

export const pathMap: any = {
  home: {
    name: "Home",
    href: "/",
  },
  article: {
    name: "Article TEST",
    href: "/dashboard/article",
  },
  dashboard: {
    name: "Dashboard",
    href: "/dashboard",
  },
  category: {
    name: "Category",
    href: "/dashboard/category",
  },
  edit: {
    name: "Edit",
    href: null,
  },
};

interface DynamicBreadcrumbProps {
  pathWithDb?: PathWithDbObject;
}

interface PathWithDbObject {
  name: string;
  href?: string;
}

export function DynamicBreadcrumb({ pathWithDb }: DynamicBreadcrumbProps) {
  const pathName = usePathname();

  const pathArray = pathName.split("/").filter((path) => path);
  const simulatedDBPath = {
    name: "Slug Article DB data",
    href: "",
  };

  pathWithDb = simulatedDBPath;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathName === "/" && (
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        )}

        {pathArray.map((path, index) => {
          const routeName: string = pathMap[path].name;
          const routeHref: string = pathMap[path].href;

          return (
            <>
              {index != pathArray.length - 1 ? (
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href={routeHref || pathName}
                      className="first-letter:uppercase "
                    >
                      {routeName || path}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbPage className="first-letter:uppercase ">
                    {routeName || path}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              )}

              {index !== pathArray.length - 1 && <BreadcrumbSeparator />}
            </>
          );
        })}
        {pathWithDb != null && <BreadcrumbSeparator />}

        {pathWithDb ? (
          <BreadcrumbItem>
            <BreadcrumbPage className="first-letter:uppercase ">
              {pathWithDb.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        ) : null}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
