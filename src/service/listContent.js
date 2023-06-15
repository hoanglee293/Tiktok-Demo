import axios from "axios"

export const ListContent = async() =>{
    try {
        const res = await axios.get("https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173")
        console.log(res)
        return res.data
    } catch (error) {
        console.log('error search')
    }
}