import React, { useEffect } from "react";

const Backdrop = ({ activeColor, isPlaying }) => {
    useEffect(() => {
        document.documentElement.style.setProperty("--active-color", activeColor);
    }, [activeColor, isPlaying]);

    return <div className={`songCard ${isPlaying ? "-playing" : "idle"}`} />;
};

export default Backdrop;