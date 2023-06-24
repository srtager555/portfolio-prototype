import wrapping_letters from "./wrapping_letters";

interface props {
  id: "wrapping_letters";
}

export function findProject({ id }: props) {
  const projects = {
    wrapping_letters,
  };

  if (!projects[id]) return;

  return projects[id];
}
