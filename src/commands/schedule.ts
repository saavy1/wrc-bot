import { AttachmentBuilder, CommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js'
import { wrcClient } from '../wrc-api/wrc-client'
import { RallyEvent } from '../models/schedule'
import { scheduleEmbed } from '../embeds/schedule'
import moment from 'moment'

export const data = new SlashCommandBuilder()
    .setName('schedule')
    .setDescription('Fetches WRC schedule')

export async function execute(interaction: CommandInteraction) {
    const upcomingEvents = await wrcClient.fetchUpcomingSchedule()

    const message = scheduleEmbed(upcomingEvents, 'https://www.wrc.com/calendar?menu=menu_wrc_calendar')

    return interaction.reply(message)
}