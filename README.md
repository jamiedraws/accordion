# Accordion
An accordion is a user-interface that can both expand and collapse additional information in a *container* using a *controller*, also can be known as a trigger. 

For each *container* and *controller*, a distinct relationship is established through unique identifiers. A *controller* must reference the id of a *container* through the `aria-controls` attribute and a *container* must reference the id of a *controller* through the `aria-labelledby` attribute. This setup is required in order for an accordion to be operational. An inappropriate setup will cause the `Accordion` api to report an error to the browser console.

**User-Interface**
The accordion is accessible via a pointer-device, such as a mouse, and a keyboard, such as *tab* and *shift + tab* and *arrow* keys. In conformance to accessibility guidelines, the accordion will rotate through all of the *controllers* when navigating using the *arrow* keys. Clicking and pressing *enter* will allow the *controller* to control a *container* given the appropriate settings are equipped.

**HTML**
The accordion uses two attributes to control the behavior. `data-accordion-toggle` will allow a *controller* to expand and collapse the *container* when activated. `data-accordion-many-containers` will allow many *containers* to expand.

**SCSS**
Create a new partial `_accordion.scss` in a *components* folder. Generate the snippet and customize as needed. Visibility styles are provided for *containers* that are set with the `hidden` attribute and for *controllers* that receive focus. When a *controller* receives focus, the entire accordion will also receive focus as well.

**TypeScript**
A new instance of the `Accordion` api will be assigned to a *const* variable. Advanced functionality can then be accessible from the *const* variable. 

**References**
[https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html](https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html)

**Setup Tutorial**
[https://watch.screencastify.com/v/8BbDZQZ82Ef8k7bKcdLW](https://watch.screencastify.com/v/8BbDZQZ82Ef8k7bKcdLW)

**Demo**
[https://adobexd.dtmstage.com/ACCORDION/1.0000/index.dtm](https://adobexd.dtmstage.com/ACCORDION/1.0000/index.dtm)