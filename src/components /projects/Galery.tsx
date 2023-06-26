/* eslint-disable @next/next/no-img-element */
import { ImageContainer, Img } from "@/styles/projects/Galery.styles";
import Image from "next/image";

interface props {
  images: string[];
}

export function Galery({ images }: props) {
  return (
    <>
      {images.map((el, index) => (
        <ImageContainer key={`a-${index}`}>
          {/* the same error from the header as well was ejected here */}
          {/* <Image src={el} alt="" /> */}
          <Img src={el} alt="" />
        </ImageContainer>
      ))}
    </>
  );
}
