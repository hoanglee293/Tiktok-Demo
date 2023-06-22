import httpRequest from '../utils/httpsRequest'

export const suggest = async (page = "1", per_page) => {
    try {
        const response = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}
