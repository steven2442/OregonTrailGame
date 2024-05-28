import { spaceportIntegrity  } from "./damagedSpaceport.js"
import { playerStats } from "../player.js"
import { travel } from "../functions.js"
import {spaceportDamageText} from  "./damagedSpaceportText.js"

export const damagedSpaceportRepeatingExplore = () => {
    console.log("You decide to delve deeper into the abandoned spaceport once more. The haunting quiet and scattered remnants remain unchanged, yet the promise of more valuable loot compels you to continue your search. Proceed cautiously, as the stability of this place grows ever more uncertain.")
    playerStats.gold += 40

    spaceportDamageText
}

export const damagedSpaceportRepeatingLeave = () => {
    console.log("Having braved the depths of the abandoned spaceport and gathered some valuable loot, you decide it's time to leave. You safely navigate your ship away with your hard-earned treasures.")
    travel()
}
