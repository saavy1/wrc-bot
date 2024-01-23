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

api.listen(8080, 'localhost', async () => {
    console.log('API Listening on 8080')
})

api.post('/notify', async (req, res) => {
    const apiKey = req.get('API-Key')

    if (!apiKey || apiKey !== config.apiKey) {
        return res.status(401).json({error: 'unauthorized'})
    }

    const upcomingEvents = await wrcClient.fetchUpcomingSchedule()

    const embeds = scheduleEmbed(upcomingEvents, 'https://wrcfan.com/predict/')

    const channel: Channel = client.channels.cache.get(config.channelToNotify)!

    if (channel.isTextBased()) {
        const users = config.usersToNotify!.map((user) => ` <@${user}>`).join('')
        channel.send(`Upcoming event${users}, make your picks`)
        channel.send(embeds)
    
        return res.status(200).json({ result: 'yay' })
    } else {
        return res.status(500).json({ result: 'invalid channel ID' })
    }
})

client.login(config.token)