import styles from './Layout.module.css'
import Head from 'next/head'
import Link from 'next/Link'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>News App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1 className={styles.h1}>News-App</h1>               

                <nav className={styles.nav}>
                    <ul className={styles.links} className={styles.ul}>
                        <li>
                            <Link href="/news/category/sports"><a className={styles.a}>Deporte</a></Link>
                        </li>
                        <li>
                            <Link href="/news/category/entertainment"><a className={styles.a}>Entretenimiento</a></Link>
                        </li>
                        <li>
                            <Link href="/news/category/technology"><a className={styles.a}>Tecnología</a></Link>
                        </li>
                        <li>
                            <Link href="/news/category/politics"><a className={styles.a}>Politica</a></Link>
                        </li>
                        <li>
                            <Link href="/news/category/science"><a className={styles.a}>Ciencia</a></Link>
                        </li>
                        <li>
                            <Link href="/news/category/health"><a className={styles.a}>Salud</a></Link>
                        </li>
                        <li>
                            <Link href="/news/category/general"><a className={styles.a}>General</a></Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {children}
            <footer></footer>
        </div>
    )
}