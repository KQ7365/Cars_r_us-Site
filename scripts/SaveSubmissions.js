import { saveSelectionSubmission } from "./TransientState.js";

const handleSubmitClick = (clickEvent) => {
  if (clickEvent.target.id === "save") {
    saveSelectionSubmission();
  }
};

export const saveTheInfo = () => {
  document.addEventListener("click", handleSubmitClick);
  return "<button id='save'>Place Order</button>";
};
