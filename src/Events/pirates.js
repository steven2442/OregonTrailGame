import { piratesFlavour, piratesBribe, piratesFight, piratesRun } from "./pirates_text.js"
import { notOptionError } from "../Game/user_input_error.js"
import { write } from "../Game/utils.js"
import { writePrompt } from "../Game/utils.js"


//some event bullshit
export const pirates = async () =>{
piratesFlavour()




  const ans = await writePrompt([
      {type: "input",
      name: "question",
      message: "What will you do: Fight, Run, Bribe?"
}
  ]);

  write(ans.question)
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