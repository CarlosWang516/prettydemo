import * as React from "react";
import Pretty from "@Components/Pretty";
const data = require("./assets/json/1.json");

function App() {
    return (
        <div>
            <h1>hi!</h1>
            <Pretty data={data} />
        </div>
    );
}

export default App;