import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import NasaCard from "./NasaCard";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY")
    .then(response => {
      console.log(response);
      setImages(response.data.photos);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);
  return (
    <div className="App">
      {images.map(marsUrl => {
        return <NasaCard imgUrl={marsUrl}/>;
      })}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
