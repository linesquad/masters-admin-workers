import { DottedSeparator } from "@/components/dotted-separator";
import { PageTitle } from "@/components/page-title";
import { ContactUsView } from "@/modules/admin/contact-us/ui/contact-us-view";

export const Route = createLazyFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen px-4 py-6">
      <PageTitle
        title="Contact Us"
        subtitle="Check out all contact us messages"
      />
      <DottedSeparator className="my-4" />
      <ContactUsView />
    </div>
  );
}
