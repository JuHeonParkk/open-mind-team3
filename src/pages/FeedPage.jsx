import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { subjectApi } from "@/apis/subject";
import FeedHeader from "@/components/containers/Question/FeedHeader/FeedHeader";
import QuestionList from "@/components/containers/Question/QuestionList";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

import * as S from "@/components/containers/Question/QuestionList.style";
import { openToast } from "@/utils/toast";

export default function FeedPage() {
  const [subjectData, setSubjectData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { subjectId, "*": subpath } = useParams();

  const isAnswer = subpath === "answer";

  useEffect(() => {
    if (subpath && !isAnswer) navigate("/err", { replace: true });
  }, [subpath, navigate]);

  /* 질문대상자 정보 가져오기 */
  useEffect(() => {
    if (!subjectId) return;

    const fetchSubjectData = async () => {
      setIsLoading(true);
      try {
        const data = await subjectApi.getFeedData(subjectId);
        setSubjectData(data);
      } catch (error) {
        setIsError(
          error.response?.data?.detail || "데이터를 가져오는데 실패했습니다.",
        );
        openToast("존재하지 않는 사용자입니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchSubjectData();
  }, [subjectId]);

  if (isError) {
    return (
      <NotFoundPage
        title="존재하지 않는 사용자입니다."
        description={`해당 사용자의 피드를 찾을 수 없거나, 삭제된 피드입니다.\n 다시 한 번 확인해 주세요.`}
      />
    );
  }

  // Todo: 스피너로 변경
  if (isLoading || !subjectData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FeedHeader subjectData={subjectData} />
      <S.Container>
        <QuestionList subjectId={subjectId} isAnswer={isAnswer} />
      </S.Container>
    </>
  );
}
