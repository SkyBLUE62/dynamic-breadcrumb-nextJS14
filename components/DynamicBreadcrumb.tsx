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
    href: "",
  },
};

interface DynamicBreadcrumbProps {
  pathWithDb?: PathWithDbObject;
}

interface PathWithDbObject {
  name: string;
  href?: string;
  slug?: string;
}

export function DynamicBreadcrumb({ pathWithDb }: DynamicBreadcrumbProps) {
  const pathName = usePathname();

  console.log(pathWithDb);

  const pathArray = pathName.split("/").filter((path) => path);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathName === "/" && (
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        )}

        {pathArray.map((path, index) => {
          if (Object.keys(pathMap).includes(path)) {
            const routeName: string = pathMap[path].name;
            const routeHref: string = pathMap[path].href;
            return (
              <>
                {index != pathArray.length - 1 ? (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink asChild>
                      <Link
                        href={routeHref || pathName}
                        className="first-letter:uppercase "
                      >
                        {routeName || path}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                ) : pathWithDb == null && index == pathArray.length - 1 ? (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbPage className="first-letter:uppercase ">
                      {routeName || path}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                ) : (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink asChild>
                      <Link
                        href={routeHref || pathName}
                        className="first-letter:uppercase "
                      >
                        {routeName || path}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )}

                {index !== pathArray.length - 1 &&   <BreadcrumbSeparator />}
              </>
            );
          }
        })}

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
