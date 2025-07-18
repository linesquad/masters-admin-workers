interface MasterReviewsTittleProps {
  title: string;
  subtitle: string;
}

export const MasterReviewsTittle = ({
  title,
  subtitle,
}: MasterReviewsTittleProps) => {
  return (
    <div className="flex flex-col gap-2 w-full mx-auto">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};
