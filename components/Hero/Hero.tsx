"use client"

import css from "./Hero.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    return (
        <section>
            <div className={css.hero}>
                <Image
                    src="/images/hero.jpg"
                    alt="Hero Banner"
                    fill={true}
                    priority={true}
                />
                <div className={css.container}>
                    <div className={css.info}>
                        <h1 className={css.title}>Campers of your dreams</h1>
                        <p className={css.text}>You can find everything you want in our catalog</p>
                    </div>
                    <button className={css.button} onClick={()=>router.push("/catalog")}>View Now</button>
                </div>
            </div>
        </section>
    )
}