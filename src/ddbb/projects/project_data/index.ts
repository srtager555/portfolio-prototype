import wrapping_letters from "./wrapping_letters";
import this_page from "./this_page";

interface props {
  id: "wrapping_letters" | "this_page";
}

export function findProject({ id }: props) {
  const projects = {
    wrapping_letters,
    this_page,
  };

  if (!projects[id]) return;

  return projects[id];
}
