// components
import Accordion from "Shared/ts/components/accordion";

const toggleAccordionToggleState = (
    accordion: Element,
    control: HTMLInputElement
): void => {
    if (control.checked) {
        accordion.setAttribute("data-accordion-toggle", "");
        return;
    }

    accordion.removeAttribute("data-accordion-toggle");
};

const toggleAccordionContainerState = (
    accordion: Element,
    control: HTMLInputElement
): void => {
    if (control.checked) {
        accordion.setAttribute("data-accordion-many-containers", "");
        return;
    }

    accordion.removeAttribute("data-accordion-many-containers");
};

const accordion = new Accordion();

console.log(accordion);

const accordionToggleControl = document.querySelector(
    "#accordion-toggle"
) as HTMLInputElement;

accordionToggleControl.addEventListener("change", () => {
    toggleAccordionToggleState(accordion.root, accordionToggleControl);
});

const accordionContainerControl = document.querySelector(
    "#accordion-many-containers"
) as HTMLInputElement;

accordionContainerControl.addEventListener("change", () => {
    toggleAccordionContainerState(accordion.root, accordionContainerControl);
});
