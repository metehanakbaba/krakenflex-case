# Welcome to krakenflex-case 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/metehanakbaba/krakenflex-case#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/metehanakbaba/krakenflex-case/graphs/commit-activity)
[![Twitter: nychisback](https://img.shields.io/twitter/follow/nychisback.svg?style=social)](https://twitter.com/nychisback)

> This case is demonstrate my engineering skills. 

## Purpose
- Retrieves all outages from the `GET /outages` endpoint 
- Retrieves information from the `GET /site-info/{siteId}` endpoint for the site with the ID `norwich-pear-tree`
- Filters out any outages that began before `2022-01-01T00:00:00.000Z` or don't have an ID that is in the list of
   devices in the site information 
- For the remaining outages, it should attach the display name of the device in the site information to each appropriate outage
- Sends this list of outages to `POST /site-outages/{siteId}` for the site with the ID `norwich-pear-tree`
- Handler has been created and errors that may occur due to http will be handled and the result will be handle.
- Architecturally developed a completely modular system
- Developed a unit test that makes sure the entire system is working well
- A new instance has been created for `axios`
- The interceptor has been developed so that the specific baseurl and headers are in new `axios` instance
- Developed according to the `SOLID` principle
- Directory schema set up at `app level` and `service level`
- Initialized `.env`

###NOTE:
`Actually, instead of functional programming, the case problem can be solved by oop and generating a single class instance.`

## Install

```sh
npm install
```

## Usage
###### Don't forget to fill API_KEY in .env file
```sh
npm run start
```

## Run tests
###### Don't forget to fill API_KEY in .env file
```sh
npm run test
```

## Author

👤 **Metehan Akbaba**

* Twitter: [@nychisback](https://twitter.com/nychisback)
* Github: [@metehanakbaba](https://github.com/metehanakbaba)
* LinkedIn: [@metehan-akbaba-1a2b22173](https://linkedin.com/in/metehan-akbaba-1a2b22173)
