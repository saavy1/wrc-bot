import { StandingsResponse } from './standings-response'

export interface StandingsResult {
    stage: string;
    latestEventcountryIso: string;
    thumbnailBaseUrl: string;
    standings: Standings[]
}

export interface Standings {
  championshipEntryId: string;
  overallPosition: string;
  overallPoints: string;
  driver: string;
  driverCountryImage: string;
  driverId: string;
  tyreManufacturer: string;
  teamName: string;
  teamLogo: string;
  contryIsoMCO: string;
  droppedContryIsoMCO: string;
  pointsBreakDownContryIsoMCO: string;
  positionContryIsoMCO: string;
  statusContryIsoMCO: string;
  totalPointsContryIsoMCO: string;
  contryIsoSWE: string;
  droppedContryIsoSWE: string;
  pointsBreakDownContryIsoSWE: string;
  positionContryIsoSWE: string;
  statusContryIsoSWE: string;
  totalPointsContryIsoSWE: string;
  contryIsoMEX: string;
  droppedContryIsoMEX: string;
  pointsBreakDownContryIsoMEX: string;
  positionContryIsoMEX: string;
  statusContryIsoMEX: string;
  totalPointsContryIsoMEX: string;
  contryIsoHRV: string;
  droppedContryIsoHRV: string;
  pointsBreakDownContryIsoHRV: string;
  positionContryIsoHRV: string;
  statusContryIsoHRV: string;
  totalPointsContryIsoHRV: string;
  contryIsoPRT: string;
  droppedContryIsoPRT: string;
  pointsBreakDownContryIsoPRT: string;
  positionContryIsoPRT: string;
  statusContryIsoPRT: string;
  totalPointsContryIsoPRT: string;
  contryIsoITA: string;
  droppedContryIsoITA: string;
  pointsBreakDownContryIsoITA: string;
  positionContryIsoITA: string;
  statusContryIsoITA: string;
  totalPointsContryIsoITA: string;
  contryIsoKEN: string;
  droppedContryIsoKEN: string;
  pointsBreakDownContryIsoKEN: string;
  positionContryIsoKEN: string;
  statusContryIsoKEN: string;
  totalPointsContryIsoKEN: string;
  contryIsoEST: string;
  droppedContryIsoEST: string;
  pointsBreakDownContryIsoEST: string;
  positionContryIsoEST: string;
  statusContryIsoEST: string;
  totalPointsContryIsoEST: string;
  contryIsoFIN: string;
  droppedContryIsoFIN: string;
  pointsBreakDownContryIsoFIN: string;
  positionContryIsoFIN: string;
  statusContryIsoFIN: string;
  totalPointsContryIsoFIN: string;
  contryIsoGRC: string;
  droppedContryIsoGRC: string;
  pointsBreakDownContryIsoGRC: string;
  positionContryIsoGRC: string;
  statusContryIsoGRC: string;
  totalPointsContryIsoGRC: string;
  contryIsoCHL: string;
  droppedContryIsoCHL: string;
  pointsBreakDownContryIsoCHL: string;
  positionContryIsoCHL: string;
  statusContryIsoCHL: string;
  totalPointsContryIsoCHL: string;
  contryIsoEUR: string;
  droppedContryIsoEUR: string;
  pointsBreakDownContryIsoEUR: string;
  positionContryIsoEUR: string;
  statusContryIsoEUR: string;
  totalPointsContryIsoEUR: string;
  contryIsoJPN: string;
  droppedContryIsoJPN: string;
  pointsBreakDownContryIsoJPN: string;
  positionContryIsoJPN: string;
  statusContryIsoJPN: string;
  totalPointsContryIsoJPN: string;
}

