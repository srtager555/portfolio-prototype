import { BGTitleDesktop, BGTitleMobile, TextAnimation } from "@/styles/home/index.styles";
import { useEffect, useState } from "react";
import { ProjectList } from "@/components /ProjectList";
import { GetStaticProps, NextPage } from "next";

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
    setTimeout(() => setLoaded(true), 1500);
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      const projects: CardData[] = await fetch("/api/project_list").then((data) => data.json());

      setCardData(projects);
    }
    fetchProjects();
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
      <ProjectList CardData={cardData} />
    </>
  );
};

export default Home;
