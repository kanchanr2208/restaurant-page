import {menuTitleContent, menuDescContent, menuColumnOne, menuColumnTwo} from "/src/data/menuData.js"
import {createMenuColumn} from "./menuColumn.js"

export function loadMenuContent() {
    const menuPageContainer = document.createElement("div");
    const menuTitle = document.createElement("h2");
    const menuDesc = document.createElement("p");

    const menuContainer = document.createElement("div");

    menuPageContainer.classList.add("menupage-container")
    menuTitle.classList.add("menu-title")
    menuDesc.classList.add("menu-desc")

    menuContainer.classList.add("menu-container")

    menuTitle.textContent = menuTitleContent
    menuDesc.textContent = menuDescContent

    const menuColOne = createMenuColumn(menuColumnOne)
    const menuColTwo = createMenuColumn(menuColumnTwo)

    menuContainer.append (menuColOne, menuColTwo)

    menuPageContainer.append(menuTitle, menuDesc, menuContainer)

    return menuPageContainer
}