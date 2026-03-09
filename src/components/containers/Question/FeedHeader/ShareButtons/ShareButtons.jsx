import { useState, useEffect, useRef } from "react";

import { BasicLinkIcon } from "@/assets/icons/Icons";
import {
  ShareLinkIcon,
  ShareKakaoIcon,
  ShareFacebookIcon,
} from "@/assets/icons/SocialIcons";

import * as S from "@/components/containers/Question/FeedHeader/ShareButtons/ShareButtons.style";

export default function ShareButtons({ $isScroll }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (!$isScroll) {
      setIsDropdownOpen(false);
    }
  }, [$isScroll]);

  return (
    <S.ShareButtons>
      <S.MobileShareButton $isScroll={$isScroll} onClick={handleToggle}>
        <BasicLinkIcon />
      </S.MobileShareButton>

      <S.ShareDropdown
        ref={dropdownRef}
        $isScroll={$isScroll}
        $isOpen={isDropdownOpen}
      >
        <ShareLinkIcon />
        <ShareKakaoIcon />
        <ShareFacebookIcon />
      </S.ShareDropdown>
    </S.ShareButtons>
  );
}
