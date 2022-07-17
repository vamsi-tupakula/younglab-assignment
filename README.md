## Steps I followed to Complete this project

- I Created the react app using `yarn create react-app ` command and I modified the boiler plate code which comes with it.
- The Next step I did is to created components folder inside the src folder and also created css folder inside my components folder
- Then I created three components Navbar, MajorCard, MinorCards [Note : I named The big card that appears on the top as MajorCard]
- Then I created corresponding css files to my components - Navbar.css, MajorCard.css and MinorCards.css in my css folder
- Imported all css files into their respective components.
- Figma file really helped me by acting as a style guide for me
- Then I created Navbar Component
- I added axios library which helps me in fetching the API.
- I created two useState variables called `result` and `majorData` in my `App` component
- `result` variable is where we store all the data we fetched and `majorData` is the first element in the `result` array.
- `majorData` will be sent to our MajorCard component as props so we can use the data their.
- Next step I did is to fetch the API given to me using axios, Initially `result` and `majorData` variables are set to `null` we will update them after fetching the API
- Then I started creating MajorCard Component and I sent the `majorData` variable as a prop into the component
- I styled the MajorCard Component using the figma file style guide
- Then I Created mini cards inside my MinorCards Component.
- Their I created another Two useState variables `currentCard` and `prevCard` which helps me to identify the active card and change the active card to normal card.
- When we click on a card then that card becomes the `currentCard` so it will get the styling and previous card becomes the `prevCard` which looses the active styling.
