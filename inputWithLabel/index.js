import InputWithLabel from "./InputWithLabel.js";

const root = document.querySelector("#root");
const inputWithLabel = new InputWithLabel({
    label: "아이디",
});
root.appendChild(inputWithLabel.getEl());
