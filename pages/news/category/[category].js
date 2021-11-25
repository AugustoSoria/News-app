import Link from "next/Link";
import { useRouter } from "next/router"
import { getAllNews } from "../../../lib/post"
import styles from '../../cards.module.css'

export async function getStaticProps({ params }) {
    const { articles } = await getAllNews(params.category)
    return {
        props: {
            articles
        }
    }
}

export async function getStaticPaths() {
    const paths = [
        { params: { category: 'sports' } },
        { params: { category: 'entertainment' } },
        { params: { category: 'technology' } },
        { params: { category: 'politics' } },
        { params: { category: 'science' } },
        { params: { category: 'health' } },
        { params: { category: 'general' } },
    ];

    return {
        paths,
        fallback: false
    }
}

const Category = ({ articles }) => {
    const router = useRouter()
    let { category } = router.query

    return (
        <div className={styles.main}>
            <div className={styles.notices}>
                {articles.map((a, index) => {
                    const { source: { name } } = a
                    return (
                        <div key={a.title || index}>
                            <Link href='/news/category/new/[...slug]' as={`/news/category/new/${category}/${a.title}`}>
                                <a rel="noopener noreferrer">
                                    <div className={styles.notice}>
                                        <div className={styles.divImg}>
                                            <img src={a.urlToImage || '/images/img-not-found.jpg'} alt={a.title} className={styles.img}></img>
                                        </div>
                                        <div>
                                            <h5>{a.title}</h5>
                                            <h6>{a.author || name}</h6>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <hr className={styles.hr} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category