import {damagedSpaceportFlavour, damagedSpaceportExplore, damagedSpaceportLeave} from "./damaged_spaceport_text.js"
import { notOptionError } from "../Game/user_input_error.js"
import {damagedSpaceportRepeatingExplore} from "./damaged_spaceport_repeatingText.js"
import {damagedSpaceportRepeatingLeave} from "./damaged_spaceport_repeatingText.js"
import { write } from "../Game/utils.js"
import { writePrompt } from "../Game/utils.js"



export const spaceportIntegrity = {
  spaceportIntegrity: 20
}
export const damagedSpaceport = async () =>{
  damagedSpaceportFlavour()
  spaceportIntegrity.spaceportIntegrity = 20

  const ans = await writePrompt([
    {type: "input",
    name: "question",
    message: "What will you do: Explore, Leave?"
}
  ]);

  write(ans.question)
  switch (ans.question.toLowerCase()) {
      case("explore"):
      spaceportIntegrity.spaceportIntegrity -= (Math.floor(Math.random() * 10));
      damagedSpaceportExplore();
      if (spaceportIntegrity.spaceportIntegrity<=0){
        break
      }
      while (true){
        const furtherAction = await writePrompt([
          {
         type: "input",
          name: "question",
          message: "What will you do: Explore, Leave?"
          }
        ]);

        switch(furtherAction.question.toLowerCase()){
            case("explore"):
            spaceportIntegrity.spaceportIntegrity -= (Math.floor(Math.random() * 10));
            write(spaceportIntegrity.spaceportIntegrity)
            damagedSpaceportRepeatingExplore();
            break;
            case("leave"):
            damagedSpaceportRepeatingLeave()
            return false;
        }
    }


      case("leave"):
      damagedSpaceportLeave()
      break;
      default:
      notOptionError()
  }
}