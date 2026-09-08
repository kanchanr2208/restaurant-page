import {titleText, descText, menuColumnOne, menuColumnTwo} from "/src/data/menuData.js"
import {createMenuColumn} from "./menuColumn.js"

export function loadMenuContent() {
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const desc = document.createElement("p");
    const header = document.createElement("div");

    const columnContainer = document.createElement("div");

    container.classList.add("menupage-container")

    header.classList.add("menu-header")
    title.classList.add("menu-title")
    desc.classList.add("menu-desc")

    columnContainer.classList.add("menu-container")

    title.textContent = titleText
    desc.textContent = descText

    header.append(title, desc)

    const menuColOne = createMenuColumn(menuColumnOne)
    const menuColTwo = createMenuColumn(menuColumnTwo)

    columnContainer.append(menuColOne, menuColTwo)

    container.append(header, columnContainer)

    return container
}