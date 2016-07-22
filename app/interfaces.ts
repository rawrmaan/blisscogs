/* API */

interface APIResponse {
  items: Release[],
  nextPage: number
}

interface AxiosResponse {
  data: APIResponse
}

/* REDUX */

export interface ReduxAction {
  type: string,
  payload?: any,
  meta?: any
}

export interface ReduxActionAPIResponse extends ReduxAction {
  payload: AxiosResponse
}

/* RELEASES */

export interface Release {
  basic_information: ReleaseBasicInformation,
  community: ReleaseCommunity,
  id: number
}

interface ReleaseBasicInformation {
  artists: ReleaseArtist[],
  formats: ReleaseFormats[],
  labels: ReleaseLabel[],
  title: string,
  thumb: string,
  year: number
}

interface ReleaseArtist {
  name: string
}

interface ReleaseCommunityRating {
  average: number,
  count: number
}

interface ReleaseCommunity {
  rating: ReleaseCommunityRating
}

interface ReleaseFormats {
  name: string
  descriptions: string[]
}

interface ReleaseLabel {
  name: string
}