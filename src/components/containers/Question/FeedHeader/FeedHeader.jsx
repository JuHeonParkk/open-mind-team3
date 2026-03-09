import { forwardRef } from "react";

import LogoImg from "@/assets/img/LogoImg";
import FeedProfile from "@/components/containers/Question/FeedHeader/FeedProfile/FeedProfile";

import { ArrowLeftIcon, BasicLinkIcon } from "@/assets/icons/Icons";

import * as S from "@/components/containers/Question/FeedHeader/FeedHeader.style";

const FeedHeader = forwardRef(({ isScroll }, ref) => {
  return (
    <S.Container>
      <S.MainHeader $hidden={isScroll} ref={ref}>
        <S.ProfileContainer>
          <LogoImg width={170} />
          <FeedProfile />
        </S.ProfileContainer>
      </S.MainHeader>

      <S.ScrollContainer $visible={isScroll}>
        <S.LeftSection>
          {/* Todo: 뒤로가기 기능 구현 */}
          <ArrowLeftIcon size={46} />
        </S.LeftSection>
        <S.ScrollFeedProfile>
          <FeedProfile $isScroll={isScroll} />
        </S.ScrollFeedProfile>
      </S.ScrollContainer>
    </S.Container>
  );
});

export default FeedHeader;
