"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode, useRef } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };
  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 bg-white/20 mx-auto flex justify-center items-center"
      onClick={close}
    >
      <div>{children}</div>
      {/* <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white rounded-lg">
        {children}
      </div> */}
      {/* <div className="flex flex-col justify-center items-center bg-white mx-auto">
        {children}
      </div> */}
    </div>
  );
};

export default Modal;
