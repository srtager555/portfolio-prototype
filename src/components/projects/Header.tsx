import { Description, HeaderContainer, ImageContainer, Img, Title } from "@/styles/projects/Header.styles";
import Image from "next/image";
import { useEffect } from "react";

interface props {
  image: img;
  title: string;
  description: string;
}

export function Header({ title, image, description }: props) {
  return (
    <HeaderContainer>
      <ImageContainer>
        {/* the project eject a typeError: 
          TypeError: Spread syntax requires ...iterable not be null or undefined  
          idk why this happens
        */}
        {/* <Image /> */}
        <Img src={image.image} blurDataURL={image.imageBlur} placeholder="blur" alt={title} />
      </ImageContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </HeaderContainer>
  );
}
