import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Heart, MessageCircle } from "lucide-react";

export  function QuestionList({
  questions,
  formatDate,
  getStatusColor,
  getPriorityColor,
}: {
  questions: any;
  formatDate: (date: string) => string;
  getStatusColor: (status: string) => string;
  getPriorityColor: (priority: string) => string;
}) {
  return (
    <div>
      {/* Questions List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Questions ({questions?.data?.pagination?.total || 0})
          </h2>
          <div className="text-sm text-gray-500">
            Page {questions?.data?.pagination?.page || 1} of{" "}
            {questions?.data?.pagination?.pages || 1}
          </div>
        </div>

        {questions?.data?.questions?.length > 0 ? (
          <div className="space-y-4">
            {questions.data.questions.map((question: any) => (
              <Card
                key={question.id}
                className="hover:shadow-lg transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm hover:bg-white group cursor-pointer"
              >
                <CardHeader className="pb-4 bg-gradient-to-r from-gray-50/50 to-blue-50/30 rounded-t-xl border-b border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      className={`${getStatusColor(question.status)} border-0 shadow-sm font-medium cursor-default`}
                    >
                      {question.status}
                    </Badge>
                    <Badge
                      className={`${getPriorityColor(question.priority)} border-0 shadow-sm font-medium cursor-default`}
                    >
                      {question.priority}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm cursor-default"
                    >
                      {question.category}
                    </Badge>
                    {question.isPublic && (
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200 shadow-sm cursor-default"
                      >
                        Public
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {question.question}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-blue-400 rounded-full inline-block"></span>
                    Asked by{" "}
                    <span className="font-medium text-gray-700">
                      {question.askedByName}
                    </span>
                    {question.askedByEmail && (
                      <span className="text-gray-500">
                        ({question.askedByEmail})
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-4">
                  {question.answer && (
                    <div className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-400 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-green-500 rounded-full">
                          <MessageCircle className="h-3 w-3 text-white" />
                        </div>
                        <p className="text-sm font-semibold text-green-800">
                          Answer
                        </p>
                      </div>
                      <p className="text-green-700 leading-relaxed">
                        {question.answer}
                      </p>
                      {question.answeredAt && (
                        <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Answered on {formatDate(question.answeredAt)}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-default">
                      <Eye className="h-4 w-4 text-blue-500" />
                      <span className="font-medium">{question.viewCount}</span>
                      <span className="text-xs">views</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-default">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="font-medium">
                        {question.helpfulCount}
                      </span>
                      <span className="text-xs">helpful</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-default">
                      <Clock className="h-4 w-4 text-purple-500" />
                      <span className="text-xs">
                        Created {formatDate(question.createdAt)}
                      </span>
                    </div>
                  </div>

                  {question.updatedAt !== question.createdAt && (
                    <div className="text-xs text-gray-400 mt-3 p-2 bg-gray-50 rounded-lg border">
                      <span className="font-medium">Last updated:</span>{" "}
                      {formatDate(question.updatedAt)}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-blue-50">
            <CardContent className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                No questions yet
              </h3>
              <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                Questions from customers will appear here. Try adjusting your
                filters or check back later.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
