import facebookIcon from '../assets/images/facebook-icon.svg';
import googleIcon from '../assets/images/google-icon.svg';
import instagramIcon from '../assets/images/instagram-icon.svg';

export function loadFooter() {

    const footer = document.createElement("footer")
    const footerText = document.createElement("p")
    const footerLogos = document.createElement("div")

    const facebookLogoContainer = document.createElement("button")
    const googleLogoContainer = document.createElement("button")
    const instagramLogoContainer = document.createElement("button")

    const facebookLogo = document.createElement("img")
    const googleLogo = document.createElement("img")
    const instagramLogo = document.createElement("img")

    facebookLogo.src = facebookIcon
    googleLogo.src = googleIcon
    instagramLogo.src = instagramIcon
    facebookLogo.alt = "Facebook Icon"
    googleLogo.alt = "Google Icon"
    instagramLogo.alt = "Instagram Icon"
    footerText.textContent = "© 2026 Giordano's - All Rights Reserved"

    facebookLogoContainer.classList.add("facebook-logo")
    googleLogoContainer.classList.add("google-logo")
    instagramLogoContainer.classList.add("instagram-logo")

    footerLogos.classList.add("footer-logos")
    footerText.classList.add("footer-text")
    footer.classList.add("footer")

    facebookLogoContainer.appendChild(facebookLogo)
    googleLogoContainer.appendChild(googleLogo)
    instagramLogoContainer.appendChild(instagramLogo)

    footerLogos.append(facebookLogoContainer, googleLogoContainer, instagramLogoContainer)

    footer.append(footerText, footerLogos)

    document.body.append(footer)

}