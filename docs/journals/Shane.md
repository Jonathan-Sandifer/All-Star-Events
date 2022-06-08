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

## June 3nd, 2022
Got the admin page set up and linked for the account microservice and was able to populate the databases with user and preference info. Left that the way it is for now though until the Curtis lecture on authorization and user login because I am assuming I will need to make some changes. Since we are pretty much unable to work on the backend until I get that running I focused on more css work and styling for the log in and sign up pages. CSS and design work is definilty not my strong suit but after a lot of tinkering around with it, I was finally able to get both pages styled to a respectable point. The alignment of the forms and buttons took a while to figure out for sure but through a lotttt of trial and error I think its good enough for now and ready to start integrating it with data and setting up the user api.  

## June 6th, 2022
A very large majority of the day today was spent figuring out the authentication issues we were having after Curtis helped us implement it. After a while Kieran and I through some help figured out that our compose file never had our accounts db set up as well as not deleting sql lite from all our services. After we figured that out I was able to mess around creating a few dummy users to confirm it working. I then worked with Kieran to get the show preferences api up and running. After I took a look a the stub hun api to see all the information we are getting. Now I have to figure out how to model that data specifically based off some of those inputs and what we want to keep. 

## June 7th, 2022
Spent a large portion of the day trying to figure out how to best model the events database to handle the information for the bookmarked events we are allowing people to save on their profiles. Thought I would have to make a VO in the accounts models and have some sort of poller but Curtis showed us that wasnt needed. So I was able to get it set up with the attributes we need in relation to the seatgeek api key and the data it provides. Just to update after a week. I am really struggling to understand where to go and what to do next. I have asked to pair up with some of my teammates to follow and try and pair program, but i dont think anyone is comfortable enough to try, which is understandable,so Im starting to be concerned about what I can actually do to help the group since im not really sure what to do next. 

## June 8th, 2022
Still really struggling on where to go/what to do, I havent been able to get into a rythmn at all yet with this project. There is no real direction . I started with going through the parks model and aligning them with the style as events but the same is continuing, I just really have no direction and feel like i am just wasting time with nowhere to go 