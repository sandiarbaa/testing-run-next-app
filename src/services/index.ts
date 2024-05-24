export const getData = async (url: string) => {
  const res = await fetch(url, {
    cache: "force-cache",
  });
  // const res = await fetch("http://localhost:3000/api/product", {
  //   cache: "force-cache",
  //   next: { revalidate: 30 },
  // });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
