import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const HomePage: NextPage = () => {
  const { data } = useSession();

  if (!data?.user) {
    return <div>Unauthorized - 403. Please login</div>;
  }
  return (
    <div>
      <h1>Home Page</h1>
      <p>You are logged in as {data?.user?.email} </p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default HomePage;
