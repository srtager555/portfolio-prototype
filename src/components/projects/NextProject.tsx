import { ImageDefault } from "@/styles/index.styles";
import { Container, DataContainer, Go, ImageContainer, Name, Next } from "@/styles/projects/NextProject.styles";
import Link from "next/link";

interface props {
  image: img;
  title: string;
  id: string;
}

export function NextProject({ image, title, id }: props) {
  const a = {
    image: "https://i.ibb.co/K7KxrMp/snow-moon-ahri-skin-lol-splash-art-phone-wallpaper-hd-uhdpaper-com-593-1-k.jpg",
    imageBlur:
      "https://i.ibb.co/K7KxrMp/snow-moon-ahri-skin-lol-splash-art-phone-wallpaper-hd-uhdpaper-com-593-1-k.jpg",
  };

  return (
    <Container href={`/${id}`}>
      <DataContainer>
        <div>
          <Name>{title}</Name>
          <Next>Next project</Next>
        </div>
        <Go>Go</Go>
      </DataContainer>
      <ImageContainer>
        <ImageDefault src={a.image} alt={title} placeholder="blur" blurDataURL={a.imageBlur} />
      </ImageContainer>
    </Container>
  );
}
