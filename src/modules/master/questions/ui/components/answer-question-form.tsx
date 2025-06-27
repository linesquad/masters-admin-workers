import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { answerSchema, type AnswerFormData } from "../../schemas/answerSchema";
import { useAnswereQuestion } from "../../hooks/useAnswereQuestion";
import { Loader2, Send } from "lucide-react";

interface AnswerQuestionFormProps {
  questionId: string;
  questionText: string;
  onSuccess?: () => void;
}

export function AnswerQuestionForm({
  questionId,
  questionText,
  onSuccess,
}: AnswerQuestionFormProps) {
  const { mutate: answerQuestion, isPending } = useAnswereQuestion();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<AnswerFormData>({
    resolver: zodResolver(answerSchema),
    mode: "onChange",
  });

  const onSubmit = (data: AnswerFormData) => {
    answerQuestion(
      {
        questionId,
        answer: data.answer,
      },
      {
        onSuccess: () => {
          reset();
          onSuccess?.();
        },
      }
    );
  };

  return (
    <div className="px-6 py-4 space-y-6">
      {/* Question Display */}
      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
        <h4 className="font-medium text-gray-900 mb-2">Question:</h4>
        <p className="text-gray-700 leading-relaxed">{questionText}</p>
      </div>

      {/* Answer Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="answer"
            className="text-sm font-medium text-gray-900"
          >
            Your Answer <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="answer"
            placeholder="Write a helpful and detailed answer..."
            className="min-h-[120px] resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...register("answer")}
            disabled={isPending}
          />
          {errors.answer && (
            <p className="text-sm text-red-600">{errors.answer.message}</p>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            disabled={!isValid || isPending}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Submit Answer
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
} 