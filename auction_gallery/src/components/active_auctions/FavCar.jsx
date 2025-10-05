import React from "react";

const FavCar = ({ fav,handleFavRemove }) => {
  return (
    <>
      <td className="p-3">
        <img
          src={fav.image}
          alt={fav.title}
          className="w-24 h-16 object-cover rounded"
        />
      </td>
      <td className="p-3">
        <h2 className="font-semibold">{fav.title}</h2>
        <p>€{fav.currentBidPrice.toLocaleString()}</p>
        <p>Bids: {fav.bidsCount}</p>
      </td>
      <td className="p-3 text-right">
        <button onClick={()=>handleFavRemove(fav)} className="btn btn-primary btn-sm">Remove</button>
      </td>
    </>
  );
};

export default FavCar;
