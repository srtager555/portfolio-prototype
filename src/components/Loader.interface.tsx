import { LoaderC } from "@/styles/index.styles";

interface props {
  loaded: boolean;
}

export function Loader({ loaded }: props) {
  return <LoaderC loaded={loaded}>&&&&&&&&&&&&&&&</LoaderC>;
}
