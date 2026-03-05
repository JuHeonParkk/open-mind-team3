import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/styles/ListPage.style";
import logo from "@/assets/logo.svg";

export default function ListPage() {
  const navigate = useNavigate();
  const [sort, setSort] = useState("latest");

  const handleGoAnswer = () => {
    const myFeedId = localStorage.getItem("myFeedId");
    navigate(myFeedId ? `/post/${myFeedId}/answer` : "/");
  };

  return (
    <S.Container>
      <S.Header>
        <S.LogoImg 
          src={logo}
          alt="OpenMind" 
          onClick={() => navigate("/")} 
        />
        <S.Button onClick={handleGoAnswer}>답변하러 가기</S.Button>
      </S.Header>

      <S.MainSection>
        <S.ListHeader>
          <h1>누구에게 질문할까요?</h1>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">최신순</option>
            <option value="name">이름순</option>
          </select>
        </S.ListHeader>

        <S.CardGrid>
          {[...Array(8)].map((_, i) => (
            <S.CardItem key={i}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#ddd" }} />
                <div style={{ fontWeight: "bold" }}></div>
              </div>
              <div style={{ fontSize: "14px", color: "#818181" }}>받은 질문 9개</div>
            </S.CardItem>
          ))}
        </S.CardGrid>
      </S.MainSection>
    </S.Container>
  );
}