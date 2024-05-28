import { planets } from "./planets.js"
import { playerStats } from "./player.js"

export const startGame = () => {

console.log("You are the captain of a spaceship, entrusted with the crucial mission of delivering vital cargo to a distant planet. The fate of this journey rests in your hands.")
playerStats.chosenPlanet = planets.omega
}