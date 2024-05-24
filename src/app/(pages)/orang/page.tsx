import Link from "next/link";

const UserPage = async () => {
  const getDataUser = async () => {
    const res = await fetch("http:localhost:3000/api/user", {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  const users = await getDataUser();
  // console.log(users);

  type userType = {
    id: number;
    name: string;
    email: string;
  };

  return (
    <>
      {users.data.map((user: userType) => (
        <Link href={`/orang/user/${user.id}`} key={user.id}>
          <div
            className="max-w-xs w-full bg-pink-300 border-b mb-2 text-black
            rounded-lg p-5"
          >
            <h1>{user.name}</h1>
          </div>
        </Link>
      ))}
    </>
  );
};

export default UserPage;
