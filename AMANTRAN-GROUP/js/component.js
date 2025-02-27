class CustomPageTransition extends HTMLElement {
    constructor() {
      super();
      // element created
    }
  
    connectedCallback() {
      this.innerHTML = `
              <div class="transition-wrapper transition-visible">
                <div class="loader"/>
              </div>
            `;
    }
  
    disconnectedCallback() {
      
    }
  
    static get observedAttributes() {
      return [
        
      ];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      
    }
  
    adoptedCallback() {
      
    }
  }
  
  customElements.define("custom-page-transition", CustomPageTransition);
  