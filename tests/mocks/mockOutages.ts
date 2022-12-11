import {IEnhancedOutages, IOutage} from '~/src/types/services/IOutage'

export const mockOutages: IOutage[] = [
  {
    id: '002b28fc-283c-47ec-9af2-ea287336dc1b',
    begin: '2022-07-26T17:00:31.036Z',
    end: '2022-08-29T00:37:42.253Z',
  },
  {
    id: '002b28fc-283c-47ec-9af2-ea287336dc1b',
    begin: '2022-05-23T12:21:27.377Z',
    end: '2022-11-13T02:16:38.905Z',
  },
]

export const mockEnhancedOutages: IEnhancedOutages[] = [
  {
    id: "002b28fc-283c-47ec-9af2-ea287336dc1b",
    name: "Battery 1",
    begin: "2022-05-23T12:21:27.377Z",
    end: "2022-11-13T02:16:38.905Z"
  }
]

export const mockInconsequentialData: IOutage[] = [
  ...mockOutages,
  {
    id: "0101010101", // random device id
    begin: "2020-05-23T12:21:27.377Z", // expired date
    end: "2022-11-13T02:16:38.905Z",
  },
]
