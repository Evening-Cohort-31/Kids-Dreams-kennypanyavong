import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrityMatch = null

    for (const celebrity of celebrityArray) {
        for (const kid of kids) {
            if (celebrity.id === kid.celebrityId)
                celebrityMatch = celebrity
        }
    }

    return celebrityMatch
}

export const Pairings = () => {
    let html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kidsStar.name} will be making memories with ${kidsStar.name}, a ${kidsStar.Sport} star, by ${kidsStar.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

