import { connectDB } from "@/util/database";
import * as stylex from "@stylexjs/stylex";
import { ObjectId } from "mongodb";
import Link from "next/link";
import UserList from "../userList";

interface User {
  _id: ObjectId;
  name: string;
  username: string;
  password: string;
}

export default async function Main() {
  const db = (await connectDB).db("test");
  const users: User[] = await db.collection<User>("user").find().toArray();
  const userList = users.map((user) => ({
    ...user,
    _id: user._id.toString(),
  }));
  return (
    <main {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.buttonContainer)}>
        <Link href={"/signup"} {...stylex.props(styles.button, styles.link)}>
          회원가입 버튼
        </Link>
        <Link href={"/login"} {...stylex.props(styles.button, styles.link)}>
          로그인 버튼
        </Link>
      </div>
      <UserList userList={userList} />
    </main>
  );
}

const styles = stylex.create({
  main: {
    paddingTop: "10px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    padding: "10px",
  },
  button: {
    padding: "10px",
    border: {
      default: "2px solid skyblue",
      ":hover": null,
    },
    borderRadius: "12px",
    backgroundColor: {
      default: null,
      ":hover": "skyblue",
    },
  },
  link: {
    textDecorationColor: "none",
    textDecorationLine: "none",
    textDecoration: "none",
    color: "inherit",
  },
});
