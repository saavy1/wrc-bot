import dotenv from 'dotenv'

dotenv.config()

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, USERS_TO_NOTIFY, CHANNEL_TO_NOTIFY } = process.env

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !USERS_TO_NOTIFY || !CHANNEL_TO_NOTIFY) {
    throw new Error('Missing config')
}

export const config = {
    token: DISCORD_TOKEN,
    clientId: DISCORD_CLIENT_ID,
    usersToNotify: USERS_TO_NOTIFY!.split(','),
    channelToNotify: CHANNEL_TO_NOTIFY
}