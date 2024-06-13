import { DynamicBreadcrumb } from "@/components/DynamicBreadcrumb";

export default function EditCategorySlug({ params }: any) {
  const { slug } = params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DynamicBreadcrumb
        pathWithDb={{
          name: "Slug Article DB data",
          href: `/category/edit/${slug}`,
          slug: slug,
        }}
      />
    </main>
  );
}
