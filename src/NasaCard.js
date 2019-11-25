import React from "react";
import { Card, CardImg, CardBody, CardText, Col } from "reactstrap";

const NasaCard = props => {
    return (
        <Col xs="6" lg ="3" className="mars-card" key="card">
            <Card>
                <CardImg className="mars-img" alt="random mars" src={props.imgUrl} />
                    <CardBody>
                        <CardText>{props.earthDate}</CardText>
                    </CardBody>
            </Card>
            
        </Col>
    );
};

export default NasaCard;