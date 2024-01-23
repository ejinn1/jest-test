"use client";

import * as stylex from "@stylexjs/stylex";
import { useRouter } from "next/navigation";

import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function LoginModal() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };

  const onSubmitForm: FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("로그인 성공", data);
      } else {
        console.log("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 요청 오류", error);
    }
  };

  return (
    <div {...stylex.props(styles.modalBackgroud)}>
      <div {...stylex.props(styles.modal)}>
        <div {...stylex.props(styles.closeButton)} onClick={onClickClose}>
          X
        </div>
        <div {...stylex.props(styles.modalHeader)}>
          <h1>로그인</h1>
        </div>
        <div {...stylex.props(styles.modalMain)}>
          <form
            {...stylex.props(styles.form)}
            onSubmit={onSubmitForm}
            method="POST"
          >
            <div {...stylex.props(styles.modalBody)}>
              <div {...stylex.props(styles.inputDiv)}>
                <label {...stylex.props(styles.inputLabel)} htmlFor="id">
                  아이디
                </label>
                <input
                  {...stylex.props(styles.input)}
                  id="id"
                  value={username}
                  onChange={onChangeId}
                  placeholder={`login@example.com`}
                />
              </div>
              <div {...stylex.props(styles.inputDiv)}>
                <label {...stylex.props(styles.inputLabel)} htmlFor="password">
                  비밀번호
                </label>
                <input
                  {...stylex.props(styles.input)}
                  id="password"
                  value={password}
                  onChange={onChangePassword}
                  placeholder="8글자 이상, 특수문자 하나 이상"
                />
              </div>
            </div>
            <div {...stylex.props(styles.modalFooter)}>
              <button {...stylex.props(styles.loginButton)}>로그인 하기</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  modalBackgroud: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modal: {
    backgroundColor: "white",
    top: "20%",
    position: "relative",
    maxWidth: "80vw",
    minWidth: "600px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    height: "450px",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    fontSize: "16px",
    fontWeight: "600",
    top: "20px",
    left: "20px",
    width: "28px",
    height: "28px",
    cursor: "pointer",
    backgroundColor: {
      ":hover": "lightgray",
    },
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalMain: {
    padding: "0 60px 30px 60px",
    height: "100%",
  },
  form: {
    position: "relative",
    height: "100%",
  },
  modalBody: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  inputDiv: {
    display: "flex",
    flexDirection: "column",
    height: "50px",
    position: "relative",
    margin: "12px 0",
  },
  inputLabel: {
    width: "100%",
    fontSize: "20px",
    fontWeight: "700",
  },
  input: {
    width: "100%",
    padding: "10px 0 5px 0",
    border: "0",
    borderBottom: "1px solid black",
    outlineWidth: "0",
    fontSize: "18px",
    fontWeight: "400",
  },
  modalFooter: {
    position: "absolute",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
  },
  loginButton: {
    width: "100%",
    height: "50px",
    borderRadius: "16px",
    backgroundColor: {
      default: "lightgray",
      ":hover": "skyblue",
    },
    border: 0,
    color: "white",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
  },
});
