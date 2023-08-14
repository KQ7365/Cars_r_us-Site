import { setOwnUpgrade } from "./TransientState.js";

export const TechChoices = async () => {
  document.addEventListener("change", setOwnTech);
  const response = await fetch(" http://localhost:8088/upgrades");
  const upgrades = await response.json();

  let upgradeHTML =
    "<select id='upgrades'><option>Choose your upgrade</option>";
  const upgradeDivArray = upgrades.map((upgrade) => {
    return `
      <option value='${upgrade.id}' name='techy'>${upgrade.option}</option>
     `;
  });

  upgradeHTML += upgradeDivArray.join("");
  upgradeHTML += "</select>";
  return upgradeHTML;
};

const setOwnTech = (changeEvent) => {
  if (changeEvent.target.id === "upgrades") {
    setOwnUpgrade(parseInt(changeEvent.target.value));
  }
};
