import { setOwnInterior } from "./TransientState.js";

export const InteriorChoices = async () => {
  document.addEventListener("change", handleInteriorChange);
  const response = await fetch("http://localhost:8088/interiors");
  const interiors = await response.json();

  let interiorHTML =
    "<select id='interiors'><option>Choose your interior</option>";

  const interiorDivArray = interiors.map((interior) => {
    return `
      <option value='${interior.id}' name='interior'>${interior.fabric}</option>
     `;
  });

  interiorHTML += interiorDivArray.join("");
  interiorHTML += "</select>";
  return interiorHTML;
};

const handleInteriorChange = (changeEvent) => {
  if (changeEvent.target.id === "interiors") {
    setOwnInterior(parseInt(changeEvent.target.value));
  }
};
