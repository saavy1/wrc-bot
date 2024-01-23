import dotenv from 'dotenv'

dotenv.config()

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, MY_USER_ID } = process.env

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
    throw new Error('Missing config')
}

export const config = {
    token: DISCORD_TOKEN,
    clientId: DISCORD_CLIENT_ID,
    myUserId: MY_USER_ID
}