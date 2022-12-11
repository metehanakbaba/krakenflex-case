/**
 * An array outages
 */
export interface IOutage {
  /**
   *  The device ID the outage pertains to
   *  example: 44c02564-a229-4f51-8ded-cc7bcb202566
   */
  id: string;
  /**
   *  Outage begin date time
   *  example: example: 2022-01-01T00:00:00.000Z
   */
  begin: string;
  /**
   *  Outage begin date time
   *  example: example: 2022-01-01T00:00:00.000Z
   */
  end: string;
}

/**
 * An array of outages enhanced with extra information
 */
export interface IEnhancedOutages extends IOutage {
  /**
   * The display name of the device the outage pertains to
   * example: Partridge
   */
  name: string;
}