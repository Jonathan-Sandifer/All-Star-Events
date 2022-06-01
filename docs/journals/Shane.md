## May 27th, 2022

Today I worked on: 
Working with my team to find the 3rd party apis needed in order to integrate with our application to make sure we can build it as we envisioned. 

The process of finding working apis for events was very difficult. Curtis provided this link https://www.programmableweb.com/ which helped in searches but we eventually got the seatgeek api working to show us concert, broadway, comedy, and sporting event info. We were able to get a government national parks api working. 

I was able to find a trailforks api which looks like it has all the data we need for everything trails related. I reached out to the team to get access to the api, fingers crossed over the weekend they respond, because I was unable to find any other alternatives . 

## May 31st, 2022

Today I worked to apply the feedback from curtis to better understand how to model our data. Specifically more on the preferences model and understanding the many to many relationship it will have with the users model. Also since we are not going to be saving any weather or location data I took ou those markdown models. The only models for the outside data we will need are the events and parks specifically for now, unless the trailforks team responds with their api. We need these models specifically in order for the user to save any events/activities they come across to their profile. # which reminds me the user may need a many to many relationship to the events/parks/activities models. 

After that I took the time to create an account project directory and app to house the models needed for the user and their preferences. Will be continuing on building out hose models tomorrow. 