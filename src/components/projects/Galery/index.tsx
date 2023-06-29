/* eslint-disable @next/next/no-img-element */
import { Observer } from "@/layouts/Observer.layout";
import { ImageContainer, Img } from "@/styles/projects/Galery.styles";
import Image from "next/image";
import { useState } from "react";
import { InView } from "react-intersection-observer";

type props = Pick<ProjectData, "galery">;

export function Galery({ galery }: props) {
  return (
    <>
      {galery.map((el, index) => (
        <Observer key={`a-${index}`} unfolded>
          <ImageContainer>
            <Img src={el.image} placeholder="blur" blurDataURL={el.imageBlur} alt="" />
          </ImageContainer>
        </Observer>
      ))}
    </>
  );
}
