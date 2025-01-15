import "./_uglybutton.scss";

export const uglyButton = (buttonText: string) => {
  const button = document.createElement("button");
  button.classList.add("component-button");
  button.textContent = buttonText;
  button.addEventListener("click", () => {
    const newButton = document.createElement("button");
    newButton.classList.add("component-button");
    newButton.textContent = "Ny knapp";
    document.body.appendChild(newButton);
  });

  return button;
};
