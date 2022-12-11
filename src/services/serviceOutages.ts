import service from "~/src/services/service"
import {IEnhancedOutages, IOutage} from '~/src/types/services/IOutage'
import { ISiteID } from '~/src/types/services/ISiteID'

/**
 * Returns all outages in our system.
 *
 * An outage is when a device can no longer provide service and is declared as offline.
 * Each outage consists of a device ID, begin time, and end time.
 *
 * @return Promise<IOutage[]>
 */
export async function getOutages(): Promise<IOutage[]> {
  const { data } = await service.get('/outages')
  return data as IOutage[]
}

/**
 * Posts outages for a specific site with enhanced information.
 *
 * The outages posted should contain a device ID, device name, begin time, and end time.
 *
 * @param outages {IEnhancedOutages[]}
 * @param siteID {ISiteID}
 * @return Promise<void>
 */
export async function sendOutages(outages: IEnhancedOutages[], siteID: ISiteID): Promise<boolean> {
  await service.post(`/site-outages/${siteID}`, outages)
  console.info('Successfully processed request.')
  return true
}
