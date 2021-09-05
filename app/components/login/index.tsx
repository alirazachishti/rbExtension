import React, { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ILoginData, useLogin } from "../../hooks";
import { UserRoles } from "../../hooks/constants";
import { Connect } from "../../utils/state";

interface Props {
  loginUser: (data: ILoginData) => void;
}
const Login: FC<Props> = ({ loginUser }) => {
  const [email, setEmail] = useState("");
  const {
    res: { loading, data },
    action: login,
  } = useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login?.({ email });
  };

  useEffect(() => {
    if (!loading && data)
      loginUser({
        email: data.email,
        isEmployee: data.role === UserRoles.employee,
      });
  }, [data]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="submit" disabled={!email.length} />
      </form>
    </div>
  );
};
export default Connect(Login);
