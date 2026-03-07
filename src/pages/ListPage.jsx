import * as S from "@/components/containers/List/ListPage.style";
import ListHeader from "@/components/containers/List/ListHeader";
import ListMain from "@/components/containers/List/ListMain";

export default function ListPage() {
  
  return (
    <S.Container>
      <ListHeader />
      <ListMain/>
    </S.Container>
  );
}
