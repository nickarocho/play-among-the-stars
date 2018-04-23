# Play Among the Stars
 
![Comparison](https://i.imgur.com/E9H2F8P.jpg)

## Concept

I live in Los Angeles, and my office is located in the heart of the Hollywood Walk of Fame. 

I pass by dozens of these iconic stars every day, but my favorite by far goes to one of my musical idols: Frank Sinatra (who basically ran this city back in the day... and is the only celebrity I know of with not one, but TWO stars to his name. A true legend indeed).

Every time I see this star on my way to work, I can't help but to hear one of his many tunes in my head, so I thought it would be a fun project to express my perspective of this object by bringing it to life and recreating it in the form of good ol' HTML, CSS and JavaScript.

## Getting Started

#### View the Deployed App:

https://nickarocho.github.io/play-among-the-stars/

* Make sure your sound is on!

#### Run the App Locally
To run the app locally, clone this repo using the command line:

`$ git clone https://github.com/nickarocho/play-among-the-stars`

Open the `index.html` file using Google Chrome or Firefox.

(still working on cross-browser compatibility)

## Technologies Used

* HTML
* CSS
* JavaScript

## Next Steps

I only had three hours to build this (which is cruel, because I was having a blast working on this and just want to keep going by adding more features and perfecting the rendering), so needeless to say, there are some definite improvements that can be made in the form of: more features, bug fixes, performance and responsiveness.

### Here's what I would do next:
* _**Add more tracks**_
  * I originally wanted to be able to click on a certain letter of his name which would respectively play a tune that starts with that letter (i.e. 'S' would trigger 'Summerwind')
  * Add two more controls that would play the next or previous tune
  * It would be really cool to animate a new vinyl going on the player for a new track, or the arm moving to a different point like a real record player
* _**Make it look better on mobile devices**_
  * While I did my best to make this app responsive by using viewport units and percentages wherever possible in the CSS, it isn't quite perfect on super small screens
* _**Refine the styles to perfectly match the original photo**_
  * Add the coarse, grainy sparkle texture to the ground and the terrazo/brass texture to the star
    * I initially gave this a shot, but it took away from my alotted time, so I through that feature in the icebox and went with a flat look instead
  * Add the lines which frame the star
    * CSS Grid would be perfect for this
  * Fix the spacing of the vinyl record (the original has some wider spacing in between the vinyl itself and the border surrounding it)
  * Add the little circle that represents the record player's needle
    * It probably just needs another tiny `<div class="circle">` attached to the arm, but I ran out of time.
  * Fix the colors of the vinyl record
    * I started with a flat color (as is in the photo), but needed to add a gradient to show it spinning.
    * There is a subtle, grainy shadow on the border of the vinyl which I would love to recreate but ran out of time
* _**Fix the bugs**_
  * A couple bugs in here are driving me crazy:
    * In Chrome, the record player's arm's border gets all wacky during an animation event
    * I think maybe the `position: absolute` of the star itself or some other funky bug is causing the body to not display at `100vh`, even when it is set to that value.
    * The circles get oddly skewed as the animation begins. I have a feeling this is due to me setting the width/height dynamically depending on the viewport size, so in retrospect it probably would have been better to go with SVG's instead of pure CSS.
* _**Simplify the CSS**_
  * While I feel I was as concise as possible while styling this, especially with utility classes for the many divs using `.flex-center {display: flex; align-content: center; justify-content: center}` and the `.circle: {border-radius: 50%}`, there are definitely ways I could use pseudo-classes and better nesting in the HTML to dry up / simplify the CSS
* _**Simplify the JavaScript**_
  * I stuck with the methods I use the most for events and interactivity, but there are surely other more elegant ES6 features I could utilize to simplify the functions, which would in turn boost the performance
  * I chose to go with the `setTimeout` route for the animation/play sequence, but it would be cleaner and easier to alter timing with specific event listeners base on DOM Events like `transitionend` or `play` or `ended`, etc.
* _**Add more interactivity**_
  * I would love to show the lyrics of the track beneath the star while the audio plays.
  * Maybe add a button that displays a modal pop up with Frank's bio.
  * Create some more natural animations
    * It would be really cool to link the animations to the soundwaves of the audio track itself.
* _**Expand the app to show more stars**_
  * I definitely had to reel myself in when I started thinking of what this _could_ be. How cool would it be to basically recreate the entire Walk of Fame, so a user could click a "Forward" or "Back" button, which brings them to the actual next star on the street, then click play and if the star belongs to a:
    * **Musician** like Frank, animate the record player but play a track of the respective musician
    * **Film or TV** star, have the projector play a famous clip of theirs
    * **Radio** star, animate the microphone as a well-known voice-over sample plays
* _**Create an augmented reality app**_
  * Pretty out there, I know, but how awesome would it be to be able to hold your phone over a star, and it animates the star right in front of your eyes? A guy can dream, can't he?!

## Thank you!

Thanks for taking the time to check out my project. Please let me know if you have any suggestions as to how I can make this better in any way!
