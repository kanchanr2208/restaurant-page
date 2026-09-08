import "./styles.css";
import { loadHeader } from "./components/header.js";
import { loadFooter } from "./components/footer.js";
import { loadHomepageContent } from "./components/homePageContent.js";
import { loadMenuContent } from "./components/menuPageContent.js";
import { loadAboutUs } from "./components/aboutUsPageContent.js";
import {loadFindUsPageContent} from "./components/findUsPageContent.js"

import {loadLandingPage} from "./components/landingPage.js"

// loadHeader();

const mainContent = document.createElement("div")
mainContent.classList.add("main-content")
mainContent.id = "main-content"
mainContent.textContent = "Main Content"
// document.body.append(mainContent)

// mainContent.append(loadHomepageContent())
// mainContent.append(loadMenuContent())
// mainContent.append(loadAboutUs())
// mainContent.append(loadFindUsPageContent())

// loadFooter();

loadLandingPage()