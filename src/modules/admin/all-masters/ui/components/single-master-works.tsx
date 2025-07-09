import type { Work } from "../../types";

export function SingleMasterWorks({ works }: { works: Work[] }) {
  if (works.length === 0) return <div className="pt-5">No works found</div>;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {work.title.en} ({work.category.name.en})
            </h3>
            <p className="text-gray-600 mb-3">{work.description.en}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Duration: {work.duration} mins</span>
            </div>
            {work.note && (
              <div className="mt-2 text-sm text-gray-500">
                <p>Note: {work.note}</p>
              </div>
            )}
            <div className="mt-2 text-xs text-gray-400">
              Created: {new Date(work.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
