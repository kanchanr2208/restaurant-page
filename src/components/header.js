export function loadHeader() {
    const header = document.createElement("header")
    const navbar = document.createElement("nav")
    const logo = document.createElement("div")
    const menuButton = document.createElement("button")
    const aboutUsButton = document.createElement("button")
    const findUsButton = document.createElement("button")

    header.classList.add("header")
    logo.classList.add("header-logo")
    navbar.classList.add("header-navbar")
    menuButton.classList.add("nav-menu")
    aboutUsButton.classList.add("nav-about-us")
    findUsButton.classList.add("nav-find-us")

    menuButton.textContent = "Menu"
    aboutUsButton.textContent = "About Us"
    findUsButton.textContent = "Find Us"

    navbar.append(menuButton, aboutUsButton, findUsButton)
    header.append(logo, navbar)

    return header
}