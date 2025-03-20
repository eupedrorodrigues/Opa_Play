import { fetchAPI } from "./index";

import { ListVideo } from "@/types/video";

export const getListEmployees = async (): Promise<ListVideo[]> => {
  const response = await fetchAPI({
    url: "video",
    options: {
      method: "GET",
    },
  });

  const data: ListVideo[] = await response.json();

  return data;
};
