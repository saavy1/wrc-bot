import { REST } from "@discordjs/rest";
import { commands } from "./commands";
import { Routes } from "discord.js";
import { config } from './config'

const commandsData = Object.values(commands).map((command) => command.data)

const rest = new REST({ version: '10' }).setToken(config.token)

type DeployCommandProps = {
    guildId: string
}

export async function deployCommands({ guildId }: DeployCommandProps) {
    try {
        console.log('Started refreshing application (/] commands.')

        await rest.put(
            Routes.applicationGuildCommands(config.clientId, guildId),
            {
                body: commandsData
            }
        )

        console.log('Successfully reloaded application (/) commands.')
    } catch (err) {
        console.error(err)
    }
}

for (const guildId of config.guildsToDeployTo) {
    deployCommands({guildId: guildId})
}
