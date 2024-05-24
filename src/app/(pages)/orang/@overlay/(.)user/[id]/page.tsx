const UserPage = async ({ params }: { params: { id: string } }) => {
  const getDataUser = async () => {
    const res = await fetch(`http:localhost:3000/api/user?id=${params.id}`, {
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

  const user = await getDataUser();
  console.log(user);

  type detailUserType = {
    id: number;
    name: string;
    email: string;
  };
  return (
    <>
      {/* <div className="text-black max-w-sm w-full bg-white rounded-lg p-5 shadow"> */}
      <div className="bg-red-500">
        <h1>Nama : {user.data.name}</h1>
        <h1>Email : {user.data.email}</h1>
      </div>
    </>
  );
};

export default UserPage;
