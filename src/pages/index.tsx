import { BGTitleDesktop, BGTitleMobile, TextAnimation } from "@/styles/home/index.styles";
import { useEffect, useState } from "react";
import { ProjectList } from "@/components /ProjectList";
import { GetStaticProps, NextPage } from "next";
import { Opacity } from "@/styles/index.styles";

// gsp removed for a issue time
// export const getStaticProps: GetStaticProps = async (ctx) => {
//   // provitional api
//   const projects: CardData[] = await fetch("http://localhost:3000/api/project_list", {
//     // ...
//   }).then((data) => data.json());

//   return {
//     props: {
//       CardData: projects,
//     },
//   };
// };

const Home: NextPage = function () {
  const [firstPaint, setFirstPaint] = useState(true);
  const [opacityLoaded, setOpacityLoaded] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mobile, setMobile] = useState(true);
  const [cardData, setCardData] = useState<CardData[]>([
    {
      id: "failed",
      name: "failed",
      project_url: "/404",
      project_face:
        "https://i.ibb.co/K7KxrMp/snow-moon-ahri-skin-lol-splash-art-phone-wallpaper-hd-uhdpaper-com-593-1-k.jpg",
    },
  ]);

  useEffect(() => {
    async function fetchProjects() {
      const projects: CardData[] = await fetch("/api/project_list").then((data) => data.json());

      setCardData(projects);
    }
    fetchProjects();
  }, []);

  useEffect(() => {
    function Resize() {
      if (firstPaint)
        setTimeout(() => {
          if (window.innerWidth >= 1024) setMobile(false);
          else setMobile(true);

          setFirstPaint(false);
          setOpacityLoaded(true);

          setTimeout(() => setLoaded(true), 1000);
        }, 1000);

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
    <Opacity loaded={opacityLoaded}>
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
      <ProjectList CardData={cardData} loaded={loaded} />
    </Opacity>
  );
};

export default Home;
