import httpsRequest from '../utils/httpsRequest'

export const ProfileUser = async (path) => {
    try {
        const response = await httpsRequest.get(`users${path}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}