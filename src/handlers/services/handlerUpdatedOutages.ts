import { getSiteInfo } from '~/src/services/serviceSiteInfo'
import { ISiteID } from '~/src/types/services/ISiteID'
import { getOutages, sendOutages } from '~/src/services/serviceOutages'
import { filterInconsequential } from '~/src/filters/filterInconsequential'

/**
 * Makes API calls to update outages and filters out inconsequential device ids
 *
 * @param siteID {ISiteID}
 */
export default async function handlerUpdatedOutages(siteID: ISiteID): Promise<boolean> {
  const outages = await getOutages()
  const siteInfo = await getSiteInfo(siteID)
  const filtered = filterInconsequential(outages, siteInfo)
  await sendOutages(filtered, siteID)
  return true
}
