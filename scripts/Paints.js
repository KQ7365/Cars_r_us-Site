import { setOwnPaint } from "./TransientState.js";

export const PaintChoices = async () => {
  document.addEventListener("change", handlePaintChange);
  const response = await fetch("http://localhost:8088/paints");
  const paints = await response.json();

  let paintHTML =
    "<select id='paints'><option value='0'>Choose your paint</option>";
  const paintDivArray = paints.map((paint) => {
    return `
    <option value='${paint.id}' name='paint'>${paint.color}</option>
   `;
  });

  paintHTML += paintDivArray.join("");
  paintHTML += "</select>";
  return paintHTML;
};

const handlePaintChange = (changeEvent) => {
  if (changeEvent.target.id === "paints") {
    setOwnPaint(parseInt(changeEvent.target.value));
  }
};
