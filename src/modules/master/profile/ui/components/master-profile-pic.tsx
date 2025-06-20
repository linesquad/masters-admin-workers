export function MasterProfilePic({
  imageUrl,
  fullName,
}: {
  imageUrl: string;
  fullName: string;
}) {
  return (
    <div className="relative group">
      <img
        src={
          imageUrl ||
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
        }
        alt={fullName || "Master Profile"}
        className="w-32 h-32 rounded-2xl border-4 border-white shadow-xl object-cover"
      />
    </div>
  );
}
