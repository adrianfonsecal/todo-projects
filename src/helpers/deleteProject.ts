import { useContext } from "react";
import { ProjectContext } from "../App";
import { url } from "./url";

export const deleteProject = async (id: string) => {
  const response = await fetch(`${url}${id}/`, {
    method: "DELETE",
  });
  return response.json();
};
