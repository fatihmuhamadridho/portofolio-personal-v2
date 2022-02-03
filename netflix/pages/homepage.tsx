import { NextPage } from "next";
import Cards from "./components/cards";
import styles from '../styles/Homepage.module.scss';
import NavbarTop from "./components/navbar_top";
import { useState } from "react";
import { useRouter } from "next/router";
import NavbarBottom from "./components/navbar_bottom";
import Image from "next/image";

const HomePage: NextPage = () => {
    return (
        <div className={styles.container}>
            <NavbarTop />
            <div className={styles.contentHeader}>
                <Image
                    src={'/tirtaps.jpeg'}
                    alt=""
                    width={'100%'}
                    height={'100%'}
                >
                    <h1 style={{ top: "0", position: "absolute", transform: "translate(-50%, -50%)" }}>Test</h1>
                </Image>
            </div>
            <div className={styles.contentPopular}>
                <h1>Popular on netflix</h1>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <div style={{ height: "5000px" }}>

                </div>
            </div>
            <NavbarBottom />
        </div>
    )
}

export default HomePage;