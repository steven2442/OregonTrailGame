import { printPlayerStats, travel } from "../Game/functions.js"
import { nothingHappensFlavor } from "./nothing_happens_text.js"

export const nothingHappens = ()=> { 
    nothingHappensFlavor()
    travel()
}