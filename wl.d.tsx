declare module "wrapping-letters-react" {
  import { Component } from "react";

  interface props {
    text?: string;
    textOptions?: {
      ClassToAdd?: string;
      SelectClass?: {
        wordToSearch: string | string[];
        classToAdd: string | string[];
        spaceBetweenWord?: boolean;
      };
      SpecialWrapp?: {
        wordToSearch: string | string[];
        structureToAdd: JSX.Element | JSX.Element[] | { structureToAdd: JSX.Element; props: {} }[];
        spaceBetweenWord?: boolean;
      };
      PerWord?: boolean;
    };
    structure?: (props: {
      letter: string;
      cssClass: string;
      specialWrapp: { hasCustomWrapp: boolean; NewWrappStructure: Component<{ letter: string; cssClass: string }> };
      index: number;
    }) => JSX.Element;
  }

  function WL(props: props): JSX.Element[];

  export = WL;
}
