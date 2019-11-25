import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import NasaCard from "./NasaCard";
import { Container, Row } from "reactstrap";

function App() {
  const [images, setImages] = useState([]);

  const [date, setDate] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY")
    .then(response => {
      console.log(response);
      setImages(response.data.photos);
      setDate(response.data.photos.earth_date)
    })
    .catch(error => {
      console.log(error);
    })
  }, []);
  return (
    <Container className="App">
      <Row>
      {images.map(marsUrl => {
        return <NasaCard imgUrl={marsUrl.img_src} earthDate={marsUrl.earth_date}/>;
      })}
      </Row>
    </Container>
  );
}

export default App;
