import * as S from "./ListPage.style";

export default function ListCard({ data }) {
  if (!data) return null;

  const { name, imageSource, questionCount } = data;

  return (
    <S.CardItem>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* 프로필 이미지 부분 */}
        <img 
          src={imageSource || "/default-profile.png"} 
          alt={name}
          style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
        />
        {/* 스타일 시트의 .user-name 적용 */}
        <div className="user-name">{name}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* 스타일 시트의 .question-count 적용 */}
        <div className="question-count">
          <span>받은 질문 {questionCount ?? 0}개</span>
        </div>
      </div>
    </S.CardItem>
  );
}