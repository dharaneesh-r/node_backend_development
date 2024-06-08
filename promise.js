const API_URL = 'https://jsonplaceholder.typicode.com/photos'

const data = async () => {
    const response = await fetch(API_URL)
    const convert = await response.json();

    console.log(convert)
}
data()

////////////////////////////////////////////////////////////

