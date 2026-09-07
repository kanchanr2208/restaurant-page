import "./styles.css";
import { loadHeader } from "./components/header.js";
import { loadFooter } from "./components/footer.js";
import { loadHomepageContent } from "./components/homePageContent.js";
import { loadMenuContent } from "./components/menuPageContent.js";

loadHeader();

const mainContent = document.createElement("div")
mainContent.classList.add("main-content")
mainContent.id = "main-content"
// mainContent.textContent = "Main Content"
document.body.append(mainContent)

// mainContent.append(loadHomepageContent())
mainContent.append(loadMenuContent())


loadFooter();