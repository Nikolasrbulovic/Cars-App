import { Form,Button } from "react-bootstrap";
import YearSelect from "./YearSelect";
import { useState } from "react";
import { postCars } from "../service/carService";

const AddCar = () =>{
    const [brand, setBrand] = useState();
    const [model, setModel] = useState();
    const [maxSpeed, setMaxSpeed] = useState();
    const [doors, setDoors] = useState();
    const [automatic, setAutomatic] = useState(false);
    const [engine, setEngine] = useState();
    const [selectedYear, setSelectedYear] = useState('');

    const resetStates = () =>{
        setBrand("")
        setModel("")
        setMaxSpeed(0)
        setDoors(0)
        setAutomatic(false)
        setEngine("")
        setSelectedYear(0);
    }
    

   
    const handleYearChange = (e) => {
      setSelectedYear(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
      
        postCars(
             brand,
             model,
           selectedYear,
             maxSpeed,
             automatic,
             engine,
             doors,
          );
          resetStates()
            
      
    };

    return(
        <Form className="w-50 " onSubmit={submitHandler}>
            <Form.Group className="mb-3">
                <Form.Label>Brand </Form.Label>
                <Form.Control id="brand" type="text" placeholder="Enter Brand" value={brand} onChange={(e) => setBrand(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Model </Form.Label>
                <Form.Control id="model" type="text" placeholder="Enter Model"  value={model} onChange={(e) => setModel(e.target.value)}/>
            </Form.Group>

            <YearSelect handleYearChange={handleYearChange} selectedYear={selectedYear}></YearSelect>

            <Form.Group className="mb-3">
                <Form.Label>Max Speed </Form.Label>
                <Form.Control id="speed" type="number" placeholder="Enter Max Speed" value={maxSpeed} onChange={(e) => setMaxSpeed(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Number of dors</Form.Label>
                <Form.Control id="speed" type="number" placeholder="Enter Number of dors" value={doors} onChange={(e) => setDoors(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Is Automatic</Form.Label>
                <Form.Check id="speed" type="switch" label="Switch Automatic" checked={automatic} onChange={(e) => setAutomatic(e.target.checked)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Engine Type :</Form.Label>
                <Form.Check id="engine" type="radio" label="Diesel"  value="diesel" checked={engine === 'diesel'} onChange={(e) => setEngine(e.target.value)}/>
                <Form.Check id="engine" type="radio" label="Petrol"  value="petrol" checked={engine === 'petrol'} onChange={(e) => setEngine(e.target.value)}/>
                <Form.Check id="engine" type="radio" label="Electric"  value="electric" checked={engine === 'electric'} onChange={(e) => setEngine(e.target.value)}/>
                <Form.Check id="engine" type="radio" label="Hybrid"  value="hybrid" checked={engine === 'hybrid'} onChange={(e) => setEngine(e.target.value)}/>
            </Form.Group>

            <div className="pt-4 text-center">
                <Button type="submit"> Submit</Button>
            </div>
        </Form>
    )

}

export default AddCar;