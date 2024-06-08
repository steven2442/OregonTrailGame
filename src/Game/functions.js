import { playerStats } from "./player.js"
import { write } from "./utils.js"

export const printPlayerStats = () =>{
    write(
        "Gold:"+playerStats.gold + " " +
        "Fuel:"+playerStats.fuel + " " +
        "Health:"+playerStats.health + " " +
        "Distance:"+playerStats.distanceToPlanet)
}

export const travel = () =>{
    playerStats.fuel -= 5
    playerStats.distanceToPlanet -= playerStats.speed
    printPlayerStats()
}

export const eventPicker = (planet) => {
    let event = planet.eventList[Math.floor(Math.random()*planet.eventList.length)];
    return event
}

