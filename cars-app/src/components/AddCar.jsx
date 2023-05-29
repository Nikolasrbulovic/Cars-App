import { Form,Button } from "react-bootstrap";
import YearSelect from "./YearSelect";
import { useState } from "react";
import { postCars } from "../service/carService";

const AddCar = () =>{
    const [brand, setBrand] = useState();
    const [model, setModel] = useState();
    const [maxSpeed, setMaxSpeed] = useState();
    const [doors, setDoors] = useState();
    const [automatic, setAutomatic] = useState();
    const [engine, setEngine] = useState();
    const [selectedYear, setSelectedYear] = useState('');

    const [car, setCar] = useState({
        brand: "",
        model: "",
        year: 0,
        maxSpeed: 0,
        isAutomatic: false,
        engine: "",
        numberOfDoors: 0,
      });

    const handleYearChange = (e) => {
      setSelectedYear(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setCar({
            brand: brand,
            model: model,
            year: selectedYear,
            maxSpeed: maxSpeed,
            isAutomatic: automatic,
            engine: engine,
            numberOfDoors: doors,
          });
         
        postCars(car);
    
        setCar({
          brand: "",
          model: "",
          year: 0,
          maxSpeed: 0,
          isAutomatic: false,
          engine: "",
          numberOfDoors: 0,
        });
    };

    return(
        <Form className="w-50 " onSubmit={submitHandler}>
            <Form.Group className="mb-3">
                <Form.Label>Brand </Form.Label>
                <Form.Control id="brand" type="text" placeholder="Enter Brand" onChange={(e) => setBrand(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Model </Form.Label>
                <Form.Control id="mdoel" type="text" placeholder="Enter Model" onChange={(e) => setModel(e.target.value)}/>
            </Form.Group>

            <YearSelect handleYearChange={handleYearChange} selectedYear={selectedYear}></YearSelect>

            <Form.Group className="mb-3">
                <Form.Label>Max Speed </Form.Label>
                <Form.Control id="speed" type="number" placeholder="Enter Max Speed" onChange={(e) => setMaxSpeed(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Number of dors</Form.Label>
                <Form.Control id="speed" type="number" placeholder="Enter Number of dors" onChange={(e) => setDoors(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Is Automatic</Form.Label>
                <Form.Check id="speed" type="switch" label="Switch Automatic" onChange={(e) => setAutomatic(e.target.value)}/>
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