import { HeaderContainer, Title } from "@/styles/projects/Header.styles";
import Image from "next/image";

interface props {
  image: string;
  title: string;
}

export function Header({ title, image }: props) {
  return (
    <HeaderContainer>
      <div>
        <Image src={image} alt={title} fill sizes="100%" />
      </div>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}
