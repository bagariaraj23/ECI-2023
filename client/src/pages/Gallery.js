import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";

const slides = [
  {
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/19B3/production/_106497560_gettyimages-1137831201.jpg",
    text: "Slide 1",
    color: "blue",
    textColor: "#FFFFFF",
  },
  {
    image: "https://pbs.twimg.com/media/EHZWsDmUwAA6nrj.jpg",
    text: "Slide 2",
    color: "#FFFF66",
    textColor: "#000000",
  },
  {
    image:
      "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/04/05/81157-elections-pti.jpg?itok=mS5bC79C",
    text: "Slide 3",
    color: "#333333",
    textColor: "#FFFFFF",
  },
  {
    image:
      "https://images.hindustantimes.com/img/2021/08/07/1600x900/c3a51d20-f76a-11eb-a9e6-75f3f3eb911d_1628340368077.jpg",
    text: "Slide 4",
  },
  {
    image:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/Desk/2022_11$largeimg_900995076.jpg",
    text: "Slide 5",
  },
  {
    image: "https://pbs.twimg.com/media/D4ZWi4nU0AAC9Fa.jpg",
    text: "Slide 6",
  },
  {
    image:
      "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/01/02/Pictures/bangladesh-vote_e502d3c4-0dfa-11e9-9a6b-91d91ee16f0e.jpg",
    text: "Slide 7",
  },
];

function Gallery() {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index} style={{ backgroundColor: slide.color }}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={slide.text}
            style={{ objectFit: "cover", maxHeight: "500px" }}
          />
          <Carousel.Caption>
            {/* <h3 style={{ color: slide.textColor }}>{slide.text}</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    
  );
     
}

export default Gallery;
