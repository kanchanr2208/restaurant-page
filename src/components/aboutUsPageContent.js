import image from "../assets/images/about-us-image.jpg"
import { AboutUsCard } from "./aboutUsCard.js"
import {cardContent} from "../data/aboutUsData.js"

export function loadAboutUs() {
    const aboutUsContainer = document.createElement("div")
    const aboutUsTextContainer = document.createElement("div")
    const aboutUSImageContainer = document.createElement("div")
    const aboutUsImage = document.createElement("img")

    aboutUsContainer.classList.add("about-us-container")
    aboutUsTextContainer.classList.add("about-us-text-container")
    aboutUSImageContainer.classList.add("about-us-image")

    aboutUsImage.src = image

    cardContent.forEach(elementObject => {
        const newCard = new AboutUsCard(elementObject.title, elementObject.text)
        const newCardDOM = newCard.createAboutUsCard()
        aboutUsTextContainer.appendChild(newCardDOM)
        
    });

    aboutUSImageContainer.appendChild(aboutUsImage)
    aboutUsContainer.append(aboutUsTextContainer, aboutUSImageContainer)
    
    return aboutUsContainer
}