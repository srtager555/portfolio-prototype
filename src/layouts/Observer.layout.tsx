import { cloneElement, useState } from "react";
import { InView } from "react-intersection-observer";

type props = {
  children: children;
  unfolded?: boolean;
};

export function Observer({ children, unfolded }: props) {
  const [_unfolded, set_unfolded] = useState(false);

  return (
    <InView
      onChange={(inView) => {
        if (unfolded && inView) set_unfolded(true);
      }}
      skip={unfolded && _unfolded}
    >
      {({ inView, ref }) => {
        return cloneElement(children as unknown as JSX.Element, { inView, ref });
      }}
    </InView>
  );
}
