import { BGTitleDesktop, BGTitleMobile, TextAnimation } from "@/styles/home/index.styles";
import { useEffect, useState } from "react";
import { ProjectList } from "@/components /ProjectList";
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const projects: CardData = await fetch("/api/project_list", {
    // ...
  }).then((data) => data.json());

  return {
    props: {
      CardData: projects,
    },
  };
};

const Home: NextPage<{ CardData: CardData }> = function ({ CardData }) {
  const [loaded, setLoaded] = useState(false);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1500);
  }, []);

  useEffect(() => {
    function Resize() {
      if (window.innerWidth >= 1024) setMobile(false);
      else setMobile(true);
    }

    Resize();

    window.addEventListener("resize", Resize);

    return () => {
      window.removeEventListener("resize", Resize);
    };
  }, []);

  return (
    <>
      {!mobile ? (
        <BGTitleDesktop loaded={loaded}>
          <span>CARLOS PONCE</span>
          <span>PORTFOLIO</span>
        </BGTitleDesktop>
      ) : (
        <BGTitleMobile>
          <TextAnimation loaded={loaded} reverse absolute>
            <span>Portfolio</span>
          </TextAnimation>
          <TextAnimation loaded={loaded}>
            <span>Carlos</span>
          </TextAnimation>
          <TextAnimation loaded={loaded}>
            <span>Ponce</span>
          </TextAnimation>
        </BGTitleMobile>
      )}
      <ProjectList CardData={CardData} />
    </>
  );
};
