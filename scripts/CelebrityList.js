import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedCelebrity = clickEvent.target

        if (clickedCelebrity.dataset.type === "celebrity") {
            const celebrityId = parseInt(clickedCelebrity.dataset.id)

            for (const celebrity of celebrities) {
                if (celebrity.id === celebrityId)
                    window.alert(`${celebrity.name}'s sport is ${celebrity.sport}`)
            }
        }

    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
