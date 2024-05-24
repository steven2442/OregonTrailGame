import { pirates } from "./Events/pirates.js"
import { drinkingGame } from "./Events/drinkingGame.js"
import  {nothingHappens} from "./Events/nothingHappens.js"
import { damagedSpaceport } from "./Events/damagedSpaceport.js"

const omega = {
    name: "Omega",
    distanceToHome: 500,
    eventList: [pirates, drinkingGame, nothingHappens, damagedSpaceport]
}

const newEarth = {
    name: "New Earth",
    distanceToHome: 1000,
    eventList: []
}
const alphaCentury = {
    name: "Alpha Century",
    distanceToHome: 2000,
    eventList: []
}

export const planets = {omega, newEarth, alphaCentury}