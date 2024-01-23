"use client";

import { useState } from "react";

interface User {
  _id: string;
  name: string;
  username: string;
  password: string;
}
interface Prop {
  userList: User[];
}

export default function UserList({ userList }: Prop) {
  const [users, setUsers] = useState<User[] | []>(userList);

  return (
    <div>
      <h1>유저 리스트</h1>
      <div>
        {users.length === 0 ? (
          <div>유저가 없음</div>
        ) : (
          users.map((user, index) => <div key={index}>{user.name}</div>)
        )}
      </div>
    </div>
  );
}
