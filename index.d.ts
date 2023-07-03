type children = JSX.Element | JSX.Element[] | string;

type img = {
  image: string;
  imageBlur: string;
};

type CardData = {
  id: string;
  project_url: string;
  project_face: img;
  name: string;
};

type ProjectData = {
  image: img;
  title: string;
  desc: string;
  content: string;
  galery: img[];
};

interface props {
  letter?: string;
  cssClass?: string;
  specialWrapp?: { hasCustomWrapp: boolean; NewWrappStructure: Component<{ letter: string; cssClass: string }> };
  index?: number;
}

type StructureProps = (props: props) => JSX.Element;
