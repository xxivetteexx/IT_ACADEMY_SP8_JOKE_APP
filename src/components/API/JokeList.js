import React,{useState, useEffect} from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import axios from "axios"
import "../API/jokes.css"

function JokeList(){
    const[jokeList, setJokeList]= useState([])
    const[fetching, setFetching] = useState(false);
    const[loading, setLoading]=useState(false)
        
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

    useEffect(()=>{
        const loading = () =>{
            if(jokeList.lenght === 0){
                <p>Loading...</p>
            }else{
                <p>{jokeList}</p>
            }
        }
    })
    
    return(
          <div>
            <Card className="joke-card mt-5 text-center border-0">
                <Card.Body> 
                    <Card.Title className="mb-4">IF YOU’RE READY TO LAUGHT CLICK THE JOKE BUTTON</Card.Title> 
                    <Card.Text className="mb-4">{loading}</Card.Text>
                    <Button onClick={handleEvent} className="btn w-50">The Joke</Button>
                </Card.Body>
            </Card>     
        </div>
    )
}

export default JokeList

