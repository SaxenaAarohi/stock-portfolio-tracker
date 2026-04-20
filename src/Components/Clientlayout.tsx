'use client';

import { ReactNode, useEffect, useState } from "react";
import GuestModal from "@/Components/Modal";
import { ToastContainer } from "react-toastify";

type Props = {
  children: ReactNode;
  isGuest: boolean;
};

export default function Clientlayout({ children, isGuest }: Props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
     console.log(" Component mounted.");
    console.log(" isGuest prop:", isGuest);

    let timer: NodeJS.Timeout;

    if (isGuest) {
         console.log("isGuest is true — starting 30s timer...");
      timer = setTimeout(() => {
         console.log(" 30s passed — showing modal.");
        setShowModal(true);
      }, 30000); 
    }
    else{
        console.log(" isGuest is false — skipping modal.");
    }

    return () => clearTimeout(timer);
  }, [isGuest]);

  return (
    <>
      <ToastContainer
        theme="dark"
        toastClassName="bg-gray-900 text-white rounded shadow-lg"
      />
      {children}
      {showModal && <GuestModal onClose={() => setShowModal(false)} />}
    </>
  );
}
