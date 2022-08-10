console.log("microfrontend-1.js");

export default function define({ eventBus }) {
  customElements.define(
    "microfrontend-1",
    class extends HTMLElement {
      constructor() {
        super();

        this.attachShadow({ mode: "open" });

        // ReactDOM.render(<App eventBus={eventBus} />, this.shadowRoot);
        // vuejs.mount(this.shadowRoot);

        const button = document.createElement("button");
        button.innerText = "Click me";
        button.addEventListener("click", () => {
          eventBus.dispatchEvent(
            new CustomEvent("microfrontend-1:button-click", {
              detail: {
                name: "Alex",
              },
            })
          );
        });

        this.shadowRoot.appendChild(button);
      }
    }
  );
}
