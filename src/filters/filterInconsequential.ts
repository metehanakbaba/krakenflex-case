import { ISiteInfo } from '~/src/types/services/ISiteInfo'
import { IEnhancedOutages, IOutage } from '~/src/types/services/IOutage'

/**
 * Filter out device name with the earliest specific date
 *
 * @param outages {IOutage[]}
 * @param siteInfo {ISiteInfo}
 */
export function filterInconsequential(
  outages: IOutage[],
  siteInfo: ISiteInfo
): IEnhancedOutages[] {

  /**
   * @var earliestDate {Date} is a static constructed variable we don't need to re-create instance in filter loop
   */
  const earliestDate = new Date('2022-01-01T00:00:00.000Z')

  return (outages as IEnhancedOutages[]).filter(outage => {

    if(earliestDate > new Date(outage.begin)) return false

    const findDevice = siteInfo.devices.find(({ id }) => id === outage.id)
    if (!findDevice) return false

    outage.name = findDevice.name
    return true
  })
}

export default filterInconsequential