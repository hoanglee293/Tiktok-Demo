import httpsRequest from '../utils/httpsRequest'

export const loadVideo = async (type, page = "1") => {
    try {
        const response = await httpsRequest.get('videos', {
            params: {
                type,
                page
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}