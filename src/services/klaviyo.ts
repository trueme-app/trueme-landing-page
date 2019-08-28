import API from '@aws-amplify/api'
import awsconfig from '@trueme/aws-amplify/aws-exports'

const API_KEY = process.env.KLAVIYO_API_KEY
const LIST_ID = process.env.KLAVIYO_LIST_ID

API.configure(awsconfig)

export const setRegistration = async (email: string) => {
  const response = await API.post('klaviyo', '/subscribe', {
    body: {
      email,
    }
  })
  return response
}
