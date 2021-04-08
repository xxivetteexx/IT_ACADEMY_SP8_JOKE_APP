import React,{useState, useEffect} from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import axios from "axios"
import "../API/jokes.css"

function JokeList(){
    const[jokeList, setJokeList]= useState()
    const[fetching, setFetching] = useState(false);
    const[loading, setLoading]=useState(false)
        

    const handleEvent = () => { 
        //setFetching(!fetching)
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
    }

    
    return(
        
            <Card className="joke-card text-center border-0 mt-5 w-100">
                <Card.Body> 
                    <Card.Title className="mb-4">IF YOU’RE READY TO LAUGHT CLICK THE JOKE BUTTON</Card.Title> 
                    <Card.Text className="joke-content mb-4">{jokeList}</Card.Text>
                    <Button onClick={handleEvent} className="btn mt-1 w-50">The Joke</Button>
                </Card.Body>
            </Card>     
    )
}

export default JokeList

