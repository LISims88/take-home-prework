async function getArticles() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=4f00be73cb2d4b898cc2bbd0e7b852d6');

        if (!response.ok) {
            throw new Error(`error status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

        return data;
    } catch (error) {
        console.error("Something went wrong:", error.message);
        throw error;
    }
}

export default getArticles