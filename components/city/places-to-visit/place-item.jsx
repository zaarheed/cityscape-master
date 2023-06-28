"use client";
import Modal from "@/components/shared/modal";
import { useState } from "react";
import CityDetailModal from "@/components/city/city-detail-modal";

export default function PlaceItem({ place }) {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
            <button
                className={`
                    w-full relative flex flex-col text-zinc-100 group cursor-pointer
                    appearance-none items-start text-left
                `}
                type="button"
                onClick={() => setShowModal(true)}
            >
                <figure className="w-full aspect-square rounded-2xl overflow-hidden">
                    <img src={place.imgUrl} className="w-full h-full object-cover object-bottom" />
                </figure>
                <div className="w-full flex flex-col py-2 px-4 group-hover:-translate-y-2 duration-200">
                    <p className="font-base text-2xl">
                        {place.title}
                    </p>
                </div>
            </button>
            <Modal show={showModal} onClose={() => setShowModal(false)} size="default" showCloseButton={true}>
                <CityDetailModal item={place} />
            </Modal>
        </>
    );
}