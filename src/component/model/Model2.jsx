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
      title: "astronaut1",
      text: "",
    },
    {
      model: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
      title: "astronaut2",
      text: "",
    },
    {
      model: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
      title: "astronaut3",
      text: "",
    },
    {
      model: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
      title: "astronaut4",
      text: "",
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
      <model-viewer camera-controls touch-action="pan-y" autoplay ar ar-modes="webxr scene-viewer" shadow-intensity="1" src="../../shared-assets/models/RobotExpressive.glb" alt="An animated 3D model of a robot"></model-viewer>
    </>
  );
}
