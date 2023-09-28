import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";


export const UserView = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.id}. {user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
