import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import StarRatingComponent from "react-star-rating-component";

import { useMinicartProvider } from "../../context/minicartContext";
import apiCorebiz from "../../services/apiCorebiz";

import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IShelfProps {
  shelfTitle?: string;
}
interface IproductList {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  price: number;
  listPrice: number;
  installments: {
    quantity: number;
    value: number;
  }[];
}

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
};

const Shelf: React.FC<IShelfProps> = ({ shelfTitle }) => {
  const [product, setProducts] = useState<IproductList[]>();
  const { addToCart } = useMinicartProvider();

  const formatPrices = (value: number) => {
    const price = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return price;
  };

  useEffect(() => {
    apiCorebiz
      .get("/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className={"shelfContainer"}>
      <div className={"shelfTitle"}>{shelfTitle}</div>
      <Slider {...slickSettings}>
        {product?.map(
          (
            { imageUrl, productName, price, listPrice, installments, stars },
            index
          ) => (
            <div key={index} className={"shelfInnerContainer"}>
              <div className={"shelfWrapper"}>
                <img src={imageUrl} alt="shelf product" />
                <div className={price < listPrice ? "shelfFlag" : ""}></div>
                <div className={"shelfInfo"}>
                  <span className={"shelfProductName"}>{productName}</span>
                  <StarRatingComponent
                    name="Stars"
                    starCount={5}
                    value={stars}
                    starColor="#F8475F"
                    emptyStarColor="#c4c4c4"
                  />
                  <span className={"shelfPriceList"}>
                    {price < listPrice
                      ? `de ${formatPrices(listPrice / 100)}`
                      : null}
                  </span>
                  <span className={"shelfPrice"}>
                    por {formatPrices(price / 100)}
                  </span>
                  <span className={"shelfInstallments"}>
                    {installments.length
                      ? `ou em ${installments[0].quantity}x de ${formatPrices(
                          installments[0].value / 100
                        )}`
                      : null}
                  </span>
                  <button
                    className={"shelfAddToCart"}
                    onClick={() => addToCart(product[index])}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Shelf;
