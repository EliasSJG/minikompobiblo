import { uglyButton } from "./components/UglyButton/uglybutton";

const app = document.querySelector("#app") as HTMLDivElement;

const button = uglyButton("testar den nya fula knappen");
app.appendChild(button);
