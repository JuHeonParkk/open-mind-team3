import { useState } from "react";

import * as S from "@/components/containers/List/ListMain/ListMain.style";
import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons/Icons";
import ListCard from "@/components/containers/List/ListCard/ListCard";
// import InfiniteScrollObserver from "@/components/common/InfiniteScroll";

export default function ListMain() {
  const [subjects, setSubjects] = useState([
    { id: 7, name: "최유리", imageSource: "", questionCount: 3 },
    { id: 8, name: "정민수", imageSource: "", questionCount: 8 },
    { id: 9, name: "한지민", imageSource: "", questionCount: 1 },
    { id: 10, name: "오세훈", imageSource: "", questionCount: 12 },
    { id: 11, name: "유재석", imageSource: "", questionCount: 6 },
    { id: 12, name: "강호동", imageSource: "", questionCount: 9 },
    { id: 71, name: "최유리", imageSource: "", questionCount: 3 },
    { id: 81, name: "정민수", imageSource: "", questionCount: 8 },
    { id: 91, name: "한지민", imageSource: "", questionCount: 1 },
    { id: 101, name: "오세훈", imageSource: "", questionCount: 12 },
    { id: 111, name: "유재석", imageSource: "", questionCount: 6 },
    { id: 121, name: "강호동", imageSource: "", questionCount: 9 },
  ]);

  const [sortBy, setSortBy] = useState("createdAt");
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 868 : true,
  );
  const handleSortClick = (value) => {
    setSortBy(value);
    setIsOpen(false);
    setCurrentPage(1);
  };

  return (
    <S.MainSection>
      <S.MainHeader>
        <h1>누구에게 질문할까요?</h1>

        <S.SelectContainer>
          <S.SelectButton onClick={() => setIsOpen(!isOpen)}>
            {sortBy === "createdAt" ? "최신순" : "이름순"}
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </S.SelectButton>

          {isOpen && (
            <S.OptionList>
              <S.OptionItem onClick={() => handleSortClick("createdAt")}>
                최신순
              </S.OptionItem>
              <S.OptionItem onClick={() => handleSortClick("name")}>
                이름순
              </S.OptionItem>
            </S.OptionList>
          )}
        </S.SelectContainer>
      </S.MainHeader>

      <S.CardGrid>
        {subjects.map((item) => (
          item ? <ListCard key={item.id} subject={item} /> : null
        ))}
      </S.CardGrid>

      {/* 4. 하단 기능 분기 */}
      {isDesktop ? (
        <div>{/* 여기에 페이지네이션 컴포넌트 추가 */}</div>
      ) : (
        <div>{/* 여기에 무한 스크롤 타겟 추가 */}</div>
      )}
    </S.MainSection>
  );
}
