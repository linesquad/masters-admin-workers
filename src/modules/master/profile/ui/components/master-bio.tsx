export function MasterBio({ bio }: { bio: string }) {
  return (
    <div className="lg:col-span-2 space-y-6">
      {/* About Section */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4">About</h2>
        <p className="text-slate-600 leading-relaxed">
          {bio || "No bio available yet."}
        </p>
      </div>
    </div>
  );
}
