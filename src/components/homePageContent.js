export function loadHomepageContent() {
    const homepageContainer = document.createElement("div")
    const homepageColumnOne = document.createElement("div")
    const homepageColumnTwo = document.createElement("div")
    const homepageFindUs = document.createElement("div")
    const homepageAboutUs = document.createElement("div")

    homepageContainer.classList.add("homepage-container")
    homepageColumnOne.classList.add("homepage-column-one", "homepage-menu")
    homepageColumnTwo.classList.add("homepage-column-two")
    homepageFindUs.classList.add("homepage-find-us")
    homepageAboutUs.classList.add("homepage-about-us")

    homepageColumnOne.textContent = "Menu"
    homepageFindUs.textContent = "Find Us"
    homepageAboutUs.textContent = "About Us"

    homepageColumnTwo.append(homepageAboutUs, homepageFindUs)
    homepageContainer.append(homepageColumnOne, homepageColumnTwo)

    return homepageContainer
}