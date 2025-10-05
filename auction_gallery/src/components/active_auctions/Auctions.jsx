import React, { useEffect, useState } from 'react';
import Car from './Car';
import FavCar from './FavCar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auctions = () => {
    const [cars, setCars] = useState([]);
    const [favBox, setFavBox] = useState([]);
    const [total,setTotal]=useState(0);

    
    useEffect(() => {
        fetch("data/data.json")
            .then(res => res.json())
            .then(data => setCars(data.items))
    }, []);
    const handleFavButton = (car) => {
        setFavBox([...favBox, car]);
        toast.success("✅ Item Added to your Favorite List!", { position: "top-right" });
    }
    const handleFavRemove=(rmv_id)=>{
        // console.log('clicked');
        setFavBox(favBox.filter((id)=>id!==rmv_id))
        toast.info("❌ Item Removed from your Favorite List", { position: "top-right" });
    }
    useEffect(()=>{
        const totalMoney = favBox.reduce((sum,item)=>sum+item.currentBidPrice,0)
        setTotal(totalMoney);
    },[favBox])
    
    return (
        <div className=' bg-[#ebf0f5] py-24'>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-4xl py-5 text-[#0E2954]'>Active Auctions</h1>
                <p className='pb-5'>Discover and bid on extraordinary items</p>
                <div className='flex items-start gap-6'>
                    <div className='car_content bg-white rounded flex-3'>
                        <table className='table w-full'>
                            <thead>
                                <tr>
                                    <th className="p-3 text-left">Items</th>
                                    <th className="p-3 text-left">Current Bid</th>
                                    <th className="p-3 text-left">Time Left</th>
                                    <th className="p-3 text-center">Bid Now</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map((car) => (
                                    <tr key={car.id} className=" hover:bg-gray-50">
                                        <Car favBox={favBox} handleFavButton={handleFavButton} car={car} />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="fav_car bg-white rounded-lg shadow flex-1 p-6 h-fit">
                        <table className="table w-full border-collapse">
                            <thead>
                                <tr>
                                    <th
                                        colSpan={3}
                                        className="bg-amber-50 p-3 text-gray-700 text-center text-lg font-semibold w-full"
                                    >
                                        Favorite Items
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {favBox.length === 0 ? (
                                    <tr>
                                        <td colSpan={3} className="p-3 text-gray-500 text-center w-full">
                                            No items
                                            <p>Click the heart icon on any item to add it to your favorites</p>
                                        </td>
                                    </tr>
                                ) : (
                                    favBox.map((fav) => (
                                        <tr key={fav.id} className="border-b">
                                            <FavCar handleFavRemove={handleFavRemove} fav={fav} />
                                        </tr>
                                    ))
                                )}

                                <tr>
                                    <td
                                        colSpan={3}
                                        className="p-3 font-semibold text-gray-800 border-t pt-3 w-full"
                                    >
                                        Total bids amount: ${total}
                                       
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                // theme="colored"
            />
        </div>
    );
};

export default Auctions;