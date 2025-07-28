import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

export const EmptyState = ({
  title,
  description,
  image = "/linelogo.png",
  className,
}: EmptyStateProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <img
        src={image}
        alt="Empty State"
        width={240}
        height={240}
        className="opacity-50"
      />
      <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center mt-20">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
