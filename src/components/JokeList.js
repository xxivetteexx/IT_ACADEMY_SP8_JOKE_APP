import React,{useState, useEffect} from "react"
import Button from "react-bootstrap/Button"

import axios from "axios"

function JokeList(){
    const[jokeList, setJokeList]= useState([])
    const [fetching, setFetching] = useState(false);
        
     //Fetching local data (API) 
     useEffect(() => {
        const fetchData = async() => { 
            const result = await 
                axios.get('https://icanhazdadjoke.com/',{
                    headers: { 
                        'Accept':'application/json'
                    }    
                });
            console.log(result.data)
            setJokeList(`${result.data.joke}`)
        };
        fetchData();  
     }, [fetching]);

    const handleEvent = () => { 
        setFetching(!fetching)
    }

    return(
        <div>
            <p>{jokeList}</p>
            <Button onClick={handleEvent}>Next Joke</Button>
        </div>
    )
}

export default JokeList

  