import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function App() {
    const [name, setName] = useState(() => localStorage.getItem("name"));

    useEffect(() => {
        localStorage.setItem("name", name);
    }, [name]);

    return <>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        <p>Hello {name}</p>
    </>;
}

// Specific to this chapter: makes it possible for you to reload the page
const reload = () => {
    console.log("Page reloaded");
    ReactDOM.unmountComponentAtNode(document.querySelector("#react-root"));
    ReactDOM.render(<App />, document.querySelector("#react-root"));
};
reload();
const button = document.createElement("button");
button.textContent = "Reload page";
button.addEventListener("click", reload);
document.body.appendChild(button);
