import {planets} from "./planets.js"
import { playerStats } from "./player.js"

export const setDistanceToPlanet = (planet) => {
 playerStats.distanceToPlanet = planet.distanceToHome
}