# Known Bugs

## 1. Weather Data Not Displayed After Page Reload Due to Selected City State Reset

- **Description**: After searching for a city using the search box and selecting a city to view weather details, the selected city state resets to default upon page reload. As a result, the weather data for the previously selected city is not displayed until the user performs a new search for the city.
- **Impact**: This issue disrupts user experience by requiring users to perform additional steps to view weather information after a page reload.
- **Steps to Reproduce**:
  1. Use the search box to search for a city (e.g., "New York").
  2. Select a city from the search results to view weather details (e.g., click on "New York").
  3. Weather information for the selected city is displayed.
  4. Reload the page.
  5. Upon page reload, observe that the selected city state resets to default (e.g., no city selected).
  6. Weather data for the previously selected city is not displayed.
  7. Navigate back to the main page ("/") and search for the city again to view weather details.

---

## 2. App Crashes When Searching for a Country Instead of a City

- **Description**: When users search for a country instead of a city in the search box, the app crashes. The expected default behavior is to search for a city, and searching for a country triggers unexpected behavior leading to a crash.
- **Impact**: This issue disrupts user experience by causing the app to crash, requiring users to manually return to the default state ("/") and perform a city search.
- **Steps to Reproduce**:
  1. In the search box, enter the name of a country (e.g., "France").
  2. Press Enter or click the search button.
  3. The app crashes or displays unexpected behavior.
  4. Navigate back to the main page ("/") to reset the search state.
  5. Perform a city search (e.g., enter "New York" in the search box).
  6. Weather information for the searched city should now be displayed correctly.
- **Potential Fix**: Review the search functionality to ensure it correctly handles input for city names as the default behavior. Implement input validation or error handling to prevent crashes when non-city inputs (such as country names) are entered. Provide clear user feedback or error messages to guide users to search for cities instead of countries.

---

## 3. Page Crashes When Loading Selected City Due to Inconsistent Data from OpenCage API

- **Description**: Sometimes when navigating to a selected city page, the page crashes. This is caused by inconsistent data returned from the OpenCage API, leading to unexpected behavior or errors.
- **Impact**: This issue disrupts user experience by preventing users from accessing weather information for selected cities reliably.
- **Steps to Reproduce**:
  - Navigate to a selected city page (e.g., "/weather/NewYork").
  - Observe that the page crashes or displays unexpected behavior intermittently.
  - The issue may occur due to variations in data returned by the OpenCage API for different locations.
- **Potential Fix**: Review the integration with the OpenCage API to handle variations in data response more robustly. Implement error handling and retry mechanisms for API requests to mitigate crashes caused by inconsistent data. Consider caching strategies or alternative APIs for geocoding to improve reliability in retrieving location data.
