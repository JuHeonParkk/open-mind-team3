import { useState } from "react";
import * as S from "./AnswerInput.style";
import { TextArea } from "@/components/common/Input/Input.style";

export default function AnswerInput({
  userProfile = "https://picsum.photos/100/100",
  userName = "아초는고양이",
}) {
  const [content, setContent] = useState("");

  const handleTextChange = (e) => setContent(e.target.value);
  const isButtonActive = content.trim().length > 0;

  return (
    <S.Container>
      <S.ProfileImage src={userProfile} alt="프로필 이미지" />

      <S.ContentWrapper>
        <S.UserName>{userName}</S.UserName>

        <S.InputSection>
          <TextArea
            placeholder="답변을 입력해주세요"
            value={content}
            onChange={handleTextChange}
          />
          <S.SubmitButton $active={isButtonActive} disabled={!isButtonActive}>
            답변 완료
          </S.SubmitButton>
        </S.InputSection>
      </S.ContentWrapper>
    </S.Container>
  );
}
