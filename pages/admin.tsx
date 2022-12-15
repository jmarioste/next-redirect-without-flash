import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import React from "react";
const AdminPage = () => {
  const { data } = useSession();
  if (!data?.user) {
    return <div>Unauthorized - 403. Please login</div>;
  }
  return <div>AdminPage</div>;
};
export default AdminPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ req: ctx.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
