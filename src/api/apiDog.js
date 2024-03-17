import axios from "axios"

const API_URL = 'https://dog.ceo/api/breeds/image/random'

export const getRandomDog = async () => {
    const res = await axios.get(API_URL)
    return res
}