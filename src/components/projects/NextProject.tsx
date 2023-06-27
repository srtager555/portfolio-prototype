import { ImageDefault } from "@/styles/index.styles";
import { Container, Next } from "@/styles/projects/NextProject.styles";
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
      <Next>NEXT - {title}</Next>
      <ImageDefault src={a.image} alt={title} placeholder="blur" blurDataURL={a.imageBlur} />
    </Container>
  );
}