export const convertStandingsReponseToResult = (standingsResponse: StandingsResponse): StandingsResult => {
    const standingsResult: StandingsResult = {
        stage: standingsResponse.stage,
        latestEventcountryIso: standingsResponse.latestEventcountryIso,
        thumbnailBaseUrl: standingsResponse.thumbnailBaseUrl,
        standings: []
    }

    for (const result of standingsResponse.values) {
        const standing: Standings = {
            championshipEntryId: result[0],
            overallPosition: result[1],
            overallPoints: result[2],
            driver: result[3],
            driverCountryImage: result[4],
            driverId: result[5],
            tyreManufacturer: result[6],
            teamName: result[7],
            teamLogo: result[8],
            contryIsoMCO: result[9],
            droppedContryIsoMCO: result[10],
            pointsBreakDownContryIsoMCO: result[11],
            positionContryIsoMCO: result[12],
            statusContryIsoMCO: result[13],
            totalPointsContryIsoMCO: result[14],
            contryIsoSWE: result[15],
            droppedContryIsoSWE: result[16],
            pointsBreakDownContryIsoSWE: result[17],
            positionContryIsoSWE: result[18],
            statusContryIsoSWE: result[19],
            totalPointsContryIsoSWE: result[20],
            contryIsoMEX: result[21],
            droppedContryIsoMEX: result[22],
            pointsBreakDownContryIsoMEX: result[23],
            positionContryIsoMEX: result[24],
            statusContryIsoMEX: result[25],
            totalPointsContryIsoMEX: result[26],
            contryIsoHRV: result[27],
            droppedContryIsoHRV: result[28],
            pointsBreakDownContryIsoHRV: result[29],
            positionContryIsoHRV: result[30],
            statusContryIsoHRV: result[31],
            totalPointsContryIsoHRV: result[32],
            contryIsoPRT: result[33],
            droppedContryIsoPRT: result[34],
            pointsBreakDownContryIsoPRT: result[35],
            positionContryIsoPRT: result[36],
            statusContryIsoPRT: result[37],
            totalPointsContryIsoPRT: result[38],
            contryIsoITA: result[39],
            droppedContryIsoITA: result[40],
            pointsBreakDownContryIsoITA: result[41],
            positionContryIsoITA: result[42],
            statusContryIsoITA: result[43],
            totalPointsContryIsoITA: result[44],
            contryIsoKEN: result[45],
            droppedContryIsoKEN: result[46],
            pointsBreakDownContryIsoKEN: result[47],
            positionContryIsoKEN: result[48],
            statusContryIsoKEN: result[49],
            totalPointsContryIsoKEN: result[50],
            contryIsoEST: result[51],
            droppedContryIsoEST: result[52],
            pointsBreakDownContryIsoEST: result[53],
            positionContryIsoEST: result[54],
            statusContryIsoEST: result[55],
            totalPointsContryIsoEST: result[56],
            contryIsoFIN: result[57],
            droppedContryIsoFIN: result[58],
            pointsBreakDownContryIsoFIN: result[59],
            positionContryIsoFIN: result[60],
            statusContryIsoFIN: result[61],
            totalPointsContryIsoFIN: result[62],
            contryIsoGRC: result[63],
            droppedContryIsoGRC: result[64],
            pointsBreakDownContryIsoGRC: result[65],
            positionContryIsoGRC: result[66],
            statusContryIsoGRC: result[67],
            totalPointsContryIsoGRC: result[68],
            contryIsoCHL: result[69],
            droppedContryIsoCHL: result[70],
            pointsBreakDownContryIsoCHL: result[71],
            positionContryIsoCHL: result[72],
            statusContryIsoCHL: result[73],
            totalPointsContryIsoCHL: result[74],
            contryIsoEUR: result[75],
            droppedContryIsoEUR: result[76],
            pointsBreakDownContryIsoEUR: result[77],
            positionContryIsoEUR: result[78],
            statusContryIsoEUR: result[79],
            totalPointsContryIsoEUR: result[80],
            contryIsoJPN: result[81],
            droppedContryIsoJPN: result[82],
            pointsBreakDownContryIsoJPN: result[83],
            positionContryIsoJPN: result[84],
            statusContryIsoJPN: result[85],
            totalPointsContryIsoJPN: result[86],
        }
    
        standingsResult.standings.push(standing)
    }

    return standingsResult
}