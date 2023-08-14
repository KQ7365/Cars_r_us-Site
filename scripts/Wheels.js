import { setOwnWheel } from "./TransientState.js";

export const WheelChoices = async () => {
  document.addEventListener("change", makeWheelChange);
  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  let wheelHTML = "<select id='wheels'><option>Choose your wheels</option>";
  const wheelArray = wheels.map((wheel) => {
    return `
        <option value='${wheel.id}' name='wheel'>${wheel.type}</option>
       `;
  });

  wheelHTML += wheelArray.join("");
  wheelHTML += "</select>";
  return wheelHTML;
};

const makeWheelChange = (changeEvent) => {
  if (changeEvent.target.id === "wheels") {
    setOwnWheel(parseInt(changeEvent.target.value));
  }
};
