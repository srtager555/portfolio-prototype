import { isMobile } from "react-device-detect";
import { BGTitleDesktop, BGTitleMobile, TextAnimation } from "@/styles/home/index.styles";
import { useEffect, useState } from "react";
import { ProjectList } from "@/components /ProjectList";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1500);
  }, []);

  return (
    <>
      {isMobile ? (
        <BGTitleDesktop loaded={loaded}>
          <span>CARLOS PONCE</span>
          <span>PORTFOLIO</span>
        </BGTitleDesktop>
      ) : (
        <BGTitleMobile>
          <TextAnimation loaded={loaded}>Carlos</TextAnimation>
          <TextAnimation loaded={loaded}>Ponce</TextAnimation>
        </BGTitleMobile>
      )}
      <ProjectList />
    </>
  );
}
