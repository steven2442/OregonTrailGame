import { playerStats } from "./player.js"

export const printPlayerStats = () =>{
    console.log(
        "Gold:"+playerStats.gold,
        "Fuel:"+playerStats.fuel,
        "Health:"+playerStats.health,
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

