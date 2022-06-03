## May 27th, 2022

Today I worked on: 
Working with my team to find the 3rd party apis needed in order to integrate with our application to make sure we can build it as we envisioned. 

The process of finding working apis for events was very difficult. Curtis provided this link https://www.programmableweb.com/ which helped in searches but we eventually got the seatgeek api working to show us concert, broadway, comedy, and sporting event info. We were able to get a government national parks api working. 

I was able to find a trailforks api which looks like it has all the data we need for everything trails related. I reached out to the team to get access to the api, fingers crossed over the weekend they respond, because I was unable to find any other alternatives . 

## May 31st, 2022

Today I worked to apply the feedback from curtis to better understand how to model our data. Specifically more on the preferences model and understanding the many to many relationship it will have with the users model. Also since we are not going to be saving any weather or location data I took ou those markdown models. The only models for the outside data we will need are the events and parks specifically for now, unless the trailforks team responds with their api. We need these models specifically in order for the user to save any events/activities they come across to their profile. # which reminds me the user may need a many to many relationship to the events/parks/activities models. 

After that I took the time to create an account project directory and app to house the models needed for the user and their preferences. Will be continuing on building out hose models tomorrow. 

## June 1st, 2022
Today continued to be a real struggle from the start setting up the environments just to be able to put code in has been nightmarish. 

As a group we looked at if we should turn our original plan of microservices to monolith, while the monolith may have been easier and made more sense since we arent storing a ton aof data. We decided to continue with microservices for the practice. 

Thankfully i was finally able to get some code committed. I started on our signin/signup react component. I got it linked to the main app and nav bar and have a very basic form set up for creating an account. Its going to be a challenge to figure out how to get the create account and sign in forms on the same page. so i am going to take the rest of the evening to see if there are any videos out there to give me a better idea of where to continue in the morning. 

## June 2nd, 2022
Oh boi another doozy today git problems everywhere, we have them fixed but still didnt understand why it was happening which is always frustrating. I was able to get the Login and Signup page up and linked to the nav bar so they can each be reached. I probably wasted about 2 hours trying to set it up in a way that I have never done before I researched some react dual sign in/sign up page that looked cool. i was able to get it up with no styling but it felt wrong because I essentially just copied the entire code over and I really want to learn this. So instead i just split them into 2 separate  pages with a form on each. they are up right now but design is definitly not something i enjoy, I like making things work more than making things look pretty. So i have those templates up at least. Now since our databases our working i should be able to make the data models for the users and link them to the admin to start using some dummy data to make sure it works. 