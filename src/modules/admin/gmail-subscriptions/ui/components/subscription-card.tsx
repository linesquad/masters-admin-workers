import dayjs from "dayjs";

interface SubscriptionCardProps {
  email: string;
  createdAt: string;
}

export function SubscriptionCard({ email, createdAt }: SubscriptionCardProps) {
  return (
    <div className="border rounded-lg text-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 bg-white">
      <h3 className="font-medium text-lg ">{email}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {dayjs(createdAt).format("DD/MM/YYYY HH:mm")}
      </p>
    </div>
  );
}
