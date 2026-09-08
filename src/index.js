import "./styles.css";
import { loadHeader } from "./components/header.js";
import { loadFooter } from "./components/footer.js";
import { loadHomepageContent } from "./components/homePageContent.js";
import { loadMenuContent } from "./components/menuPageContent.js";
import { loadAboutUs } from "./components/aboutUsPageContent.js";
import {loadFindUsPageContent} from "./components/findUsPageContent.js"

import {loadLandingPage} from "./components/landingPage.js"

loadLandingPage()


let mainContent = document.createElement("div");
mainContent.classList.add("main-content");
mainContent.id = "main-content";

//For the animation
let currentPage = "home";

//Time out for landing page to appear and then fade out
setTimeout(() => {
    const landingPageContainer = document.querySelector(".landing-page-container")
    landingPageContainer.classList.add("fade-out")

}, 2500) 

setTimeout(() => {
    const landingPageContainer = document.querySelector(".landing-page-container")
    landingPageContainer.remove()

    //Load header and add animation classes
    const header = loadHeader()
    if(header) {
        header.classList.add("animate-slide", "start-top") 
    }
    document.body.append(header)

    
    
    //Load homepage and add animation classes for slide in
    const homepage = loadHomepageContent();
    const homepageLHS = homepage.querySelector(".homepage-column-one"); 
    const homepageRHS = homepage.querySelector(".homepage-column-two");

    if (homepageLHS) {
        homepageLHS.classList.add("animate-slide", "start-left");
    } 

    if (homepageRHS) {
        homepageRHS.classList.add("animate-slide", "start-right");
    }
   
    mainContent.append(homepage)
    document.body.append(mainContent)
    
    //Load footer and add animation classes to slide in
    const footer = loadFooter()
    if(footer) {
        footer.classList.add("animate-slide", "start-bottom")
    }
    
    document.body.append(footer)

    handleNavbarClickEvents()
    handleMainContentClickEvents()
    handleFooterClickEvents()

    setTimeout(() => {
        if(header) header.classList.add("slide-in");
        if(footer) footer.classList.add("slide-in");
        if(homepageLHS) homepageLHS.classList.add("slide-in");
        if(homepageRHS) homepageRHS.classList.add("slide-in");
    }, 50); // 50 milliseconds is enough time for the browser to catch up

}, 3300) 



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
    transitionToPage(loadHomepageContent, "home")
}

function openMenu() {
    transitionToPage(loadMenuContent, "menu")
}

function openAboutUs() {
    transitionToPage(loadAboutUs, "about")
}

function openFindUs() {
    transitionToPage(loadFindUsPageContent, "find")
}

function openExternalLinkInNewTab(url) {
    window.open(url, "_blank")
}

/* To highlight the page that is active on the navbar, except the homepage, since that is the logo*/
function updateActiveNavButton(pageName) {
    const navMenu = document.querySelector(".nav-menu");
    const navAboutUs = document.querySelector(".nav-about-us");
    const navFindUs = document.querySelector(".nav-find-us");


    if (navMenu) navMenu.classList.remove("active-nav-button");
    if (navAboutUs) navAboutUs.classList.remove("active-nav-button");
    if (navFindUs) navFindUs.classList.remove("active-nav-button");

    if (pageName === "menu" && navMenu) {
        navMenu.classList.add("active-nav-button");
    } else if (pageName === "about" && navAboutUs) {
        navAboutUs.classList.add("active-nav-button");
    } else if (pageName === "find" && navFindUs) {
        navFindUs.classList.add("active-nav-button");
    }
}

/*Master Transition animation function for sliding sections in and out. Mostly taken from Gemini*/
function transitionToPage(pageLoadFunction, pageName) {

    // If the clicked button matches the current page, stop the function entirely.
    if (currentPage === pageName) return;
    
    //If it passes the check, update the tracker to the new page.
    currentPage = pageName;

    //highlight on navbar which page is active
    updateActiveNavButton(pageName);

    //Remove slide in animation from all child elements of mainContent
    const currentElements = mainContent.querySelectorAll(".animate-slide");
    currentElements.forEach(element => element.classList.remove("slide-in"))

    //slide out based on pagename
    setTimeout(() => {
        //Remove everything from mainContent
        mainContent.replaceChildren();
        const newPage = pageLoadFunction();

        let topElements = [];
        let leftElements = [];
        let rightElements = [];

        if (pageName === "home") {
            leftElements.push(newPage.querySelector(".homepage-column-one"));
            rightElements.push(newPage.querySelector(".homepage-column-two"));
        } else if (pageName === "menu") {
            topElements.push(newPage.querySelector(".menu-header")); 
            const menuColumns = newPage.querySelector(".menu-container");
            if (menuColumns) {
                leftElements.push(menuColumns.firstElementChild);
                rightElements.push(menuColumns.lastElementChild);
            }
        } else if (pageName === "about") {
            leftElements.push(newPage.querySelector(".about-us-text-container"));
            rightElements.push(newPage.querySelector(".about-us-image"));
        } else if (pageName === "find") {
            leftElements.push(newPage.querySelector(".find-us-text-container")); 
            rightElements.push(newPage.querySelector(".find-us-image-container"));
        }

        //apply initial slide in animation 
        topElements.forEach(el => { if(el) el.classList.add("animate-slide", "start-top") });
        leftElements.forEach(el => { if(el) el.classList.add("animate-slide", "start-left") });
        rightElements.forEach(el => { if(el) el.classList.add("animate-slide", "start-right") });

        //append to mainContent
        mainContent.append(newPage);

        // 7. Micro-delay to pull them onto the screen
        setTimeout(() => {
            topElements.forEach(el => { if(el) el.classList.add("slide-in") });
            leftElements.forEach(el => { if(el) el.classList.add("slide-in") });
            rightElements.forEach(el => { if(el) el.classList.add("slide-in") });
        }, 50);
    }, 800)
}