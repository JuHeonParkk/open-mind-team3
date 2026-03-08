import * as S from "./FeedProfile.style";
import LogoImg from "@/assets/img/LogoImg";
import {
  ShareLinkIcon,
  ShareKakaoIcon,
  ShareFacebookIcon,
} from "@/assets/icons/SocialIcons";

export default function FeedProfile() {
  return (
    <S.Container>
      <LogoImg width={170} />
      <S.ProfileImage />
      <S.ProfileName>프로필이름</S.ProfileName>
      <S.ShareButtons>
        <ShareLinkIcon />
        <ShareKakaoIcon />
        <ShareFacebookIcon />
      </S.ShareButtons>
    </S.Container>
  );
}
