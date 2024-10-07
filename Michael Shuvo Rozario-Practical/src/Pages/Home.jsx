import { useState, useEffect } from "react";
import NavScroll from "../Components/NavScroll"; 
import Footer from "../Components/Footer"; 
import Outlate from "../Components/Outlate"; 
import WelcomePopup from "../Components/WelcomePopup"; 

const Home = () => {
    const [hasClosedPopup, setHasClosedPopup] = useState(false); 

    useEffect(() => {
        const popupShown = localStorage.getItem("popupShown");
        if (!popupShown) {
            setHasClosedPopup(false); 
        } else {
            setHasClosedPopup(true); 
        }
    }, []);

    const handlePopupClose = () => {
        console.log("Popup closed, updating state...");
        setHasClosedPopup(true); 
        localStorage.setItem("popupShown", "true"); 
    };

    return (
        <div>
            <NavScroll />
            {!hasClosedPopup && <WelcomePopup onClose={handlePopupClose} />}
            <Outlate />
            <Footer />
        </div>
    );
};

export default Home;
