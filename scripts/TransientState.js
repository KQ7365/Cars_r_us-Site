const transientState = {
  paintId: 0,
  interiorId: 0,
  upgradeId: 0,
  wheelId: 0,
};

export const setOwnPaint = (chosenPaint) => {
  transientState.paintId = chosenPaint;
  console.log(transientState);
};

export const setOwnInterior = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
  console.log(transientState);
};

export const setOwnUpgrade = (chosenUpgrade) => {
  transientState.upgradeId = chosenUpgrade;
  console.log(transientState);
};

export const setOwnWheel = (wheelUpgrade) => {
  transientState.wheelId = wheelUpgrade;
  console.log(transientState);
};

export const saveSelectionSubmission = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  const response = await fetch("http://localhost:8088/orders", postOptions);

  const customEvent = new CustomEvent("savingOrdersHTML");
  document.dispatchEvent(customEvent);
};
