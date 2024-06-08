import { playerStats } from "../Game/player.js"
import { travel } from "../Game/functions.js"
import {spaceportDamageText} from  "./damaged_spaceport_text.js"
import { write } from "../Game/utils.js"

export const damagedSpaceportRepeatingExplore = () => {
    write("You decide to delve deeper into the abandoned spaceport once more. The haunting quiet and scattered remnants remain unchanged, yet the promise of more valuable loot compels you to continue your search. Proceed cautiously, as the stability of this place grows ever more uncertain.")
    playerStats.gold += 40
    write(playerStats.gold)
    spaceportDamageText()
}

export const damagedSpaceportRepeatingLeave = () => {
    write("Having braved the depths of the abandoned spaceport and gathered some valuable loot, you decide it's time to leave. You safely navigate your ship away with your hard-earned treasures.")
    travel()
}
