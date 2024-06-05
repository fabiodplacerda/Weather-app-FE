const testCities = [
  {
    bounds: {
      northeast: {
        lat: 51.6918741,
        lng: 0.3340155,
      },
      southwest: {
        lat: 51.2867601,
        lng: -0.5103751,
      },
    },
    components: {
      "ISO_3166-1_alpha-2": "GB",
      "ISO_3166-1_alpha-3": "GBR",
      "ISO_3166-2": ["GB-ENG"],
      _category: "place",
      _normalized_city: "London",
      _type: "city",
      city: "London",
      continent: "Europe",
      country: "United Kingdom",
      country_code: "gb",
      state: "England",
      state_code: "ENG",
      state_district: "Greater London",
    },
    confidence: 1,
    formatted: "London, United Kingdom",
    geometry: {
      lat: 51.4893335,
      lng: -0.1440551,
    },
  },
  {
    bounds: {
      northeast: {
        lat: 51.5233122,
        lng: -0.0727619,
      },
      southwest: {
        lat: 51.5068709,
        lng: -0.1138295,
      },
    },
    components: {
      "ISO_3166-1_alpha-2": "GB",
      "ISO_3166-1_alpha-3": "GBR",
      "ISO_3166-2": ["GB-ENG", "GB-LND"],
      _category: "place",
      _normalized_city: "London",
      _type: "neighbourhood",
      city: "London",
      city_district: "City of London",
      continent: "Europe",
      country: "United Kingdom",
      country_code: "gb",
      county: "City of London",
      county_code: "LND",
      state: "England",
      state_code: "ENG",
      state_district: "Greater London",
    },
    confidence: 7,
    formatted: "London, City of London, United Kingdom",
    geometry: {
      lat: 51.5156177,
      lng: -0.0919983,
    },
  },
  {
    bounds: {
      northeast: {
        lat: 43.1432406,
        lng: -81.083372,
      },
      southwest: {
        lat: 42.8232406,
        lng: -81.403372,
      },
    },
    components: {
      "ISO_3166-1_alpha-2": "CA",
      "ISO_3166-1_alpha-3": "CAN",
      "ISO_3166-2": ["CA-ON"],
      _category: "place",
      _normalized_city: "London",
      _type: "city",
      city: "London",
      continent: "North America",
      country: "Canada",
      country_code: "ca",
      postcode: "N6A 3N7",
      state: "Ontario",
      state_code: "ON",
    },
    confidence: 3,
    formatted: "London, ON, Canada",
    geometry: {
      lat: 42.9832406,
      lng: -81.243372,
    },
  },
  {
    bounds: {
      northeast: {
        lat: 37.15226,
        lng: -84.035957,
      },
      southwest: {
        lat: 37.079759,
        lng: -84.126262,
      },
    },
    components: {
      "ISO_3166-1_alpha-2": "US",
      "ISO_3166-1_alpha-3": "USA",
      "ISO_3166-2": ["US-KY"],
      _category: "place",
      _normalized_city: "London",
      _type: "city",
      city: "London",
      continent: "North America",
      country: "United States",
      country_code: "us",
      county: "Laurel County",
      postcode: "40741",
      state: "Kentucky",
      state_code: "KY",
    },
    confidence: 7,
    formatted: "London, Kentucky, United States of America",
    geometry: {
      lat: 37.1283343,
      lng: -84.0835576,
    },
  },
  {
    bounds: {
      northeast: {
        lat: 39.921786,
        lng: -83.389997,
      },
      southwest: {
        lat: 39.85928,
        lng: -83.478923,
      },
    },
    components: {
      "ISO_3166-1_alpha-2": "US",
      "ISO_3166-1_alpha-3": "USA",
      "ISO_3166-2": ["US-OH"],
      _category: "place",
      _normalized_city: "London",
      _type: "city",
      city: "London",
      continent: "North America",
      country: "United States",
      country_code: "us",
      county: "Madison County",
      postcode: "43140",
      state: "Ohio",
      state_code: "OH",
    },
    confidence: 7,
    formatted: "London, Ohio, United States of America",
    geometry: {
      lat: 39.8864493,
      lng: -83.448253,
    },
  },
  {
    bounds: {
      northeast: {
        lat: 35.3389327,
        lng: -93.1874567,
      },
      southwest: {
        lat: 35.3169503,
        lng: -93.2716305,
      },
    },
    components: {
      "ISO_3166-1_alpha-2": "US",
      "ISO_3166-1_alpha-3": "USA",
      "ISO_3166-2": ["US-AR"],
      _category: "place",
      _normalized_city: "London",
      _type: "city",
      city: "London",
      continent: "North America",
      country: "United States",
      country_code: "us",
      county: "Pope County",
      state: "Arkansas",
      state_code: "AR",
    },
    confidence: 7,
    formatted: "London, Arkansas, United States of America",
    geometry: {
      lat: 35.328973,
      lng: -93.2529553,
    },
  },
  {
    bounds: {
      northeast: {
        lat: 38.2143567,
        lng: -81.3486944,
      },
      southwest: {
        lat: 38.1743567,
        lng: -81.3886944,
      },
    },
    components: {
      "ISO_3166-1_alpha-2": "US",
      "ISO_3166-1_alpha-3": "USA",
      "ISO_3166-2": ["US-WV"],
      _category: "place",
      _normalized_city: "London",
      _type: "hamlet",
      continent: "North America",
      country: "United States",
      country_code: "us",
      county: "Kanawha County",
      hamlet: "London",
      postcode: "25126",
      state: "West Virginia",
      state_code: "WV",
    },
    confidence: 7,
    formatted: "London, Kanawha County, WV 25126, United States of America",
    geometry: {
      lat: 38.1943567,
      lng: -81.3686944,
    },
  },
  {
    bounds: {
      northeast: {
        lat: 43.0677775,
        lng: -88.9928881,
      },
      southwest: {
        lat: 43.0277775,
        lng: -89.0328881,
      },
    },
    components: {
      "ISO_3166-1_alpha-2": "US",
      "ISO_3166-1_alpha-3": "USA",
      "ISO_3166-2": ["US-WI"],
      _category: "place",
      _normalized_city: "Town of Deerfield",
      _type: "hamlet",
      continent: "North America",
      country: "United States",
      country_code: "us",
      county: "Dane County",
      hamlet: "London",
      municipality: "Town of Deerfield",
      state: "Wisconsin",
      state_code: "WI",
    },
    confidence: 7,
    formatted: "London, Deerfield, Wisconsin, United States of America",
    geometry: {
      lat: 43.0477775,
      lng: -89.0128881,
    },
  },
];

export default testCities;