import { Dish } from "./dish.js"

export function CreateMenuCard(courseObject) {
    const menuCard = document.createElement("div")
    const menuCardTitle = document.createElement("h3")

    menuCard.classList.add("menu-card")
    menuCardTitle.classList.add("menu-card-title")

    menuCardTitle.textContent = courseObject.course

    menuCard.append(menuCardTitle)

    const dishes = courseObject.dishes;
    dishes.forEach(dish => {
        let newDish = new Dish(dish.name, dish.desc)
        let newDishDOMElement = newDish.createDishDOM()
        menuCard.append(newDishDOMElement)
    });

    return menuCard
}