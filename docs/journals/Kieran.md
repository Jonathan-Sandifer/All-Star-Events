# Journal of the Journey

## 05/27/2022

<p>Today I spent a lot of time searching for API's to use for our application.
I went through at least 10 Event based API's that were shut down, out of date, or locked behind a paywall. As negativity and hopelessness for our project began to creep in, we were saved. One more website we came across had the information we needed. We now have our Event based API. I tested some requests in insomnia to see if it gave the response we wanted, it all checks out. I also added this journals directory, sent an email to a Hiking trail api, and worked toward our Issues board. </p>

## 05/30/2022

<p> I was wanted to get something done today so I decided to set up our application with the directories we will be working in. I created the Parks and Events django projects and apps. I also installed each app inside the projects settings.py. I added both the requirements.txt and Dockerfiles to each respective project. I began framing the Docker-compose yml file but there is still much more I need to learn about it. I think tomorrow I will finish that up and ask any lingering questions. I know we will continue to add to the compose file, but for now we have the basics. 
</p>

## 06/01/2022

<p>Wow, what a day! Sooooo many bugs. I think the Docker-compose.yml file is causing us issues
especially the database service. After battling divergent branches and overall team frustration, I was able to complete the initial NavBar. We decided fo begin in the front-end and move to the back-end. We also discovered that a monolith would better suit our project, but we are continuing with the micro-service to build upon our knowledge. </p>

## 06/02/2022

<p> Today was another battle. We did fix our database Issue with the help of curtis. I added accounts service to the yml file, began the preferences page and basically completed the styling. I also added some dummy data and am setting up for beginning some back-end work to get that going. We gotta appreciate the small wins, because it feels like we have been getting whooped so far. </p>

## 06/06/2022

<P> Today started off waiting for user authentication workshop so we could successfully create our users. After that, we had some more bug fixes, and towards the end of the day I was able to create a user. Now we can also list preferences that are attached to each specific user. Insomnia is working nicely, and tomorrow I will have to begin the component on the front end that takes in the selected values. Stayed on a bit later and found a tutorial on how to update state with checkboxes in react. Made progress and indeed can save the state of the selected checkboxes in the preference component. Now i need to figure out how to send that value to the preference model and create those selected preferences as objects on the signed in user. I also finished the insomnia endpoint to create a preference.  </p>

## 06/07/2022

<p> Spent the day today still trying to attach a preference to a user. It can be handled properly on the back end, but now to figure out how to integrate the logged in users preference to be attached to the user model. A lot of back end work was done today. I finished the put request function to handle updating a user models preference. I began work on the search bar component as well, the input state is now able to be saved, and I will use that to make a call for the latitude and longitude hopefully tomorrow. I also stored an api key into a .env file on the front end. I know that is not the correct way to do it, so i will fix it later on. For now, It will have to make do as I am feeling pretty behind and overwhelmed. I got back online and now the search bar takes the city input and will return a geocoding response! thats enough for the day.</p>

## 06/08/2022

<p>Today was a great team day! a lot of pair programming and communication of ideas between the team. We had to set up an acls file in the back-end to properly handle our API calls and make sure our api keys/secrets were safe, and no longer in the front-end. I navigated as shane drove through the process of creating a new function to get our event data. We also messed around with the seat geek api to see how many results we could get, nd discussed how preferences will be included in the call. </p>

## 06/09/2022

<p> Today was very confusing. A lot more pair programming swapping between shane and I driving. We decided to re-arrange our back-end to account for the cities that have the same name, but are in different states. It took all day setting everything up and we got lost with how many back and forth API calls we were making. Im sure this was not best practice. I stayed on a bit to add a new onBlur event to our component, and I created a function that switches an input states name to the state code.  </p>


## 06/22/2022

<p> Today I spent most of the day creating new functions in the back-end that filter out a users preferences and return events and parks based off of their selected preferences. I also spent a but of time the past few days pair programming with shane, creating a new view that will be able to accept event information and save it to the database. We are saving that Info in order to create the "Your events/parks" page. The two filtering functions were interesting and fun to put together because I had to use a few for loops and access keys in a dictionary. That definitely gave me good practice.  In addition to the larger back end functionality, a lot of tiny style changes on buttons. A week ago I was able to send the selected Lat and Lon so we could successfully pull the daily forecast. Also About two weeks ago, I was able to try out a new technique called prop drilling, to send the information from the user search into the list view component. After that data was received, colton had the idea to save the information into local storage. This was because upon refresh, our prop drilled data was being lost. After implementing that local storage idea, we used that data inside of a useEffect hook to fetch the daily weather data. All that is left is to finish up the saved events/parks page. We need to create the List view function which will return the currently signed in users saved items. We noticed a few bugs that we may need to start taking care of. Right now we have no intention on implementing any other features. Just bug fixes and deployment.  </p>

## 06/22/2022

<p>Started the day by bug fixing. Users who were not signed in were unable to search for a city and receive the event and park data. I added an else block in one of our functions to account for un-signed in users. After that, we realized that if a user was signed in, the data was sent back in a list. If they were not, the data was sent back in an object. This caused an issue on the front end about how to map through the data. With jeff's help, I was able to reshape the data on the back end to the same structure whether a user was signed in or not. I learned that I should always have my data be shaped the same from the beginning. Did some pair programming with shane, he drove as we created a function that will list a signed in users saved events, and the front end component that makes the request, along with the styling. I also went around many of our files and deleted commented out code, and console.log/print statements that were all over the place. I removed the preferences link from the nav bar, and the save button on the parks page. Preferences are selected when a user first creates an account, and we are only able to bookmark events to our list. I switched into the deploy branch and merged so we can all have the gitlab-ci file. We spent the end of the day making sure the jobs passed, and I stayed with curtis to create the apps on heroku.</p>