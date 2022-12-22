import { API_URLS } from "../utils/constants"; // for API url

export const getPosts = async () => {
  const url = API_URLS.getURL();
  const data = await fetch(url).then((response) => response.json());
  return data;
};

export const addPost = async (userId, title) => {
  const url = API_URLS.getURL();
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      userId,
      // id: lastId + 1,
      title,
    }),
  });
};

export const updateAlbumApiCall = async (userId, id, title) => {
  const url = API_URLS.getURL();
  try {
    const response = await fetch(url + id, {
      method: "PUT",
      body: JSON.stringify({
        userId,
        id,
        title,
      }),
    });
    await response.json();
  } catch (error) {
    console.log(error);
    return;
  }
};

export const deleteAlbumCall = async (id) => {
  const url = API_URLS.getURL();
  await fetch(url + id, {
    method: "DELETE",
  });
};
