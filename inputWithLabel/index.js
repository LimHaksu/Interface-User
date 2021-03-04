import InputWithLabel from "./InputWithLabel.js";

const root = document.querySelector("#root");
const inputId = new InputWithLabel({
    label: "아이디",
});
const inputPassword = new InputWithLabel({
    label: "비밀번호",
    type: "password",
});
root.appendChild(inputId.getEl());
root.appendChild(inputPassword.getEl());
