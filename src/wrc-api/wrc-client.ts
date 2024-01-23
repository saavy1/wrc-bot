import axios, { AxiosResponse } from 'axios'
import { StandingsResponse } from '../models/standings-response'
import { StandingsResult, convertStandingsReponseToResult } from '../models/standings'
import { RallyEvent, Schedule } from '../models/schedule'
import moment from 'moment'

enum StandingsYears {
    TwentyOne = 21,
    TwentyTwo = 22,
    TwentyThree = 23,
    TwentyFour = 24
}

type ChampionshipYearMap = {
    seasonId: number
    championshipId: number
}

const TwentyFourYearMap: ChampionshipYearMap = {
    seasonId: 28,
    championshipId: 245
}

const TwentyThreeYearMap: ChampionshipYearMap = {
    seasonId: 20,
    championshipId: 145
}

const TwentyTwoYearMap: ChampionshipYearMap = {
    seasonId: 11,
    championshipId: 98
}

const TwentyOneYearMap: ChampionshipYearMap = {
    seasonId: 8,
    championshipId: 66
}

export class WrcClient {
    private readonly client: any

    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.wrc.com'
        })
    }

    async fetchUpcomingSchedule(): Promise<RallyEvent[]> {
        try {
            const { data } = await this.client.get(`/content/filters/calendar?championship=wrc&origin=vcms&year=2024`)

            const schedule: Schedule = JSON.parse(JSON.stringify(data))

            const today = moment()
            const sortedEvents: RallyEvent[] = []
            schedule.content.forEach((event) => {
                const startDate = moment(event.startDate)

                if (today <= startDate && sortedEvents.length <= 2) {
                    sortedEvents.push(event)
                }
            })

            return sortedEvents 
        } catch (err) {
            console.error(err)
            throw err
        }
    }

    private getChampionshipYearMapFromString = (year: string): ChampionshipYearMap => {
        switch (year) {
            case '2024':
                return TwentyFourYearMap;
            case '2023':
                return TwentyThreeYearMap;
            case '2022':
                return TwentyTwoYearMap;
            case '2021':
                return TwentyOneYearMap;
            default:
                return TwentyFourYearMap;
        }
    }

    async fetchStandings(yearString: string): Promise<StandingsResult> {
        try {
            const year = this.getChampionshipYearMapFromString(yearString)

            const { data } = await this.client.get(`/content/result/championshipresult?seasonId=${year.seasonId}&championshipId=${year.championshipId}&type=driver&championship=wrc`)

            // season hasn't started yet
            if (data.message) {
                return {
                    stage: 'Not Started',
                    latestEventcountryIso: 'N/A',
                    thumbnailBaseUrl: 'N/A',
                    standings: []
                }
            }

            console.log(data)

            const standingsResponse: StandingsResponse = JSON.parse(JSON.stringify(data))

            const standingsResult: StandingsResult = convertStandingsReponseToResult(standingsResponse)

            return standingsResult
        } catch (err) {
            console.error(err)
            throw err
        }
    }
}

export const wrcClient = new WrcClient()