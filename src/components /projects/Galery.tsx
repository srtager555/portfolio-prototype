/* eslint-disable @next/next/no-img-element */
import { ImageContainer, Img } from "@/styles/projects/Galery.styles";
import Image from "next/image";

type props = Pick<ProjectData, "galery">;

export function Galery({ galery }: props) {
  return (
    <>
      {galery.map((el, index) => (
        <ImageContainer key={`a-${index}`}>
          {/* the same error from the header as well was ejected here */}
          {/* <Image src={el} alt="" /> */}
          <Img src={el.image} placeholder="blur" blurDataURL={el.blurImage} alt="" />
        </ImageContainer>
      ))}
    </>
  );
}
