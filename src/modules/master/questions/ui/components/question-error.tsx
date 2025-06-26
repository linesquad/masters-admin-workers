import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";


export default function QuestionError({ error }: { error: any }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
    <Card className="w-full max-w-md border-0 shadow-xl bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full mb-4 mx-auto shadow-lg">
          <X className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl text-gray-900 mb-2">
          Oops! Something went wrong
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 leading-relaxed mb-4">
          {error?.message ||
            "We encountered an error while loading your questions. Please try again."}
        </p>
      </CardContent>
    </Card>
  </div>
  )
}
