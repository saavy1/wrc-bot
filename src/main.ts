import { Channel, Client, Events, GatewayIntentBits } from "discord.js";
import { config } from './config'
import { commands } from './commands/index'
import express, { Application } from "express";
import { Server } from './server'
import { wrcClient } from "./wrc-api/wrc-client";
import { scheduleEmbed } from "./embeds/schedule";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] })


client.once(Events.ClientReady, readyClient => {
    console.log(`Logged in`)
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const { commandName } = interaction

    if (commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction)
    }
})

const api: Application = express()
const server: Server = new Server(api)

api.listen(8080, 'localhost', async () => {
    console.log('API Listening on 8080')
})

api.post('/notify', async () => {
    const upcomingEvents = await wrcClient.fetchUpcomingSchedule()

    const embeds = scheduleEmbed(upcomingEvents, 'https://wrcfan.com/predict/')

    const channel: Channel = client.channels.cache.get('325497330671550474')!

    if (channel.isTextBased()) {
        channel.send(`Upcoming event <@${config.myUserId}>, make your picks`)
        channel.send(embeds)
    }
})

client.login(config.token)