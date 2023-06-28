import barbershop_app from "./barbershop_app";
import wrapping_letters from "./wrapping_letters";
import this_page from "./this_page";

export function GetProjectFace() {
  return [wrapping_letters, this_page, barbershop_app];
}

export function GetNextProjectFace(id: "wrapping_letters" | "this_page" | "barbershop_app") {
  const projectsList = [barbershop_app, wrapping_letters, this_page];

  // if the can find a project so will return the first project
  const currentProjectIndex = projectsList.indexOf(projectsList.find((_) => _.id === id) ?? projectsList[0]);
  const nextProjectIndex = currentProjectIndex + 1 > projectsList.length - 1 ? 0 : currentProjectIndex + 1;

  return projectsList[nextProjectIndex];
}
