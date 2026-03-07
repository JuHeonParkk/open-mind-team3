import * as S from "@/components/containers/List/ListPage.style";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons/Icons";

const TEAM = 3;
const LIMIT = 8;

export default function ListMain() {
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState("latest");
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [subjects, setSubjects] = useState([]);

  const offset = (page-1) * LIMIT;

  const handleSortClick = (value) => {
    setSortBy(value);
    setPage(1);
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

      {/* <S.CardGrid>
        {[...Array(8)].map((_, i) => (
          <S.CardItem key={i}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "#ddd",
                }}
              />
              <div style={{ fontWeight: "bold" }}></div>
            </div>
            <div style={{ fontSize: "14px", color: "#818181" }}>
              받은 질문 9개
            </div>
          </S.CardItem>
        ))}
      </S.CardGrid> */}
    </S.MainSection>
  );
}
