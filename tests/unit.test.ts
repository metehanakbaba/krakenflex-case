import env from '~/src/env'
import mockSiteInfo from '~/tests/mocks/mockSiteInfo'
import { checkMissingEnv } from '~/src/utils/checkMissingEnv'
import * as serviceOutages from '~/src/services/serviceOutages'
import * as serviceSiteInfo from '~/src/services/serviceSiteInfo'
import * as filterInconsequential from '~/src/filters/filterInconsequential'
import handlerUpdatedOutages from '~/src/handlers/services/handlerUpdatedOutages'
import {
  mockEnhancedOutages,
  mockInconsequentialData,
  mockOutages,
} from '~/tests/mocks/mockOutages'
import { ISiteID } from '~/src/types/services/ISiteID'

const siteID: ISiteID = 'norwich-pear-tree'

const spyFunctions = (fn, method, returnValue): jest.SpyInstance =>
  jest.spyOn(fn, method).mockReturnValue(returnValue)

describe('Unit Test', () => {
  const spy = {
    services: {
      outages: {
        get: spyFunctions(serviceOutages, 'getOutages', mockOutages),
        send: spyFunctions(serviceOutages, 'sendOutages', false),
      },
      siteInfo: {
        get: spyFunctions(serviceSiteInfo, 'getSiteInfo', mockSiteInfo),
      },
    },
    filters: {
      inconsequential: spyFunctions(
        filterInconsequential,
        'filterInconsequential',
        mockEnhancedOutages
      ),
    },
  }

  test('Should environments must be filled completely', async () => {
    expect(checkMissingEnv(env)).toBe(false)
  })

  test('Should filter out outages that expired', async () => {
    const data = filterInconsequential.default(mockInconsequentialData, mockSiteInfo)
    expect(data).toEqual(mockOutages)
  })

  test('Should filter out outages that expired begin date & random device id', async () => {
    const data = filterInconsequential.default(mockInconsequentialData, mockSiteInfo)
    expect(data).toEqual(mockOutages)
  })

  test('Should all functions are working correctly', async () => {
    const result = await handlerUpdatedOutages(siteID)
    expect(result).toBe(true)
    expect(spy.services.outages.get).toBeCalledTimes(1)
    expect(spy.services.siteInfo.get).toBeCalledTimes(1)
    expect(spy.services.siteInfo.get).toBeCalledWith(siteID)
    expect(spy.filters.inconsequential).toBeCalledTimes(1)
    expect(spy.filters.inconsequential).toBeCalledWith(mockOutages, mockSiteInfo)
    expect(spy.services.outages.send).toBeCalledTimes(1)
    expect(spy.services.outages.send).toBeCalledWith(mockEnhancedOutages, siteID)
  })
})
