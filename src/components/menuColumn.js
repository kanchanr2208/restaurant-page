import {CreateMenuCard} from "./menuCard.js"

export function createMenuColumn(array) {
    const column = document.createElement("div")
    column.classList.add("menu-col")
    array.forEach(item => {
        const courseCard = CreateMenuCard(item)
        column.appendChild(courseCard)
    })

    return column
}