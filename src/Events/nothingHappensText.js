import { travel } from "../Game/functions.js"
import { playerStats } from "../Game/player.js"

export const nothingHappensFlavor = () =>{
    // TODO this should take thename from the planets object
    console.log("Nothing interesting happens. So you push on towards " + playerStats.chosenPlanet)
    travel()
    
}