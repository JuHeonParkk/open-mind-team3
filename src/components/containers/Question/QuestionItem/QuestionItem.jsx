import * as S from "./QuestionItem.style";
import ReactionButtons from "@/components/containers/Question/ReactionButtons/ReactionButtons";

export default function QuestionItem({ question, answer }) {
  const rtf = new Intl.RelativeTimeFormat("ko", {
    numeric: "auto",
    style: "short",
  });

  const today = new Date();
  const postDay = Math.floor(
    (today - new Date(question.createdAt)) / (1000 * 60 * 60 * 24),
  );

  let formatPostDay;
  if (postDay <= 7) {
    formatPostDay = rtf.format(-postDay, "day"); // n일전
  } else if (postDay <= 30) {
    formatPostDay = rtf.format(-Math.floor(postDay / 7), "week"); // n주전
  } else if (postDay <= 365) {
    formatPostDay = rtf.format(-Math.floor(postDay / 30), "month"); // n개월 전
  } else {
    formatPostDay = rtf.format(-Math.floor(postDay / 365), "year"); // n년 전
  }

  return (
    <S.Container key={question.id}>
      <S.AnswerStatus $isAnswer={!!answer}>
        {!answer ? "미답변" : answer.isReject ? "답변 거절" : "답변 완료"}
      </S.AnswerStatus>
      <S.QuestionWrapper>
        <S.ContentCategory>
          <span>질문</span>
          <span>{formatPostDay}</span>
        </S.ContentCategory>
        <S.Content>{question.content}</S.Content>
      </S.QuestionWrapper>
      {answer && (
        <div>
          <img src alt="답변자이미지" />
          <div>
            <div>
              <span>답변자이름</span>
              <span>답변 날짜</span>
            </div>
            <p>답변</p>
          </div>
        </div>
      )}
      <S.Line />
      <ReactionButtons question={question} />
    </S.Container>
  );
}
