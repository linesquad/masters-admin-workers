import { useMutation, useQueryClient } from "@tanstack/react-query";
import { answereQuestion } from "../services/qa";
import toast from "react-hot-toast";

export const useAnswereQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      questionId,
      answer,
    }: {
      questionId: string;
      answer: string;
    }) => answereQuestion(questionId, answer),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      });
      toast.success("Question answered successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};
