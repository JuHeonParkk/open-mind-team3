import instance from "@/apis/instance";

export const answerApi = {
  //답변 수정
  editAnswer: (answerId, content) =>
    instance.put(`answers/${answerId}/`, {
      content,
      isRejected: false,
    }),
};
