import * as stylex from "@stylexjs/stylex";
import Link from "next/link";

export default function Main() {
  return (
    <main {...stylex.props(styles.main)}>
      <div {...stylex.props(styles.buttonContainer)}>
        <Link href={"/signup"} {...stylex.props(styles.button, styles.link)}>
          회원가입 버튼
        </Link>
        <Link href={"login"} {...stylex.props(styles.button, styles.link)}>
          로그인 버튼
        </Link>
      </div>
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
