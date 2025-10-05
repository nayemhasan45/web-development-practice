import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./Car.css";

const Car = ({ car, handleFavButton, favBox }) => {
    const isFav= favBox.some((favId)=>favId.id===car.id)

    return (
        <>
            <td className="p-3">
                <img
                    src={car.image}
                    alt={car.title}
                    className="w-40 h-24 object-cover rounded"
                />
            </td>
            <td className="p-3 font-semibold text-gray-700">
                €{car.currentBidPrice.toLocaleString()}
            </td>
            <td className="p-3 text-gray-500">{car.timeLeft}</td>
            <td className="p-3 text-center">
                <button onClick={() => handleFavButton(car)} disabled={isFav}>
                    {
                        isFav?
                        <FaHeart size={22} color="red"/> :
                        <FaRegHeart size={22} />

                    }
                </button>
            </td>
        </>
    );
};

export default Car;
