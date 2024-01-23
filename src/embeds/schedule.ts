import { AttachmentBuilder, BaseMessageOptions, EmbedBuilder } from "discord.js";
import { RallyEvent } from "../models/schedule";
import moment from "moment";

export const scheduleEmbed = (events: RallyEvent[], url: string): BaseMessageOptions => {
    const wrcLogo = new AttachmentBuilder('./assets/wrc-logo.png')
    const eventImage = new AttachmentBuilder(events[0].images[0].url, { name: 'event.jpg' })

    const message = new EmbedBuilder()
        .setTitle('Schedule')
        .setDescription('2024 WRC Schedule')
        .setAuthor({ name: 'WRC Bot' })
        .setThumbnail('attachment://wrc-logo.png')
        .setURL(url)
        .setImage('attachment://event.jpg')
        .addFields(events.map((event) => {
            const startDate = moment(event.startDate)
            const endDate = moment(event.endDate)
            return { 
                name: event.title, 
                value: `${startDate.format('MMM Do YYYY')} - ${endDate.format('MMM Do YYYY')}`}
        }))
        .setTimestamp()

    return { embeds: [message], files: [eventImage, wrcLogo] }
}