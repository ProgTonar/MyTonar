import axios from "axios"

export default async function getProperty(tableId: string){
    const table_id = tableId
    const username = process.env.USERNAME_PROPERTY
    const password = process.env.PASSWORD_PROPERTY

    try {
        const response = await axios.post('http://10.11.9.10/UPP/hs/OS', { tableId: table_id}, 
            {
            headers: {
                'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
                'Content-Type': 'application/json'
            }
        }
        
     )
     console.log(response.data.data)
     return response.data.data
    } catch (error) {
       console.error('Ошибка получения данных:', error)
    }
 
}