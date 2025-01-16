'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PortfolioSection() {

  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get("https://cms.codonist.com/api/portfolio")
      .then((res) => {
        setPortfolio(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-4">
      {portfolio.map((item) => (
        <a key={item.id} className="bg-gray-200 relative rounded-md overflow-hidden" href={item.url}>
          <div className="mb-3 md:h-80 lg:h-56 xl:h-72 overflow-hidden">
            <img src={item.image} alt={item.title} />
          </div>
          <h4 className="absolute bottom-0 px-3 py-1 bg-gray-200 w-full text-lg font-bold">{item.title}</h4>
        </a>
      ))}
    </div>
    </>
  );
}
