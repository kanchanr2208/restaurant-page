import { Dish } from "./dish.js"

export function CreateMenuCard(courseObject) {
    const card = document.createElement("div")
    const title = document.createElement("h3")

    card.classList.add("menu-card")
    title.classList.add("menu-card-title")

    title.textContent = courseObject.course

    card.append(title)

    const dishes = courseObject.dishes;
    dishes.forEach(dish => {
        let newDish = new Dish(dish.name, dish.desc)
        let newDishDOMElement = newDish.createDishDOM()
        card.append(newDishDOMElement)
    });

    return card
}