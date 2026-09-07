export class Dish {
    constructor(name, desc){
        this.name = name
        this.desc = desc
    }

    createDishDOM() {
        const dish = document.createElement("div")
        const dishName = document.createElement("p")
        const dishDesc = document.createElement("p")

        dish.classList.add("dish")
        dishName.classList.add("dish-name")
        dishDesc.classList.add("dish-desc")

        dishName.textContent = this.name
        dishDesc.textContent = this.desc

        dish.append(dishName, dishDesc)
        return dish
    }
}