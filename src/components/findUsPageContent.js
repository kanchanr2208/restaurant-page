import facebookIcon from '../assets/images/facebook-icon.svg';
import googleIcon from '../assets/images/google-icon.svg';
import instagramIcon from '../assets/images/instagram-icon.svg';
import findUsImage from '../assets/images/find-us-image.svg'

export function loadFindUsPageContent() {
    const findUsContainer = document.createElement("div")
    const findUsTextContainer = document.createElement("div")
    const findUsImageContainer = document.createElement("div")

    const introPara = document.createElement("p")
    const locHeading = document.createElement("h3")
    const locList = document.createElement("ul")
    const AddressLi = document.createElement("li")
    const lunchLi = document.createElement("li")
    const dinnerLi = document.createElement("li")
    const closedLi = document.createElement("li")


    const contactHeading = document.createElement("h3")
    const contactList = document.createElement("ul")
    const reservationLi = document.createElement("li")
    const enquireLi = document.createElement("li")

    const socialsContainer = document.createElement("div")
    const socialsHeading = document.createElement("p")
    const socialsImgContainer = document.createElement("div")
    const google = document.createElement("img")
    const facebook = document.createElement("img")
    const instagram = document.createElement("img")

    const image = document.createElement("img")

    findUsContainer.classList.add("find-us-container")
    findUsTextContainer.classList.add("find-us-text-container")
    findUsImageContainer.classList.add("find-us-image-container")
    socialsContainer.classList.add("find-us-socials-section")
    socialsImgContainer.classList.add("find-us-socials-images-container")
    google.classList.add("google-logo")
    facebook.classList.add("facebook-logo")
    instagram.classList.add("instagram-logo")

    introPara.textContent = "We look forward to welcoming you at Giordano's. Please reach out to our team for table bookings, private events, or any other inquiries."
    locHeading.textContent = "Location & Hours"
    AddressLi.textContent = "Address: Villa 14, 12th Main Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034"
    lunchLi.textContent = "Lunch Service:  Tuesday – Sunday, 12:00 PM – 3:30 PM"
    dinnerLi.textContent = "Dinner Service: Tuesday – Sunday, 7:00 PM – 11:30 PM"
    closedLi.textContent = "Closed: Mondays"

    locList.append(AddressLi, lunchLi, dinnerLi, closedLi)

    contactHeading.textContent = "Get in Touch"
    reservationLi.textContent = "Reservations: Call +91 80 4211 8890 or email reservations@giordanos.in."
    enquireLi.textContent = "Private Dining & Business Enquires:  For exclusive restaurant buyouts, corporate lunches, or private bookings, contact our events desk at events@giordanos.in or call +91 98 4508 2140."

    contactList.append(reservationLi, enquireLi)


    google.src = googleIcon
    facebook.src = facebookIcon
    instagram.src = instagramIcon

    google.alt = "Google Icon"
    facebook.alt = "Facebook Icon"
    instagram.alt = "Instagram Icon"

    socialsHeading.textContent = "Follow Us:"

    socialsImgContainer.append(google, facebook, instagram)
    socialsContainer.append(socialsHeading, socialsImgContainer)


    findUsTextContainer.append(introPara, locHeading, locList, contactHeading, contactList, socialsContainer)
    
    image.src = findUsImage;
    findUsImageContainer.appendChild(image)

    findUsContainer.append(findUsTextContainer, findUsImageContainer)

    return findUsContainer
}