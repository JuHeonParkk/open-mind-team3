import EmptyQuestion from "@/components/containers/Question/EmptyQuestion/EmptyQuestion";
import QuestionItem from "@/components/containers/Question/QuestionItem/QuestionItem";

<<<<<<< HEAD
export default function QuestionItems({ questions, isAnswer, fetchQuestions }) {
=======
export default function QuestionItems({ questions, isAnswer, subjectData }) {
>>>>>>> e590fe5 (feat: postModal과 emptyQuestion 파일에 subjectData 연결)
  return (
    <>
      {questions.length === 0 ? (
        <EmptyQuestion subjectData={subjectData} />
      ) : (
        questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            answer={question.answer}
            isAnswer={isAnswer}
            fetchQuestions={fetchQuestions}
          />
        ))
      )}
    </>
  );
}
