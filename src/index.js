import "./styles.css";
import { loadHeader } from "./components/header.js";
import { loadFooter } from "./components/footer.js";
import { loadHomepageContent } from "./components/homePageContent.js";
import { loadMenuContent } from "./components/menuPageContent.js";
import { loadAboutUs } from "./components/aboutUsPageContent.js";
import {loadFindUsPageContent} from "./components/findUsPageContent.js"

import {loadLandingPage} from "./components/landingPage.js"

loadHeader();

const mainContent = document.createElement("div")
mainContent.classList.add("main-content")
mainContent.id = "main-content"
document.body.append(mainContent)

// mainContent.append(loadHomepageContent())
// mainContent.append(loadMenuContent())
// mainContent.append(loadAboutUs())
// mainContent.append(loadFindUsPageContent())

loadFooter();

// loadLandingPage()

/*Event listeners for nav bar buttons*/
const headerLogo = document.querySelector(".header-logo")
const navMenu = document.querySelector(".nav-menu")
const navAboutUs = document.querySelector(".nav-about-us")
const navFindUs = document.querySelector(".nav-find-us")

headerLogo.addEventListener("click", () => {
    mainContent.replaceChildren(); 
    mainContent.append(loadHomepageContent())
})

navMenu.addEventListener("click", () => {
    mainContent.replaceChildren();
    mainContent.append(loadMenuContent())
})

navAboutUs.addEventListener("click", () => {
    mainContent.replaceChildren();
    mainContent.append(loadAboutUs())
})

navFindUs.addEventListener("click", () => {
    mainContent.replaceChildren();
    mainContent.append(loadFindUsPageContent())
})

/*Event Listeners for footer: social links*/

function openSocialLink(url) {
    window.open(url, "_blank")
}

const footerFacebook = document.querySelector(".facebook-logo")
const footerGoogle = document.querySelector(".google-logo")
const footerInstagram = document.querySelector(".instagram-logo")

footerFacebook.addEventListener("click", () => {
    openSocialLink("https://www.facebook.com/")
})

footerGoogle.addEventListener("click", () => {
    openSocialLink("https://www.google.com/")
})

footerInstagram.addEventListener("click", () => {
    openSocialLink("https://www.instagram.com/")
})



