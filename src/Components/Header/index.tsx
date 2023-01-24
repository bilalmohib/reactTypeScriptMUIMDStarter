import { useEffect, FC, useState } from "react";
// import { useNavigate } from "react-router";

import i18n from "../../i18n";
//Importing useTranslation and Trans from react-i18next
import { useTranslation, Trans } from 'react-i18next';

import logo from "../../assets/Images/Navbar/logo.png";
// Language Images
import eng from "../../assets/Images/Navbar/united-kingdom.png";
import saud from "../../assets/Images/Navbar/saudi-arabia.png";
import styles from './style.module.css';

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    chi: { nativeName: 'Chinese' },
    ar: { nativeName: 'Arabic' }
};

interface HeaderProps {
    setMobileViewContainer: any,
    setCurrentTab: any
}

const Header: FC<HeaderProps> = ({
    setMobileViewContainer,
    setCurrentTab
}): JSX.Element => {
    // const navigate = useNavigate();

    const [currentLang, setCurrentLang] = useState<string>("en");

    const changeTheLanguage = (e: any) => {
        i18n.changeLanguage(e);
        // if (e === "en") {
        //     // alert("Language changed english")
        //     // navigate(`/`);
        // }
        // else {
        //     // navigate(`/${e}`);            
        //     // alert("Language Arabic")
        // }
    }

    useEffect(() => {
        // The debounce function receives our function as a parameter
        const debounce = (fn: any) => {
            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame: any;
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params: any) => {
                // If the frame variable has been defined, clear it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame);
                }
                // Queue our function call for the next frame
                frame = requestAnimationFrame(() => {
                    // Call our function and pass any params we received
                    fn(...params);
                });
            }
        };

        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            // @ts-ignore
            document.documentElement.dataset.scroll = window.scrollY;
        }

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        // Update scroll position for first time
        storeScroll();
    })

    const selectLanguage = (value: any) => {
        if (value === "en") {
            changeTheLanguage("ar");
            document.documentElement.setAttribute("lang", 'ar');
            document.documentElement.setAttribute("dir", 'rtl');
            setCurrentLang("ar");
        } else if (value === "ar") {
            changeTheLanguage("en");
            document.documentElement.setAttribute("lang", 'en');
            document.documentElement.setAttribute("dir", 'ltl');
            setCurrentLang("en");
        }
    }

    return (
        <header className={`container`}>
            <div className={styles.headerContainer}>
                <div className={styles.logoMobileContainer}>
                    <img
                        className={styles.logo}
                        src={logo}
                        alt="EQA University"
                        title="EQA University"
                    />
                </div>
                <div className={`d-flex ${styles.mobileDropStyle}`}>
                    <div>
                        <div className="dropdown" title="Select a language for the site">
                            <div style={{ direction: "ltr" }} className={`${styles.langDropDown}`} id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img
                                    width={25}
                                    height={25}
                                    src={(currentLang === "en") ? (eng) : (saud)}
                                    alt="English"
                                    title="English"
                                />
                                <p>
                                    {/* {(currentLang === "en") ? ("Eng") : ("Ar")}  */}
                                    <i className={`fas fa-chevron-down`}></i></p>
                            </div>
                            <ul className={`dropdown-menu ${styles.dropDownLang}`} aria-labelledby="dropdownMenuButton">
                                <li onClick={() => selectLanguage("ar")}>
                                    <a className={`dropdown-item ${styles.liElementDropDown}`} href="#English">
                                        <div className={styles.dropDownContainer}>
                                            <img
                                                width={25}
                                                height={25}
                                                src={eng}
                                                alt="English"
                                                title="English"
                                            />
                                            <p>
                                                English
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li onClick={() => selectLanguage("en")}>
                                    <a className={`dropdown-item ${styles.liElementDropDown}`} href="#Arabic">
                                        <div className={styles.dropDownContainer}>
                                            <img
                                                width={25}
                                                height={25}
                                                src={saud}
                                                alt="Arabic"
                                                title="Arabic"
                                            />
                                            <p>
                                                Arabic
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown">
                            <div className={`${styles.menuDropDown}`} id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-bars"></i>
                            </div>
                            <ul className={`dropdown-menu`} aria-labelledby="dropdownMenuButton">
                                <li onClick={() => {
                                    setMobileViewContainer("Login");
                                    setCurrentTab(1);
                                }}><a className="dropdown-item" href="#Login">Login</a></li>
                                <li onClick={() => {
                                    setMobileViewContainer("About");
                                    setCurrentTab(1);
                                }}><a className="dropdown-item" href="#Announcement">About Us</a></li>
                                <li onClick={() => {
                                    setMobileViewContainer("Announcement");
                                    setCurrentTab(2);
                                }}><a className="dropdown-item" href="#NoticeBoard">Notice Board</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;