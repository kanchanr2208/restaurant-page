import image from "../assets/images/landing-page-image.svg"

export function loadLandingPage() {
    const container = document.createElement("div")
    const imageContainer = document.createElement("div")
    const text = document.createElement("p")
    const imageElement = document.createElement("img")

    container.classList.add("landing-page-container")
    imageContainer.classList.add("landing-page-image")
    
    imageElement.src = image
    text.textContent = "Koramangala, Bengaluru"

    imageContainer.appendChild(imageElement)
    container.append(imageContainer, text)
    document.body.append(container)
}