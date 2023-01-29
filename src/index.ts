import { greeter } from "./greeter";

const user = "Jane";

document.getElementById('greeting')!.textContent = greeter(user);