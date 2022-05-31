import { useQuery } from "@apollo/client";
import React from "react";
import "./App.css";
import { UserInfoDocument, UserInfoQuery } from "./generated";

function App() {
  const { data, loading, error } = useQuery<UserInfoQuery>(UserInfoDocument);

  return <p>{data?.viewer.login}</p>;
}

export default App;
