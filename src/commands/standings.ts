import { AttachmentBuilder, CommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { wrcClient } from "../wrc-api/wrc-client";


export const data = new SlashCommandBuilder()
    .setName('standings')
    .addStringOption(option => 
        option.setName('year')
            .setDescription('The year you want to pull standings for')
            .addChoices(
                { name: '2024', value: '2024' },
                { name: '2023', value: '2023' },
                { name: '2022', value: '2022' },
                { name: '2021', value: '2021' },
            )
    )
    .setDescription('Fetches current WRC standings')

export async function execute(interaction: CommandInteraction) {
    const year = interaction.options.get('year')?.value?.toString() ?? '2024'

    const data = await wrcClient.fetchStandings(year)

    if (data.stage === 'Not Started') {
        return interaction.reply(`The ${year} season has not started yet, check back soon.
        \nTo see previous years standings use \`/standings {year}\` ex: \`/standings 2023\`
        \nTo see the next event use \`/schedule\`.`)
    } else {
        const wrcLogo = new AttachmentBuilder('./assets/wrc-logo.png')
        const wrcBig = new AttachmentBuilder('./assets/wrc-big.jpg')

        const message = new EmbedBuilder()
            .setTitle('Standings')
            .setDescription(`${year} WRC Standings`)
            .setAuthor({ name: 'WRC Bot' })
            .setURL('https://www.wrc.com/result-and-standings')
            .setThumbnail('attachment://wrc-logo.png')
            .setImage('attachment://wrc-big.jpg')
            .addFields(
                { name: data.standings[0].driver, value: `Points: ${data.standings[0].overallPoints}` },
                { name: data.standings[1].driver, value: `Points: ${data.standings[1].overallPoints}` },
                { name: data.standings[2].driver, value: `Points: ${data.standings[2].overallPoints}` },
            )
            .setTimestamp()

        return interaction.reply({ embeds: [message], files: [wrcLogo, wrcBig] })
    }
}