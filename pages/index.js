import Link from 'next/Link'
import { getAllNews } from '../lib/post'
import styles from './cards.module.css'

export async function getStaticProps() {
    const { articles } = await getAllNews()
    return {
        props: {
            articles
        }
    }
}


export default function Home({ articles }) {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.notices}>
                    {articles.map((a, index) => {
                        const { source: { name } } = a
                        return (
                            <div key={a.title || index}>
                                <Link href={'/news/[id]'} as={`/news/${a.title}`}>
                                    <a rel="noopener noreferrer" className="links">
                                        <div className={styles.notice}>
                                            <div className={styles.divImg}>
                                                <img className={styles.img} src={a.urlToImage || '/images/img-not-found.jpg'} alt={a.title} ></img>
                                            </div>
                                            <div>
                                                <h5>{a.title}</h5>
                                                <h6>{a.author || name}</h6>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <hr className={styles.hr}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
