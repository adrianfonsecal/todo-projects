import { url } from "./url";

export const deleteProject = async (id: string) => {
  const response = await fetch(`${url}${id}/`, {
    method: "DELETE",
  });
  console.log(response);
  return response;
};

