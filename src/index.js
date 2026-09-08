import "./styles.css";
import { loadHeader } from "./components/header.js";
import { loadFooter } from "./components/footer.js";
import { loadHomepageContent } from "./components/homePageContent.js";
import { loadMenuContent } from "./components/menuPageContent.js";
import { loadAboutUs } from "./components/aboutUsPageContent.js";
import {loadFindUsPageContent} from "./components/findUsPageContent.js"

import {loadLandingPage} from "./components/landingPage.js"

loadLandingPage()

// loadHeader();
// handleNavbarClickEvents()

// const mainContent = document.createElement("div")
// mainContent.classList.add("main-content")
// mainContent.id = "main-content"
// document.body.append(mainContent)
// handleMainContentClickEvents()


// loadFooter()
// handleFooterClickEvents()


/*Event listeners for nav bar buttons*/
function handleNavbarClickEvents() {
    const headerLogo = document.querySelector(".header-logo")
    const navMenu = document.querySelector(".nav-menu")
    const navAboutUs = document.querySelector(".nav-about-us")
    const navFindUs = document.querySelector(".nav-find-us")

    headerLogo.addEventListener("click", () => {
        openHome()
    })

    navMenu.addEventListener("click", () => {
        openMenu()
    })

    navAboutUs.addEventListener("click", () => {
        openAboutUs()
    })

    navFindUs.addEventListener("click", () => {
        openFindUs()
    })

}

/*Event Listeners for footer: social links*/
function handleFooterClickEvents() {
    const footer = document.querySelector(".footer")

    /*socal buttons */
    footer.addEventListener("click", (e) => {
        
        if(e.target.classList.contains("google-logo")) {                
            openExternalLinkInNewTab("https://www.google.com/")
            console.log("google clicked")

        } else if(e.target.classList.contains("facebook-logo")) {
            openExternalLinkInNewTab("https://www.facebook.com/")
            console.log("facebook clicked")
            
        } else if(e.target.classList.contains("instagram-logo")) {
            openExternalLinkInNewTab("https://www.instagram.com/")
            console.log("instagram clicked")
        }
    })
}

/*Event Listeners to Main Content Div section */
function handleMainContentClickEvents() {
    mainContent.addEventListener("click", (e) => {
        /*Homepage buttons */
        if (e.target.classList.contains("homepage-menu")) {
            openMenu()
        } else if(e.target.classList.contains("homepage-about-us")) {
            openAboutUs()

        } else if(e.target.classList.contains("homepage-find-us")) {
            openFindUs()
        } else if(e.target.classList.contains("google-logo")) {                /*find us socal buttons */
            openExternalLinkInNewTab("https://www.google.com/")

        } else if(e.target.classList.contains("facebook-logo")) {
            openExternalLinkInNewTab("https://www.facebook.com/")
            
        } else if(e.target.classList.contains("instagram-logo")) {
            openExternalLinkInNewTab("https://www.instagram.com/")
        }

    })

}

function openHome() {
    mainContent.replaceChildren()
    mainContent.append(loadHomepageContent())
}

function openMenu() {
    mainContent.replaceChildren()
    mainContent.append(loadMenuContent())
}

function openAboutUs() {
    mainContent.replaceChildren()
    mainContent.append(loadAboutUs())
}

function openFindUs() {
    mainContent.replaceChildren()
    mainContent.append(loadFindUsPageContent())
}

function openExternalLinkInNewTab(url) {
    window.open(url, "_blank")
}