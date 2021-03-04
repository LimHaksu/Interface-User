const classes = {
    iputWithLabel: "input-with-label",
    labelCenter: "label-center",
};

export default class InputWithLabel {
    #el;
    #input;
    #label;
    /**
     *
     * @param {*} attributes {[key:string]: (value:string)} 형태의 속성
     */
    constructor(attributes) {
        this.#el = document.createElement("div");
        this.#input = document.createElement("input");
        this.#label = document.createElement("label");

        this.#el.appendChild(this.#input);
        this.#el.appendChild(this.#label);
        if (typeof attributes === "object") {
            for (const key of Object.keys(attributes)) {
                switch (key) {
                    case "label":
                        this.#label.textContent = attributes[key];
                        break;
                    default:
                        this.#input.setAttribute(key, attributes[key]);
                        break;
                }
            }
        }

        this.init();
    }

    init() {
        this.#el.classList.add(classes.iputWithLabel);
        this.#label.className = classes.labelCenter;

        this.#input.addEventListener("focus", () => {
            this.#label.classList.remove(classes.labelCenter);
        });
        this.#input.addEventListener("blur", () => {
            if (this.#input.value.length > 0) {
                return;
            }
            this.#label.classList.add(classes.labelCenter);
        });
        this.#label.addEventListener("click", () => {
            this.#input.focus();
        });
    }

    getEl() {
        return this.#el;
    }
}
