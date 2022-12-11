interface IDevice {
  /**
   *  The device ID
   *  example: 44c02564-a229-4f51-8ded-cc7bcb202566
   */
  id: string;
  /**
   *  The display name of the device
   *  example: Partridge
   */
  name: string;
}

/** Information on a site */
export interface ISiteInfo {
  /**
   *  The ID of the site
   *  example: pear-tree
   */
  id: string;
  /**
   *  The display name of the site
   *  example: Pear Tree
   */
  name: string;
  /**
   *  Outage begin date time
   *  example: example: 2022-01-01T00:00:00.000Z
   */
  devices: IDevice[];
}