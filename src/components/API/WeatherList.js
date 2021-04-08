import React,{useState, useEffect} from "react"
import axios from "axios"
import {Container ,Card, Col, Row} from "react-bootstrap"
import "../API/weather.css"
import "./weather.css"

function WeatherList(){
    const [fetching, setFetching] = useState(false);

    //BARCELONA
    const[cityBcn, setCityBcn]= useState([])
    const[tempBcn, setTempBcn]= useState([])
    const[weatherBcn, setWeatherBcn]= useState([])
    
    //Fetching local data BARCELONA
    useEffect(() => {
        const fetchData = async() => { 
            const result = await 
                axios.get('http://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=Barcelona&aqi=no', {
                    headers: { 
                        'Accept':'application/json'
                    }
                });
                
            console.log(result.data)
            setCityBcn(`${result.data.location.name}`)
            setTempBcn(`${result.data.current.temp_c}`)
            setWeatherBcn(`${result.data.current.condition.text}`)
           
        };
        fetchData();  
     }, [fetching]);
    
    // LONDON 
    const[cityLdn, setCityLdn]= useState([])
    const[tempLdn, setTempLdn]= useState([])
    const[weatherLdn, setWeatherLdn]= useState([])

     //Fetching local data LONDON
     useEffect(() => {
        const fetchData = async() => { 
            const result = await 
                axios.get('http://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=London&aqi=no', {
                    headers: { 
                        'Accept':'application/json'
                    }
                });
                
            console.log(result.data)
            setCityLdn(`${result.data.location.name}`)
            setTempLdn(`${result.data.current.temp_c}`)
            setWeatherLdn(`${result.data.current.condition.text}`)
            
        };
        fetchData();  
     }, [fetching]);

    // NEW YORK 
    const[cityNyc, setCityNyc]= useState([])
    const[tempNyc, setTempNyc]= useState([])
    const[weatherNyc, setWeatherNyc]= useState([])

     //Fetching local data NEW YORK
     useEffect(() => {
        const fetchData = async() => { 
            const result = await 
                axios.get('http://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=new york&aqi=no', {
                    headers: { 
                        'Accept':'application/json'
                    }
                });
                
            console.log(result.data)
            setCityNyc(`${result.data.location.name}`)
            setTempNyc(`${result.data.current.temp_c}`)
            setWeatherNyc(`${result.data.current.condition.text}`)            
        };
        fetchData();  
     }, [fetching]);
     

    // MOSCOW
    const[cityMow, setCityMow]= useState([])
    const[tempMow, setTempMow]= useState([])
    const[weatherMow, setWeatherMow]= useState([])

    //Fetching local data MOSCOW
    useEffect(() => {
        const fetchData = async() => { 
            const result = await 
                axios.get('http://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=moscow&aqi=no', {
                    headers: { 
                        'Accept':'application/json'
                    }
                });
                
            console.log(result.data)
            setCityMow(`${result.data.location.name}`)
            setTempMow(`${result.data.current.temp_c}`)
            setWeatherMow(`${result.data.current.condition.text}`)            
        };
        fetchData();  
    }, [fetching]);

    return(
        <Container fluid className="weather">
            {/* BARCELONA */}
            <Card className=" mt-2 border-0">
                <Card.Body className="card-Bcn">
                    <Row className="align-items-center" >
                        <Col><Card.Title className="weather-text mb-0">{cityBcn}</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{tempBcn}°C</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{weatherBcn}</Card.Title></Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* LONDON */}
            <Card className="mt-2 border-0">
                <Card.Body className="card-Ldn">
                    <Row className="align-items-center">
                        <Col><Card.Title className="weather-text mb-0">{cityLdn}</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{tempLdn}°C</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{weatherLdn}</Card.Title></Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* NEW YORK */}
            <Card className="mt-2 border-0">
                <Card.Body className="card-Nyc">
                    <Row className="align-items-center">
                        <Col><Card.Title className="weather-text mb-0">{cityNyc}</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{tempNyc}°C</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{weatherNyc}</Card.Title></Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* MOSCOW */}
            <Card className="mt-2 border-0">
                <Card.Body className="card-Mow">
                <Row className="align-items-center">
                        <Col><Card.Title className="weather-text mb-0">{cityMow}</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{tempMow}°C</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{weatherMow}</Card.Title></Col>
                    </Row>
                </Card.Body>
            </Card>
      
      
        </Container>
    )
}

export default WeatherList

