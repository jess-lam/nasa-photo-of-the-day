import React from "react";

const NasaCard = props => {
    return (
        <div className="mars-card" key="card">
            <img className="mars-img" alt="random mars" src={props.imgUrl} />
            <h2>Mars Photo of the Day</h2>
        </div>
    );
};

export default NasaCard;