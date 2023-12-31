import { useContext, useEffect, useState } from "react";
import { ProjectList } from "@/components/ProjectList";
import { NextPage } from "next";
import { Opacity } from "@/styles/index.styles";
import { Container, Content, Footer, Name, Portfolio, Rol } from "@/styles/home/index.newNew.styles";
import { Context } from "@/layouts/Main.layout";

const Home: NextPage = function () {
  const context = useContext(Context);
  const [firstPaint, setFirstPaint] = useState(true);
  const [opacityLoaded, setOpacityLoaded] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mobile, setMobile] = useState(true);
  const [cardData, setCardData] = useState<CardData[]>([
    {
      id: "failed",
      name: "failed",
      project_url: "/404",
      project_face: {
        image:
          "https://i.ibb.co/K7KxrMp/snow-moon-ahri-skin-lol-splash-art-phone-wallpaper-hd-uhdpaper-com-593-1-k.jpg",
        imageBlur:
          "https://i.ibb.co/K7KxrMp/snow-moon-ahri-skin-lol-splash-art-phone-wallpaper-hd-uhdpaper-com-593-1-k.jpg",
      },
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
          context?.setLoaded(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Opacity loaded={opacityLoaded}>
      <Container>
        <Content>
          <Name>Carlos Ponce</Name>
          <Rol>Front-end dev.</Rol>
        </Content>
        <Footer>
          <Portfolio>23/24</Portfolio>
        </Footer>
        <ProjectList CardData={cardData} loaded={loaded} />
      </Container>
    </Opacity>
  );
};

export default Home;
