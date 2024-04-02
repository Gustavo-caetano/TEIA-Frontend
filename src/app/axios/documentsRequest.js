import api from './api'

export default async function documentsAvaibles()
{
    const response = await api.get('/documents')

    return response.data
}