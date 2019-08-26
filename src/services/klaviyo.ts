import axios from 'axios'

const API_KEY = process.env.KLAVIYO_API_KEY
const LIST_ID = process.env.KLAVIYO_LIST_ID

export const setRegistration = async (email) => {
  const response = await axios.post(`https://a.klaviyo.com/api/v2/list/${LIST_ID}/subscribe`, {
      api_key: API_KEY,
      profiles: [{
        email,
      }]
    }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
      }
    }
  )

  return response
}
