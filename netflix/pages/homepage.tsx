import { NextPage } from "next";
import Cards from "./components/cards";
import styles from '../styles/Homepage.module.scss';
import NavbarTop from "./components/navbar_top";
import { useState } from "react";
import { useRouter } from "next/router";
import NavbarBottom from "./components/navbar_bottom";

const HomePage: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbarTop}>
                <NavbarTop />
            </div>
            <h1>HomePage</h1>
            <Cards />
            <Cards />
            <Cards />
            <div className={styles.navbarBottom}>
                <NavbarBottom />
            </div>
        </div>
    )
}

export default HomePage;