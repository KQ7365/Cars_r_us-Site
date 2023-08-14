import { PaintChoices } from "./Paints.js";
import { InteriorChoices } from "./Interiors.js";
import { TechChoices } from "./Technologies.js";
import { WheelChoices } from "./Wheels.js";
import { saveTheInfo } from "./SaveSubmissions.js";
import { Orders } from "./Orders.js";
const container = document.querySelector("#container");

const render = async () => {
  const paintHTML = await PaintChoices();
  const interiorHTML = await InteriorChoices();
  const upgradeHTML = await TechChoices();
  const wheelHTML = await WheelChoices();
  const buttonHTML = saveTheInfo();
  const orderHTML = await Orders();
  container.innerHTML = `
<h1 class="title"> Cars-R-Us</h1>

<article class="paint_choices">
<section>
    <h2>Paint Choices</h2>
    ${paintHTML}
</section>

<article class="interior_choices">
<section>
    <h2>Interior Choices</h2>
    ${interiorHTML}
</section>

<article class="tech_choices">
<section>
    <h2>Technology Choices</h2>
    ${upgradeHTML}
</section>

<article class="wheel_choices">
<section>
    <h2>Wheel Choices</h2>
    ${wheelHTML}
</section>

<article class="customOrders">
<h2>Click below to place your order</h2>
${buttonHTML}
</article>

<article class="orderz">
<section>
    <h2>Custom Orders</h2>
    ${orderHTML}
</section>
</article>
`;
};
document.addEventListener("savingOrdersHTML", render);
render();
