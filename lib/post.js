let URL = `https://newsapi.org/v2/top-headlines?country=ar&`
const ApyKey = `apiKey=....`

export async function getAllNews(category = null) {
    if (category) {
        URL += `category=${category}&`
    }
    const res = await fetch(URL + ApyKey)

    URL = 'https://newsapi.org/v2/top-headlines?country=ar&'
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}