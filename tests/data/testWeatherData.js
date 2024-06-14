const testWeatherData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1718334000,
      main: {
        temp: 285.31,
        feels_like: 285.04,
        temp_min: 285.31,
        temp_max: 285.76,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 997,
        humidity: 94,
        temp_kf: -0.45,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 2.96,
        deg: 205,
        gust: 7.98,
      },
      visibility: 10000,
      pop: 0.43,
      rain: {
        "3h": 0.29,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-14 03:00:00",
    },
    {
      dt: 1718344800,
      main: {
        temp: 285.88,
        feels_like: 285.53,
        temp_min: 285.88,
        temp_max: 286.28,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 997,
        humidity: 89,
        temp_kf: -0.4,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 3.83,
        deg: 223,
        gust: 10.08,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.14,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-14 06:00:00",
    },
    {
      dt: 1718355600,
      main: {
        temp: 286.39,
        feels_like: 286.04,
        temp_min: 286.39,
        temp_max: 286.39,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 998,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.28,
        deg: 216,
        gust: 9.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-14 09:00:00",
    },
    {
      dt: 1718366400,
      main: {
        temp: 291.75,
        feels_like: 291,
        temp_min: 291.75,
        temp_max: 291.75,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 997,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 6.14,
        deg: 214,
        gust: 9.45,
      },
      visibility: 10000,
      pop: 0.21,
      rain: {
        "3h": 0.45,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-14 12:00:00",
    },
    {
      dt: 1718377200,
      main: {
        temp: 290.71,
        feels_like: 290.01,
        temp_min: 290.71,
        temp_max: 290.71,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 996,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 6.75,
        deg: 220,
        gust: 10.84,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.03,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-14 15:00:00",
    },
    {
      dt: 1718388000,
      main: {
        temp: 288.35,
        feels_like: 287.78,
        temp_min: 288.35,
        temp_max: 288.35,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 995,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 4.89,
        deg: 219,
        gust: 9.23,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.06,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-14 18:00:00",
    },
    {
      dt: 1718398800,
      main: {
        temp: 285.35,
        feels_like: 284.77,
        temp_min: 285.35,
        temp_max: 285.35,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 995,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 77,
      },
      wind: {
        speed: 3.97,
        deg: 209,
        gust: 9.4,
      },
      visibility: 10000,
      pop: 0.85,
      rain: {
        "3h": 0.48,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-14 21:00:00",
    },
    {
      dt: 1718409600,
      main: {
        temp: 284.2,
        feels_like: 283.71,
        temp_min: 284.2,
        temp_max: 284.2,
        pressure: 999,
        sea_level: 999,
        grnd_level: 994,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 3.25,
        deg: 215,
        gust: 8.35,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.6,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-15 00:00:00",
    },
    {
      dt: 1718420400,
      main: {
        temp: 282.32,
        feels_like: 280.15,
        temp_min: 282.32,
        temp_max: 282.32,
        pressure: 999,
        sea_level: 999,
        grnd_level: 995,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 67,
      },
      wind: {
        speed: 3.96,
        deg: 228,
        gust: 10.93,
      },
      visibility: 10000,
      pop: 0.28,
      rain: {
        "3h": 0.33,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-15 03:00:00",
    },
    {
      dt: 1718431200,
      main: {
        temp: 283.92,
        feels_like: 283.35,
        temp_min: 283.92,
        temp_max: 283.92,
        pressure: 999,
        sea_level: 999,
        grnd_level: 995,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 5.09,
        deg: 210,
        gust: 12.59,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-15 06:00:00",
    },
    {
      dt: 1718442000,
      main: {
        temp: 287.77,
        feels_like: 287.09,
        temp_min: 287.77,
        temp_max: 287.77,
        pressure: 999,
        sea_level: 999,
        grnd_level: 995,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.56,
        deg: 224,
        gust: 11.08,
      },
      visibility: 10000,
      pop: 0.64,
      rain: {
        "3h": 0.33,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-15 09:00:00",
    },
    {
      dt: 1718452800,
      main: {
        temp: 289.41,
        feels_like: 288.63,
        temp_min: 289.41,
        temp_max: 289.41,
        pressure: 999,
        sea_level: 999,
        grnd_level: 994,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 7.05,
        deg: 239,
        gust: 12.34,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.12,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-15 12:00:00",
    },
    {
      dt: 1718463600,
      main: {
        temp: 289.63,
        feels_like: 288.87,
        temp_min: 289.63,
        temp_max: 289.63,
        pressure: 999,
        sea_level: 999,
        grnd_level: 995,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 7.22,
        deg: 249,
        gust: 12.64,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.55,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-15 15:00:00",
    },
    {
      dt: 1718474400,
      main: {
        temp: 287.72,
        feels_like: 287.09,
        temp_min: 287.72,
        temp_max: 287.72,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 996,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 6.01,
        deg: 239,
        gust: 11.51,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.84,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-15 18:00:00",
    },
    {
      dt: 1718485200,
      main: {
        temp: 285.09,
        feels_like: 284.38,
        temp_min: 285.09,
        temp_max: 285.09,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 998,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 63,
      },
      wind: {
        speed: 5.18,
        deg: 231,
        gust: 10.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-15 21:00:00",
    },
    {
      dt: 1718496000,
      main: {
        temp: 285.14,
        feels_like: 284.51,
        temp_min: 285.14,
        temp_max: 285.14,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 998,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 56,
      },
      wind: {
        speed: 4.49,
        deg: 227,
        gust: 10.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-16 00:00:00",
    },
    {
      dt: 1718506800,
      main: {
        temp: 283.87,
        feels_like: 283.19,
        temp_min: 283.87,
        temp_max: 283.87,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 998,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 4.04,
        deg: 223,
        gust: 11.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-16 03:00:00",
    },
    {
      dt: 1718517600,
      main: {
        temp: 285.77,
        feels_like: 285.1,
        temp_min: 285.77,
        temp_max: 285.77,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 998,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 4.26,
        deg: 215,
        gust: 10.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-16 06:00:00",
    },
    {
      dt: 1718528400,
      main: {
        temp: 289.64,
        feels_like: 288.91,
        temp_min: 289.64,
        temp_max: 289.64,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 998,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 5.74,
        deg: 221,
        gust: 8.85,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-16 09:00:00",
    },
    {
      dt: 1718539200,
      main: {
        temp: 290.48,
        feels_like: 289.89,
        temp_min: 290.48,
        temp_max: 290.48,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 999,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 67,
      },
      wind: {
        speed: 5.5,
        deg: 228,
        gust: 8.58,
      },
      visibility: 10000,
      pop: 0.8,
      rain: {
        "3h": 0.67,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-16 12:00:00",
    },
    {
      dt: 1718550000,
      main: {
        temp: 291.71,
        feels_like: 290.98,
        temp_min: 291.71,
        temp_max: 291.71,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 999,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.99,
        deg: 223,
        gust: 8.2,
      },
      visibility: 10000,
      pop: 0.37,
      rain: {
        "3h": 0.22,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-16 15:00:00",
    },
    {
      dt: 1718560800,
      main: {
        temp: 289.96,
        feels_like: 289.39,
        temp_min: 289.96,
        temp_max: 289.96,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 999,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.02,
        deg: 221,
        gust: 8.4,
      },
      visibility: 10000,
      pop: 0.08,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-16 18:00:00",
    },
    {
      dt: 1718571600,
      main: {
        temp: 287.53,
        feels_like: 287.03,
        temp_min: 287.53,
        temp_max: 287.53,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1001,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.02,
        deg: 229,
        gust: 8.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-16 21:00:00",
    },
    {
      dt: 1718582400,
      main: {
        temp: 285.7,
        feels_like: 285.23,
        temp_min: 285.7,
        temp_max: 285.7,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1002,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.32,
        deg: 224,
        gust: 8.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-17 00:00:00",
    },
    {
      dt: 1718593200,
      main: {
        temp: 284.79,
        feels_like: 284.31,
        temp_min: 284.79,
        temp_max: 284.79,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1003,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.92,
        deg: 217,
        gust: 9.13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-17 03:00:00",
    },
    {
      dt: 1718604000,
      main: {
        temp: 286.1,
        feels_like: 285.54,
        temp_min: 286.1,
        temp_max: 286.1,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1004,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.08,
        deg: 222,
        gust: 8.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-17 06:00:00",
    },
    {
      dt: 1718614800,
      main: {
        temp: 290.39,
        feels_like: 289.58,
        temp_min: 290.39,
        temp_max: 290.39,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 4.13,
        deg: 224,
        gust: 6.45,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-17 09:00:00",
    },
    {
      dt: 1718625600,
      main: {
        temp: 293.14,
        feels_like: 292.55,
        temp_min: 293.14,
        temp_max: 293.14,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 77,
      },
      wind: {
        speed: 4.69,
        deg: 214,
        gust: 6.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-17 12:00:00",
    },
    {
      dt: 1718636400,
      main: {
        temp: 294.44,
        feels_like: 293.9,
        temp_min: 294.44,
        temp_max: 294.44,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 4.47,
        deg: 212,
        gust: 5.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-17 15:00:00",
    },
    {
      dt: 1718647200,
      main: {
        temp: 292.6,
        feels_like: 292.17,
        temp_min: 292.6,
        temp_max: 292.6,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 3.74,
        deg: 190,
        gust: 4.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-17 18:00:00",
    },
    {
      dt: 1718658000,
      main: {
        temp: 290,
        feels_like: 289.7,
        temp_min: 290,
        temp_max: 290,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1006,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.83,
        deg: 179,
        gust: 4.18,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-17 21:00:00",
    },
    {
      dt: 1718668800,
      main: {
        temp: 288.45,
        feels_like: 288.54,
        temp_min: 288.45,
        temp_max: 288.45,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.23,
        deg: 108,
        gust: 0.49,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.95,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-18 00:00:00",
    },
    {
      dt: 1718679600,
      main: {
        temp: 288.1,
        feels_like: 288.18,
        temp_min: 288.1,
        temp_max: 288.1,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.03,
        deg: 30,
        gust: 2.24,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.28,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-18 03:00:00",
    },
    {
      dt: 1718690400,
      main: {
        temp: 288.42,
        feels_like: 288.43,
        temp_min: 288.42,
        temp_max: 288.42,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.8,
        deg: 36,
        gust: 3.25,
      },
      visibility: 10000,
      pop: 0.8,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-18 06:00:00",
    },
    {
      dt: 1718701200,
      main: {
        temp: 288.08,
        feels_like: 288.14,
        temp_min: 288.08,
        temp_max: 288.08,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2,
        deg: 12,
        gust: 4.88,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.75,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-18 09:00:00",
    },
    {
      dt: 1718712000,
      main: {
        temp: 288,
        feels_like: 288.07,
        temp_min: 288,
        temp_max: 288,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1004,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.47,
        deg: 19,
        gust: 6,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.66,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-18 12:00:00",
    },
    {
      dt: 1718722800,
      main: {
        temp: 288.03,
        feels_like: 288.08,
        temp_min: 288.03,
        temp_max: 288.03,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1004,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.99,
        deg: 24,
        gust: 6.36,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.16,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-18 15:00:00",
    },
    {
      dt: 1718733600,
      main: {
        temp: 288.07,
        feels_like: 288.12,
        temp_min: 288.07,
        temp_max: 288.07,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.96,
        deg: 63,
        gust: 6.12,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-18 18:00:00",
    },
    {
      dt: 1718744400,
      main: {
        temp: 287.18,
        feels_like: 287.15,
        temp_min: 287.18,
        temp_max: 287.18,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.96,
        deg: 46,
        gust: 6.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-18 21:00:00",
    },
    {
      dt: 1718755200,
      main: {
        temp: 286.3,
        feels_like: 286.1,
        temp_min: 286.3,
        temp_max: 286.3,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1004,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.81,
        deg: 20,
        gust: 8.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-19 00:00:00",
    },
  ],
  city: {
    id: 2634341,
    name: "City of Westminster",
    coord: {
      lat: 51.4893,
      lon: -0.1441,
    },
    country: "GB",
    population: 0,
    timezone: 3600,
    sunrise: 1718336583,
    sunset: 1718396334,
  },
};

export default testWeatherData;
