## UI transition

### [Demo](https://code-challenge-0.firebaseapp.com)

**Objective:** Transition between 2 states: Initial and Success using pure JavaScript or the JavaScript framework of your choosing upon click of a button.

**Additional Features:**
* Mobile support
  * Card width is adjustable in styles.scss to a specific % (e.g. 30%)
  * Default value is 320px.
* Simple input validation
  * Reuses card-prompt component to inform user of invalid input
  * Input must be greater than 3 characters
* Animations
  * Submission animation
  * Dismissal animation
* Screen reader friendly
  * Tested with ChromeVox

**Development features:**
* Supports authoring in ES6
* Uses SASS for easy re-use of styling components
* Built with webpack
* jQuery + animate.css for animations 

**Browser support**

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) |![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) |![Edge](https://raw.github.com/alrra/browser-logos/master/edge/edge_48x48.png) |![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) |![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) |![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ |  Latest ✔ | 10+ ✔ | Latest ✔ | 6.1+ ✔ |

### Run
1 - Install dependencies
```
npm install
```
2 - Start local server
```
npm start
```
3 - View application
```
localhost:8080/webpack-dev-server/
```
