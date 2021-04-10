import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Welcome from "./Welcome"
import JokeApp from "./components/JokeApp"


function App()  {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact>
                    <Welcome/>
                </Route>
                <Route path="/jokes">                
                    <JokeApp />
                </Route>
            </Switch>  
        </Router>
    )
}

export default App

