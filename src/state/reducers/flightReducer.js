const initialState = { }
const rowData = [
  {
      "flightDetails": [
        {"flightnumber":1,
          "airlineName":"Indigo",
          "departureTime":"20:00",
          "arrivalTime":"13:00",
          "duration":1,
          "stops":4,
          "price":3000,
          "sourceCity": "India",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":2,
          "airlineName":"airIndia",
          "departureTime":"22:00",
          "arrivalTime":"14:00",
          "duration":1,
          "stops":2,
          "price":9000,
          "sourceCity": "India",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":3,
          "airlineName":"GoGo Airways",
          "departureTime":"20:00",
          "arrivalTime":"13:00",
          "duration":1,
          "stops":2,
          "price":13000,
          "sourceCity": "India",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":4,
          "airlineName":"airIndia",
          "departureTime":"14:00",
          "arrivalTime":"10:00",
          "duration":4,
          "stops":4,
          "price":30000,
          "sourceCity": "Russia",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":5,
          "airlineName":"GoGo Airways",
          "departureTime":"20:00",
          "arrivalTime":"14:00",
          "duration":1,
          "stops":6,
          "price":2000,
          "sourceCity": "Russia",
          "destinationCity": "cheenai"
        },
          {"flightnumber":6,
          "airlineName":"flight_six",
          "departureTime":"22:00",
          "arrivalTime":"13:00",
          "duration":4,
          "stops":4,
          "price":2500,
          "sourceCity": "Russia",
          "destinationCity": "London"
        },
          {"flightnumber":7,
          "airlineName":"GoGo Airways",
          "departureTime":"22:00",
          "arrivalTime":"14:00",
          "duration":2,
          "stops":6,
          "price":2000,
          "sourceCity": "London",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":8,
          "airlineName":"flight_eight",
          "departureTime":"20:00",
          "arrivalTime":"13:00",
          "duration":2,
          "stops":6,
          "price":2800,
          "sourceCity": "London",
          "destinationCity": "India"
        },
          {"flightnumber":9,
          "airlineName":"GoGo Airways",
          "departureTime":"14:00",
          "arrivalTime":"08:00",
          "duration":2,
          "stops":6,
          "price":3000,
          "sourceCity": "London",
          "destinationCity": "Russia"
        },
          {"flightnumber":10,
          "airlineName":"flight_ten",
          "departureTime":"10:00",
          "arrivalTime":"09:00",
          "duration":1,
          "stops":4,
          "price":8000,
          "sourceCity": "India",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":11,
          "airlineName":"GoGo Airways",
          "departureTime":"08:00",
          "arrivalTime":"07:00",
          "duration":3,
          "stops":6,
          "price":4000,
          "sourceCity": "India",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":12,
          "airlineName":"flight_twelve",
          "departureTime":"06:00",
          "arrivalTime":"05:00",
          "duration":2,
          "stops":2,
          "price":10000,
          "sourceCity": "India",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":13,
          "airlineName":"GoGo Airways",
          "departureTime":"15:00",
          "arrivalTime":"11:00",
          "duration":1,
          "stops":2,
          "price":9000,
          "sourceCity": "India",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":14,
          "airlineName":"flight_fourteen",
          "departureTime":"09:00",
          "arrivalTime":"08:00",
          "duration":1,
          "stops":4,
          "price":4000,
          "sourceCity": "London",
          "destinationCity": "srinagar"
        },
          {"flightnumber":15,
          "airlineName":"flight_fifteen",
          "departureTime":"07:00",
          "arrivalTime":"06:00",
          "duration":1,
          "stops":6,
          "price":2000,
          "sourceCity": "London",
          "destinationCity": "kolkata"
        },
          {"flightnumber":17,
          "airlineName":"Indigo",
          "departureTime":"02:00",
          "arrivalTime":"01:00",
          "duration":4,
          "stops":5,
          "price":2000,
          "sourceCity": "London",
          "destinationCity": "andamon"
        },
          {"flightnumber":18,
          "airlineName":"Indigo",
          "departureTime":"04:00",
          "arrivalTime":"03:00",
          "duration":2,
          "stops":1,
          "price":13000,
          "sourceCity": "India",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":19,
          "airlineName":"Indigo",
          "departureTime":"22:00",
          "arrivalTime":"21:00",
          "duration":3,
          "stops":6,
          "price":2300,
          "sourceCity": "India",
          "destinationCity": "SriLanka"
        },
          {"flightnumber":20,
          "airlineName":"Indigo",
          "departureTime":"10:00",
          "arrivalTime":"09:00",
          "duration":2,
          "stops":2,
          "price":15000,
          "sourceCity": "India",
          "destinationCity": "SriLanka"
        }
      ]
    }
]

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "searchInfo":
            return action.payload;
        case "submitInfo":
            return {...state,rowData}
        default:
            return state
    }
}

export default reducer;