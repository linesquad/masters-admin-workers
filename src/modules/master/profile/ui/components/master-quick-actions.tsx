import { Button } from "@/components/ui/button";

import { Edit3, Trophy } from "lucide-react";

import { AvailabilitySheetDrawer } from "./quick-actions/availability-sheet-drawer";

export function MasterQuickActions({ id }: { id: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
      <div className="space-y-3">
        <Button
          className="w-full justify-start cursor-pointer"
          variant="outline"
        >
          <Edit3 className="w-4 h-4 mr-3" />
          Edit Profile
        </Button>
        <AvailabilitySheetDrawer id={id} />
        <Button
          className="w-full justify-start cursor-pointer"
          variant="outline"
        >
          <Trophy className="w-4 h-4 mr-3" />
          View Analytics
        </Button>
      </div>
    </div>
  );
}
