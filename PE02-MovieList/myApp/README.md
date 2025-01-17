PE02 – Movie List

**Input**

In this Movie List application, the user interacts with a movie collection displayed on the screen. The primary input the program gets is a list of movies. Each movie includes a title, genre, and release date. Users can filter the movie list by selecting a genre from a dropdown menu. This form auto-populates the genre according to movies available; one may be chosen, or "All" may be selected to list all movies. Clicking on any title should also display the movie's chosen title in an alert.

**Process**

The movie listing is presented in a simple, clean format, which gives the title and genre, followed by the year the movie was released. The app filters the list of movies by the selected genre and updates the films shown. When the user clicks on a movie title, the app pops an alert box with the title of that movie. This dynamic interaction is managed through React's state and event-handling system, which ensures that the app updates in real time as the user selects different genres or clicks on movies.

**Output**

When the user filters the movie list by genre, he will be presented with a list of movies according to the genre chosen. Each item in a film presents its title, genre, and year of appearance. If "All" genres are determined, the application should show all movies from the list. By clicking on any movie title, an alert with the name of the chosen movie should appear. In this way, an alert will help a user understand which movie he has clicked on.

**Features**

The Movie List app brings a few key highlights: First is the dropdown menu whereby users can view movies according to genre, quickly finding films according to their favorite group. Second, clicking every movie title will trigger an alert showing the selected movie's name to implement simple and interactive events. The underlying app is responsive, meaning different screen sizes adjust accordingly, and the application works well on all desktop and mobile devices.
