import { useRouter } from "next/router"
import { getAllNews } from "../../../../lib/post"

export async function getStaticProps({params}) {
    let [category, title] = params.slug
    const { articles } = await getAllNews(category) 
    let filteredNews = articles.filter(news => news.title.includes(title))

    return {
        props: {
            filteredNews
        }
    }
}

export async function getStaticPaths() {
    const paths = [] //los paths se van a generar cuando se pidan

    return {
        paths,
        fallback: true
    }
}

const News = ({filteredNews}) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {filteredNews.map((a) => {
                return (
                    <div key={a.title}  style={{padding: '180px 0px'}}>
                        <div >
                            <img src={a.urlToImage || '/images/img-not-found.jpg'} alt={a.title} style={{display: 'block', margin: 'auto', maxWidth: '850px'}}/>
                        </div>
                        <div style={{margin: '0px 200px'}}>
                            <h2>{a.title}</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet efficitur metus. Donec sed rhoncus mauris. Nulla vel arcu sed sem tempus dapibus sed a nulla. Nulla tincidunt purus auctor, blandit massa id, lobortis purus. Fusce venenatis, libero condimentum porttitor pretium, eros neque rutrum diam, nec pharetra metus lectus non erat. Nam eu elit dictum, feugiat nibh semper, pretium ligula. Fusce ac orci posuere, lacinia massa sit amet, condimentum massa. Donec dictum tellus et mi laoreet, at sollicitudin lacus auctor. Integer tempor ullamcorper pulvinar. Praesent tempus consequat libero ac commodo. Pellentesque vulputate, magna a lobortis vehicula, nunc metus pretium purus, semper vestibulum augue nunc at dolor. Maecenas sodales cursus metus, vel gravida sapien interdum a. Duis aliquet feugiat eleifend. Cras congue eget magna at rhoncus.
                            </p>

                            <p>
                                Curabitur libero nulla, consequat in ornare sit amet, tincidunt eu eros. Sed semper quam quis dui aliquet posuere. Vivamus id laoreet orci. Curabitur risus nisl, dignissim et scelerisque a, congue id tellus. Morbi efficitur felis ex, tempor dignissim est sodales non. Quisque fermentum viverra leo at varius. Ut pellentesque leo in risus blandit, ultrices pellentesque lacus fringilla. Mauris eleifend justo sed est sollicitudin, non maximus enim feugiat. Morbi maximus dapibus condimentum.
                            </p>

                            <p>
                                Aliquam mi nunc, eleifend nec eleifend sagittis, consequat at ex. Fusce venenatis viverra est. Ut porta massa vel elit tempor pellentesque. Vestibulum vel interdum nulla, ut volutpat orci. Nam sagittis nec ipsum in ultricies. Phasellus eu velit eu nibh lacinia scelerisque. Donec tempor sapien ut ipsum sollicitudin molestie. Fusce hendrerit, massa eu vulputate porta, velit turpis convallis orci, quis imperdiet ligula urna id arcu. Integer imperdiet tincidunt augue, ac pharetra dolor egestas in. Aenean consectetur metus sit amet felis tincidunt consectetur.
                            </p>

                            <p>
                                Aliquam pulvinar eros massa, commodo blandit lacus pulvinar nec. Phasellus aliquam enim ut dolor bibendum, ut faucibus ante interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempor ante ac augue vulputate lacinia. Nulla facilisi. Duis nec ultrices dui. Aliquam at fringilla eros. Curabitur placerat ac nisi eu consectetur. Sed imperdiet rhoncus risus sit amet vehicula. Proin vitae libero condimentum, faucibus velit quis, elementum enim. Fusce non euismod nibh. Nullam fringilla volutpat nisi, a euismod turpis auctor et. Nunc non mauris velit. Quisque nisl magna, cursus nec sem ut, pellentesque tempor nisi. In vehicula condimentum turpis vehicula tincidunt. Donec non tellus libero.
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default News