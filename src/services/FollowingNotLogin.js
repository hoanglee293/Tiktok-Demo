import httpsRequest from '../utils/httpsRequest'

export const FollowNotLogin = async (page="1", per_page = "9") => {
    try {
        const response = await httpsRequest.get('users/suggested', {
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