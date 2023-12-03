import React, { useState } from "react";
import "./GalleryPage.scss";
export const GalleryPage = () => {
  const images = [
    {
      row: [
        "/gallery/antipasto.jpg",
        "/long-island.jpg",
        "/gallery/salafeste.jpeg",
      ],
    },
    {
      row: [
        "/gallery/dish1.jpg",
        "/gallery/dish2.jpg",
        "/gallery/terrazza.jpg",
      ],
    },
    {
      row: [
        "/gallery/sammontana.jpg",
        "/gallery/bancone.jpg",
        "/gallery/petfriendly.jpg",
      ],
    },
  ];

  const [showImage, setShowImage] = useState<{ opened: boolean; img: string }>({
    opened: false,
    img: "",
  });
  const openImage = (img: string) => {
    setShowImage({ opened: true, img: img });
  };
  const renderModal = (img: string) => {
    return (
      <div className="GalleryPage__openedGallery">
        <div
          className="GalleryPage__openedGallery__left"
          onClick={() => handleGallery("left", images)}
        />
        <img src={img} />
        <div
          className="GalleryPage__openedGallery__right"
          onClick={() => handleGallery("right", images)}
        />
        <div
          className="GalleryPage__openedGallery__close"
          onClick={() => {
            setShowImage({ opened: false, img: "" });
          }}
        />
      </div>
    );
  };

  const handleGallery = (dir: string, images: any) => {

    const images1: string[] = [];
    images.map((row: any) => {
      row.row.map((element: string) => {
        images1.push(element);
      });
    });
    let position: number = 0;
    images1.find((img: string, index) => {
      if (img === showImage.img)
        position = index;
    });
    console.log(images1.length);

    if (dir === "left") {
      if (position === 0) {
        setShowImage({
          opened: true,
          img: images1[images1.length - 1],
        });
      } else
        setShowImage({
          opened: true,
          img: images1[position - 1],
        });
    }

    if (dir === "right") {
      if (position === images1.length - 1) {
        setShowImage({
          opened: true,
          img: images1[0],
        });
      } else
        setShowImage({
          opened: true,
          img: images1[position + 1],
        });
    }
  };

  return (
    <div className="GalleryPage">
      {showImage.opened && renderModal(showImage.img)}
      <div className="GalleryPage__maincontent">
        <div className="GalleryPage__maincontent__presentation">
          <h1>Qualità, tradizione, innovazione</h1>
          <p>
            La cura nella scelta dei prodotti, la tradizione napoletana
            trasmessa dai nostri genitori, e la volontà di innovarsi rendono
            Terrazza Merliani un luogo di prima scelta nel cuore del vomero.
            Cordialità ed attenzione sono il fulcro del nostro servizio che
            attirano clienti di tutte le età.
          </p>
        </div>
        <div className="GalleryPage__maincontent__gallery">
          <div className="GalleryPage__maincontent__gallery__block">
            {images.map((element: any) => (
              <div className="GalleryPage__maincontent__gallery__block__row">
                {element.row.map((iA: any) => (
                  <img src={iA} alt={iA} onClick={() => openImage(iA)} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="GalleryPage__sidecontent" />
    </div>
  );
};
