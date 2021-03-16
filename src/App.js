import React, { useState } from "react"
import JokeList from "./components/JokeList"
import Layout from "./components/Layout"

function App()  {
   

    return (
            <Layout>
                <h1>Joke App</h1>   
                <JokeList /> 
               
            </Layout>  
    )
}

export default App

