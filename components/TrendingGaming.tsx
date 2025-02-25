"use client";
import { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Eth from "@/public/Eth.png";
import Image6 from "@/public/Frame5.png";
import Image7 from "@/public/Frame6.png";
import Image8 from "@/public/Frame7.png";
import Image9 from "@/public/Frame8.png";

export interface TrendGam {
  id: string;
  title: string;
  floorPrice: number | string;
  totalVolume: number | string;
  image: string | StaticImageData;
}

const TrendingGaming: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sales, setSales] = useState<TrendGam[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const collections = [
      {
        id: "1",
        title: "Daki Da",
        floorPrice: 0.12,
        totalVolume: 207,
        image: Image6,
      },
      {
        id: "2",
        title: "Birds of Damascus",
        floorPrice: 0.12,
        totalVolume: 207,
        image: Image7,
      },
      {
        id: "3",
        title: "Birds of Damascus",
        floorPrice: 0.12,
        totalVolume: 207,
        image: Image8,
      },
      {
        id: "4",
        title: "Birds of Damascus",
        floorPrice: 0.12,
        totalVolume: 207,
        image: Image9,
      },
    ];

    setSales(collections);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && window.innerWidth < 768) {
      // Only auto-play on mobile
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % sales.length);
      }, 3000); 
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, sales.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + sales.length) % sales.length);
    setIsAutoPlaying(false); 
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sales.length);
    setIsAutoPlaying(false); 
  };

  return (
    <div className="w-full bg-[#111111] min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-medium">Trending in Gaming</h1>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors md:hidden" // Hide buttons on desktop
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors md:hidden" // Hide buttons on desktop
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sales.map((sale) => (
            <div
              key={sale.id}
              className="bg-[#1A1A1A] rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={sale.image}
                  alt={sale.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white text-lg mb-4">{sale.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Floor Price</p>
                    <div className="flex items-center text-white">
                      <span className="w-4 h-7 mr-3">
                        <Image
                          width={500}
                          height={500}
                          src={Eth}
                          alt={sale.title}
                          className="w-full h-full object-cover"
                        />
                      </span>
                      {sale.floorPrice}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Total Volume</p>
                    <div className="flex items-center text-white">
                      <span className="w-4 h-7 mr-3">
                        <Image
                          width={500}
                          height={500}
                          src={Eth}
                          alt={sale.title}
                          className="w-full h-full object-cover"
                        />
                      </span>
                      {sale.totalVolume}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="relative overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {sales.map((sale) => (
              <div
                key={sale.id}
                className="w-full flex-shrink-0 p-2"
              >
                <div className="bg-[#1A1A1A] rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
                  <div className="aspect-square w-full overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={sale.image}
                      alt={sale.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-lg mb-4">{sale.title}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Floor Price</p>
                        <div className="flex items-center text-white">
                          <span className="w-4 h-7 mr-3">
                            <Image
                              width={500}
                              height={500}
                              src={Eth}
                              alt={sale.title}
                              className="w-full h-full object-cover"
                            />
                          </span>
                          {sale.floorPrice}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Total Volume</p>
                        <div className="flex items-center text-white">
                          <span className="w-4 h-7 mr-3">
                            <Image
                              width={500}
                              height={500}
                              src={Eth}
                              alt={sale.title}
                              className="w-full h-full object-cover"
                            />
                          </span>
                          {sale.totalVolume}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingGaming;
