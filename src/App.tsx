import { useQuery } from "@apollo/client";
import React from "react";
import { UserInfoDocument, UserInfoQuery } from "./generated";

function App() {
  const { data, loading, error } = useQuery<UserInfoQuery>(UserInfoDocument);

  if (loading) return <p>...loding</p>;
  if (error) return <p>error</p>;

  return <p>{data?.viewer.login}</p>;
}

export default App;
