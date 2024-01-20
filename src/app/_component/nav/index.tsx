import * as stylex from "@stylexjs/stylex";
import Link from "next/link";

export default function Nav() {
  return (
    <nav {...stylex.props(styles.nav)}>
      <div>
        <Link href={"/"} {...stylex.props(styles.link)}>
          <h1 {...stylex.props(styles.title)}>로그인/회원가입 연습</h1>
        </Link>
      </div>
      <div {...stylex.props(styles.linkContainer)}>
        <div>
          <Link href={"/signup"} {...stylex.props(styles.link)}>
            회원가입
          </Link>
        </div>
        <div>
          <Link href={"/login"} {...stylex.props(styles.link)}>
            로그인
          </Link>
        </div>
      </div>
    </nav>
  );
}

const styles = stylex.create({
  nav: {
    width: "dvw",
    borderBottom: "1px solid black",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    margin: 0,
    color: "black",
  },
  linkContainer: {
    display: "flex",
    gap: "10px",
  },
  link: {
    textDecorationColor: "none",
    textDecorationLine: "none",
    textDecoration: "none",
    color: "inherit",
  },
});
