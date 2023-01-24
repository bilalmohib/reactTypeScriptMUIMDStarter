import { useState, useEffect } from "react";

import styles from "./style.module.css";

const Home = () => {

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            // if (window.innerWidth < 991) {
            //     setIsOpen(false);
            // }
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });


    return (
        <div className="container">
            {/* <Header /> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        Left Side
                    </div>
                    <div className="col-md-6">
                        Right Side
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
export default Home;