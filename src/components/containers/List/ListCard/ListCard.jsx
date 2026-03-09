import * as S from "@/components/containers/List/ListCard/ListCard.style";
import { MessagesIcon } from "@/assets/icons/Icons";
import LogoImg from "@/assets/img/LogoImg.jsx";
export default function ListCard({ subject }) {
  const { name, imageSource, questionCount } = subject;

  return (
    <S.CardContainer>
      <S.CardProfile>
        {imageSource ? (
          <S.SubjectImage src={imageSource} />
        ) : (
          <LogoImg width="120px" />
        )}
        <S.SubjectName>{name}</S.SubjectName>
      </S.CardProfile>

      <S.CardFooter>
        <S.QuestionLabel>
          <MessagesIcon />
          <span>받은 질문</span>
        </S.QuestionLabel>
        <S.QuestionCount>{questionCount ?? 0}개</S.QuestionCount>
      </S.CardFooter>
    </S.CardContainer>
  );
}
