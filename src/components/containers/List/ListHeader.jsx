import { useNavigate } from "react-router-dom";

import logo from "@/assets/icons/logo.svg";
import * as S from "@/components/containers/List/ListPage.style";
import { SecondButton } from "@/components/common/Button/Button.style";

export default function ListHeader() {
  const navigate = useNavigate();
  const handleGoAnswer = () => {
    const myFeedId = localStorage.getItem("myFeedId");
    navigate(myFeedId ? `/post/${myFeedId}/answer` : "/");
  };
  return (
    <S.Header>
      <S.LogoImg src={logo} alt="OpenMind" onClick={() => navigate("/")} />
      <SecondButton onClick={handleGoAnswer}>답변하러 가기 →</SecondButton>
    </S.Header>
  );
}
