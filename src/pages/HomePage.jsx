import { theme } from "@/styles/theme";
import { openToast } from "@/utils/toast";

export default function HomePage() {
  const handleBtnClick = () => {
    openToast("토스트 출력", theme.colors.red);
  };

  return (
    <div>
      <button onClick={handleBtnClick}>토스트 클릭</button>
    </div>
  );
}
