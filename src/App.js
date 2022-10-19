import Labs from "./labs";
import HelloWorld from "./labs/a6/HelloWorld";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";




function App() {
    return (
        <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/hello"
                       element={<HelloWorld/>}/>
            </Routes>
            <HelloWorld/>
            <Labs/>
            <Tuiter/>
        </div>
        </BrowserRouter>

            );
}
export default App;