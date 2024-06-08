export const write = (message)  =>{
    const el = document.createElement("div");
    el.innerHTML = message;
    const messageDiv = document.getElementById("text");
    messageDiv.appendChild(el); 

}

let promptResolve;

const el = document.getElementById("button");
el.onclick = () => {
  const textEl = document.getElementById("input-field");
  promptResolve(textEl.value);
  textEl.value = "";
}

export const writePrompt = async (arr) => {
  const { type, name, message } = arr[0];
  write(message)
  const promptPromise = new Promise((resolve) => (promptResolve = resolve));
  const result = await promptPromise;
  console.dir({ [name]: result })
  return { [name]: result };
}               