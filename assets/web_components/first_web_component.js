class Tooltip extends HTMLElement {
    constructor() {
        // Always call super() when extending built-in classes
        super();
    }

    // This lifecycle method is called automatically when the element
    // is inserted into the DOM (added to the page)
    connectedCallback() {
        console.log("It`s alive!!!"); // Debug message to confirm the element is initialized

        // Create a new <span> element to act as the tooltip icon
        const tooltipIcon = document.createElement("span");

        // Set its visible text
        tooltipIcon.textContent = ' (?) ';
        tooltipIcon.addEventListener("mouseenter", this._showTooltip);
        // Append the tooltip icon to the custom element
        this.appendChild(tooltipIcon);
    }

    _showTooltip() {
        console.log("Tooltip");
    }
}

// Register the custom element with the browser
// 'my-tooltip' is the name used in HTML, <my-tooltip></my-tooltip>
customElements.define("my-tooltip", Tooltip);
