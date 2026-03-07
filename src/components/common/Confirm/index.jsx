import * as S from "./Confirm.style";

export default function Confirm({ message, onConfirm }) {
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    setIsOpen(false);
  };

  return (
    <S.Wrap>
      <S.ContentBox>
        <p>{message}</p>
        <div>
          <button onClick={() => handleConfirm()}>확인</button>
          <button onClick={() => setIsOpen(false)}>취소</button>
        </div>
        {/* 디자인 후 구현 */}
      </S.ContentBox>
    </S.Wrap>
  );
}
