import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
    return (
        <header className={css.header}>
                <Link href="/" className={css.logo}>
                    <svg width={136} height={16}>
                        <use href="/icons.svg#icon-logo"></use>
                    </svg>
                </Link>
                <nav>
                    <ul className={css.navigation}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/catalog">Catalog</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}