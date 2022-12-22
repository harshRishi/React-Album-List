import { API_URLS } from "../utils/constants"; // for API url

export const getPosts = async () => {
  const url = API_URLS.getURL();
  const data = await fetch(url).then((response) => response.json());
  return data;
};

export const addPost = async (userId, lastId, title) => {
  const url = API_URLS.getURL();
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      userId,
      id: lastId + 1,
      title,
    }),
  });
};
