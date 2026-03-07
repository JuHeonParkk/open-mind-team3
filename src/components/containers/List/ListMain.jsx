import * as S from "@/components/containers/List/ListPage.style";
import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons/Icons";
import ListCard from "@/components/containers/List/ListCard";

export default function ListMain() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "아무개", imageSource: "", questionCount: 2 },
    { id: 2, name: "홍길동", imageSource: "", questionCount: 5 },
    { id: 3, name: "김철수", imageSource: "", questionCount: 0 },
    { id: 4, name: "이영희", imageSource: "", questionCount: 10 },
    { id: 5, name: "박지성", imageSource: "", questionCount: 7 },
    { id: 6, name: "손흥민", imageSource: "", questionCount: 15 },
  ]);


  const [sortBy, setSortBy] = useState("latest");
  const [isOpen, setIsOpen] = useState(false);

  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1200 : true
  );
  const handleSortClick = (value) => {
    setSortBy(value);
    setIsOpen(false);
  };

  return (
    <S.MainSection>
      <S.MainHeader>
        <h1>누구에게 질문할까요?</h1>

        <S.SelectContainer>
          <S.SelectButton onClick={() => setIsOpen(!isOpen)}>
            {sortBy === "latest" ? "최신순" : "이름순"}
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </S.SelectButton>

          {isOpen && (
            <S.OptionList>
              <S.OptionItem onClick={() => handleSortClick("latest")}>
                최신순
              </S.OptionItem>
              <S.OptionItem onClick={() => handleSortClick("name")}>
                이름순
              </S.OptionItem>
            </S.OptionList>
          )}
        </S.SelectContainer>
      </S.MainHeader>

      {/* 3. 데이터 리스트 전달 */}
      <S.CardGrid>
        {subjects.map((item) => (
          <ListCard key={item.id} data={item} />
        ))}
      </S.CardGrid>

      {/* 4. 하단 기능 분기 */}
      {isDesktop ? (
        <div>{/* 여기에 페이지네이션 컴포넌트 추가 */}</div>
      ) : (
        <div id="observer">{/* 여기에 무한 스크롤 타겟 추가 */}</div>
      )}
    </S.MainSection>
  );
}
