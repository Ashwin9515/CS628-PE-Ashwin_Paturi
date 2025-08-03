# README

## Input
When adding a new city, users provide its name, country, and population. The city ID from the URL is used to display specific city details.

## Process
The app uses a React Router for seamless navigation. The `CitiesList` component lists clickable cities linking to their details. The `AddCity` component collects new city details and redirects to the cities list upon submission. The `CityDetails` component fetches and displays city information based on the city ID in the URL.

## Output
The app displays a list of cities with links to their details pages. It includes a form to add new cities, which redirects to the city list after submission. Clicking on a city shows its details within the same page layout, ensuring consistency.