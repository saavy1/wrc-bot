export interface StandingsResponse {
    type: string;
    stage: string;
    fields: string[];
    country: string[];
    latestEventId: number;
    latestEventcountryIso: string;
    thumbnailBaseUrl: string;
    values: string[][];
    defaultSort: string;
    sortOrder: string;
    totalElements: number;
    totalPages: number;
    lastCompleteEventId: number;
}