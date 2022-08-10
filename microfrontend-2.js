console.log("microfrontend-2.js");

export default function define({ eventBus }) {
  customElements.define(
    "microfrontend-2",
    class extends HTMLElement {
      constructor() {
        super();

        this.attachShadow({ mode: "open" });

        // ReactDOM.render(<App eventBus={eventBus} />, this.shadowRoot);
        // vuejs.mount(this.shadowRoot);

        eventBus.addEventListener("microfrontend-1:button-click", () => {
          this.shadowRoot.innerHTML = `<h2>Microfrontend 2</h2>`;
        });
      }
    }
  );
}
