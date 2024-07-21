"use client";
import Signup from "@/components/Signup";
import { useState } from "react";

interface dataTypes{
    email :string,
    password :string,
    firstname :string,
    lastname :string
}
function signin() {
  const [data, setData] = useState<dataTypes>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  return <Signup data={data} setData={setData} />;
}

export default signin;
