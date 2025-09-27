"use client";
import PreviewModal from "@/components/preview-modal";
import { useState } from "react";
import { useEffect } from "react";

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    if(!isMounted) {
        return null;
    }

  return (
   <>
   <PreviewModal/>

   </>
  )
}

export default ModalProvider
