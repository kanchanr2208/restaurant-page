import {CreateMenuCard} from "./menuCard.js"

export function createMenuColumn(array) {
    const menuColumn = document.createElement("div")
    menuColumn.classList.add("menu-col")
    array.forEach(item => {
        const courseCard = CreateMenuCard(item)
        menuColumn.appendChild(courseCard)
    })

    return menuColumn
}