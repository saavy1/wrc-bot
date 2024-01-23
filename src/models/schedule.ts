interface ImageDimension {
  height: number;
  width: number;
  __typename: string;
}

interface Resolution {
  id: string;
  url: string;
  height: number;
  width: number;
  __typename: string;
}

interface AspectRatio {
  title: string;
  resolutions: Resolution[];
  __typename: string;
}

interface Logo {
  id: string;
  fileName: string;
  dimensions: ImageDimension;
  aspectRatio: AspectRatio[];
  __typename: string;
}

interface Season {
  id: string;
  name: null;
  seasonId: string;
  title: string;
  __typename: string;
}

interface Competition {
  id: string;
  title: string;
  competitionId: string;
  logo: Logo;
}

interface Image {
  url: string;
  width: number;
  height: number;
  type: string;
}

export interface RallyEvent {
  id: string;
  guid: string;
  title: string;
  location: string;
  startDate: number;
  endDate: number;
  eventId: string;
  rallyId: string;
  description: string;
  round: number;
  cvpSeriesLink: string;
  sponsor: null;
  images: Image[];
  season: Season;
  competition: Competition;
}

export interface Schedule {
  content: RallyEvent[];
}
