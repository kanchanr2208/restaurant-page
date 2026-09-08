
export class AboutUsCard {
    constructor(title, text) {
        this.title = title
        this.text = text
    }

    createAboutUsCard() {
        const cardContainer = document.createElement("div")
        const cardTitle = document.createElement("h3")
        const cardText = document.createElement("p")

        cardContainer.classList.add("about-us-card")

        cardTitle.textContent = this.title
        cardText.innerHTML = this.text

        cardContainer.append(cardTitle, cardText)

        return cardContainer
    }
}
