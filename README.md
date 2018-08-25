# Fork It

Fork It is a social mobile app designed to "gamify" the planning process for fun activities, such as going out to eat, seeing a concert, etc. The app was first created at a hackathon as a simple decision maker where users could enter certain parameters (type of cuisine, priciness, etc.) to find restaurants nearby (think of this as "singleplayer"). After the hackathon, my team was excited about the idea, so we continued to work on the app for a few months and added a "multiplayer" mode, which was designed to streamline the entire planning process for various activities with friends. We first focused on creating the "Eats" feature for going out to eat with friends and presented this prototype at a Demo Day for the SF community.

# How It Works

Singleplayer mode asks 5 simple question and intelligently narrows the user's final decision to three choices. Each of the options has details on the restaurant as well the option to map, Uber, or Lyft to the destination immediately. Multiplayer mode allows the planning user to create an event based on information inputs, invite friends and allow the group to decide on the activity specifics through a trivia game. Future features of the project will include discovery tools for nightlife, arts/culture, and live events. Below, we will go through typical user flow for Multiplayer mode!

# Step 1: Sign Up & Login

Users are able to easily register via facebook or email. Their data is stored as future plans exist to retain user preferences, favorite locations/events, as well as friends.

<img width=450 src="/assets/screens/login-iphone.png"/>

# Step 2: Discover Home

Here the user is able to pick which activity they'd like to engage in by swiping the screen. Currently there are five options (Eat, Experience, Explore, Play, Party). The My Events button will show you your upcoming events. The Multiplayer button will allow you to create a new plan with friends, while the Singleplayer button will allow you to find something to do.

<div style="display: flex; flex-direction: row;">
  <img width=175 src="/assets/screens/Eat-iphone.png"/>
  <img width=175 style="margin-left: 8;" src="/assets/screens/Experience-iphone.png"/>
  <img width=175 style="margin-left: 8;" src="/assets/screens/Explore-iphone.png"/>
  <img width=175 style="margin-left: 8;" src="/assets/screens/Play-iphone.png"/>
  <img width=175 style="margin-left: 8;" src="/assets/screens/Party-iphone.png"/>
</div>

# Step 3: Start a Multiplayer Game in Eats

The user can start a game with friends by inputting information on the type of event they'd like (title, date, meal, location and cuisine). Once the user inputs that information, they can add friends and create a game to decide specifics. After creating the game, the planning user will be sent back to the event status page in order to play the game themselves. The user can also check for other events by hitting the My Events button on the previous page. For now, let's continue with playing the game.

<div style="display: flex; flex-direction: row;">
  <img width=200 src="/assets/screens/Facts-iphone.png"/>
  <img width=200 style="margin-left: 10;" src="/assets/screens/Friends-iphone.png"/>
  <img width=200 style="margin-left: 10;" src="/assets/screens/Status1-iphone.png"/>
  <img width=200 style="margin-left: 10;" src="/assets/screens/MyEvents-iphone.png"/>
</div>

# Step 4: Playing the Game

The game for Eats mode includes three questions based on price, cuisine and date. While playing the game, the user is "on the clock". If the user cannot make a decision, we added a button feature called "Take a Gamble" where the app can choose randomly. After playing the game, the user is taken back to the event status page, which now shows that the user has already played the game.

<div style="display: flex; flex-direction: row;">
  <img width=200 src="/assets/screens/Price-iphone.png"/>
  <img width=200 style="margin-left: 10;" src="/assets/screens/Cuisine-iphone.png"/>
  <img width=200 style="margin-left: 10;" src="/assets/screens/Date-iphone.png"/>
  <img width=200 style="margin-left: 10;" src="/assets/screens/Status2-iphone.png"/>
</div>

# Step 5: Receiving a Result

Once all invited users play the game, our server would use the highest voted preferences and send an API call through Yelp to determine the restaurant. Each user would receive a notification of the result and be able to call the restaurant, check Yelp reviews, reserve a table on Opentable and get there by calling an Uber / Lyft from the user's current location to the restaurant location. Many of these features would be built and improved in subsequent versions.

<div style="display: flex; flex-direction: row;">
  <img width=200 src="/assets/screens/Selected-iphone.png"/>
  <img width=200 style="margin-left: 10;" src="/assets/screens/Rest1-iphone.png"/>
  <img width=200 style="margin-left: 10;" src="/assets/screens/Rest2-iphone.png"/>
</div>
