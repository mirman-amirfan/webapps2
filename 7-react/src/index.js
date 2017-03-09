import React from "react";
import {render} from "react-dom";
import Message from "./components/Message";
import SpongebobTrapRemix from "./components/SpongebobTrapRemix";
import Counter from "./components/Counter";
import NameField from "./components/NameField";

class App extends React.Component {

    render() {
        const messages = ["I'm a child component!", "ur mum", "hey that's pretty good", "hey that's pretty gucci"];
        return (
            <div>
                <h1>Hello from React!</h1>
                {messages.map((n) => {
                    return (<Message message={n}/>)
                })}
                <SpongebobTrapRemix url="https://www.youtube.com/watch?v=fzMJk8nGpoc" />
                <Counter />
                <NameField />
            </div>
        )
    }
}

render(< App / >, document.getElementById("root"));
