import service from "~/src/services/service"
import { ISiteID } from '~/src/types/services/ISiteID'
import { ISiteInfo } from '~/src/types/services/ISiteInfo'

/**
 * Returns information about a specific site.
 *
 * The site information contains the ID and name of the site. It also contains a list of devices that make up the site.
 *
 * @param siteId {ISiteID}
 * @return Promise<ISiteInfo>
 */
export async function getSiteInfo(siteId: ISiteID): Promise<ISiteInfo> {
  const { data } = await service.get(`/site-info/${siteId}`)
  return data as ISiteInfo
}

export default getSiteInfo