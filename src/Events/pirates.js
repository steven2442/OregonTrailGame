import { playerStats } from "../player.js"
import { piratesFlavour, piratesBribe, piratesFight, piratesRun } from "./piratesText.js"
import { notOptionError } from "../userInputError.js"
import inquirer from 'inquirer';


//some event bullshit
export const pirates = async () =>{
piratesFlavour()




const ans = await inquirer
  .prompt([
    {type: "input",
    name: "question",
    message: "What will you do: Fight, Run, Bribe?"
}
  ]);

  console.log(ans.question)
switch (ans.question.toLowerCase()) {
    case("fight"):
    piratesFight()
    break
    case("run"):
    piratesRun()
    break
    case("bribe"):
    piratesBribe()
    break
    default:
    notOptionError()
}

//pause for next event
return
}