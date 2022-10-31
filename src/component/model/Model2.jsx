import "./model2.css";
import { Suspense, useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "@google/model-viewer/dist/model-viewer";

export default function Model2(props) {
  const meshRef = useRef(null);

  useEffect(() => {
    if (!!meshRef.current) {
      console.log(meshRef.current);

      gsap.from(meshRef.current.position, {
        y: 4,
        duration: 2,
        ease: "power2.out",
      });
    }
  }, [meshRef.current]);

  //  useFrame((state) => {

  //   if (!meshRef.current) {
  //     return;
  // }

  // meshRef.current.rotation.y += 0.01;
  //  })

  const cardInfo = [
    {
      model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      title: "Astronaut",
      text: "AR Preview",
    },
    
  ];
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} >
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <model-viewer
            src={card.model}
            ios-src=""
            alt="A 3D model of an astronaut"
            ar
            vr
            auto-rotate
            camera-controls
          ></model-viewer>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <div className="m-5 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardInfo.map(renderCard)}
      </div>
      
    </>
  );
}
