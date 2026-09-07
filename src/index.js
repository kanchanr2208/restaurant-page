import "./styles.css";
import { loadHeader } from "./components/header.js";
import { loadFooter } from "./components/footer.js";
import { loadHomepageContent } from "./components/homepageContent.js";

loadHeader();

const mainContent = document.createElement("div")
mainContent.classList.add("main-content")
mainContent.id = "main-content"
document.body.append(mainContent)

mainContent.append(loadHomepageContent())

loadFooter();