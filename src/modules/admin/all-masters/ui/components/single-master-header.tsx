export function SingleMasterHeader({
  imageUrl,
  fullName,
  email,
  phone,
}: {
  imageUrl: string;
  fullName: string;
  email: string;
  phone: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <img
        src={imageUrl}
        alt={fullName}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h1>{fullName}</h1>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
}
