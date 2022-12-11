import getSiteInfo from '~/src/services/serviceSiteInfo'
import { ISiteID } from '~/src/types/services/ISiteID'
import { getOutages, sendOutages } from '~/src/services/serviceOutages'
import filterInconsequential from '~/src/filters/filterInconsequential'

/**
 * Makes API calls to update outages and filters out inconsequential device ids
 *
 * @param siteID {ISiteID}
 */
export default async function handlerUpdatedOutages(siteID: ISiteID): Promise<void> {
  const outages = await getOutages()
  const siteInfo = await getSiteInfo(siteID)

  await sendOutages(
    filterInconsequential(outages, siteInfo),
    siteID
  )
}
