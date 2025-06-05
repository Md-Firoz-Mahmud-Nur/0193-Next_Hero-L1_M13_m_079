export const getPosts = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const data = await res.json();
  return data;
};
