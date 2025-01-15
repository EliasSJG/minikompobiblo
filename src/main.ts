import { uglyButton } from "./components/UglyButton/uglybutton";
import "./main.scss";

const app = document.querySelector("#app") as HTMLDivElement;

const button = uglyButton("Ful Knapp");
app.appendChild(button);
