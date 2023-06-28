"use client";
import Modal from "@/components/shared/modal";
import { useState } from "react";
import CityDetailModal from "@/components/city/city-detail-modal";
import Rating from "./rating";

export default function RestaurantItem({ restaurant }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className={`
                    w-full relative flex flex-row text-zinc-100 bg-zinc-800 rounded-lg
                    p-2 hover:bg-zinc-700 duration-200 cursor-pointer appearance-none items-start text-left
                `}
                type="button"
                onClick={() => setShowModal(true)}
            >
                <figure className="w-20 h-20 shrink-0 mr-4 rounded-lg overflow-hidden">
                    <img src={restaurant.imgUrl} className="w-full h-full object-cover object-bottom" />
                </figure>
                <div className="w-full flex flex-col items-start">
                    <p className="font-semibold text-xl mb-1">
                        {restaurant.title}
                    </p>
                    <span className="text-xs bg-zinc-700 rounded px-1 py-px">
                        {restaurant.cuisine}
                    </span>
                    <Rating rating={restaurant.rating} />
                </div>
            </button>
            <Modal show={showModal} onClose={() => setShowModal(false)} size="default" showCloseButton={true}>
                <CityDetailModal item={restaurant} />
            </Modal>
        </>
    );
}