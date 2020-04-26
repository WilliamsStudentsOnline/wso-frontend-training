# Create your own personal website (React)

This week, we'll be trying to create our own page on github. While it can serve also as some online presence/ online resume, it is also important for front-end developers to display some of our projects online so that people can look at them and for you to have something to be proud of :)

Suggested Time: 1 week

## Pre-requisites
* Should have done the Personal Website (HTML/CSS) project 

## Table of Contents

1. [Requirements](#requirements)
2. [Setting Up](#setting-up)
3. [Helpful Tips](#helpful-tips)
4. [Further Extensions](#further-extensions)


## Requirements: 

1. Must be responsive to mobile (e.g. Resizing the browser window up to a minimum width of 480px should still allow for all content to be seen)
2. Must use at least one of the following libraries:
    * Bulma (https://bulma.io/)
    * Material Design (https://material-ui.com/)
    * Elastic UI (https://github.com/elastic/eui)
    * Fomatic UI (https://fomantic-ui.com/)
    * Any other library you find

Challenge: Create a different branch and format everything using just pure CSS. 

## Setting Up:

**Initializing the repository and files**
1. Create a new GitHub repository `<github-username>.github.io`. Skip initializing the repository.
2. Share the repository with your front-end team lead.
3. Open to your local development folder and run the following commands:
```bash
$ npx create-react-app personal-website
$ cd personal-website
$ git remote add origin https://github.com/<gh-username>/<github-username>.github.io.git
$ git add .
$ git commit -m "Initial commit"
$ git push
```

**Add gh-pages package**

`gh-pages` builds your website from the React source code, and publishes them onto the `master` branch.

4. Add gh-pages either via `yarn add gh-pages -D` or `npm install gh-pages --save-dev`.
5. Go to `package.json`, add a homepage to your `package.json` like this:
```json
 "homepage": "https://<github-username>.github.io/"
 ```
6. Add the following under scripts of package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build -b master”
```

**Changing the default branch**

For personal websites (i.e `<github-username>.github.io`), the website files have to be on the `master` branch. We therefore should create a new branch to store our source code.

7. Manually create a new branch on Github called `source`.
8. Run the following commands:
```bash
$ git pull
$ git checkout source
```
9. Your local environment should now be in the `source` branch. To verify, 
```
$ git status
On branch source
Your branch is up to date with 'origin/source'.

nothing to commit, working tree clean
```
10. Open your respository on GitHub, and navigate to settings.
11. On the left-side panel, click "branches"
12. Set the default branch to `source`.

**Development!**

At this point, you should be all set to develop!

13. Type `yarn start` and begin to develop your website in React! Refer to the [crash course document](react-crash-course.md) for some guidance.

**Deployment**

14. `$ npm run deploy` or `$ yarn deploy`
15. You should now be able to view your website at `https://<github-username>.github.io/`

## Helpful Tips:
* Set up Prettier (https://prettier.io/) or ESLint (https://eslint.org/) if you haven’t already - these help to catch certain errors and make formatting a lot easier.
* Ensure Responsive Design:
    * Remember to avoid using absolute numbers for most widths/heights where possible.
    * Look into CSS grid/ flexbox for help with responsive design.
    * Consider using em/rem for font sizes, although they may not be necessary most of the time.
* Note that React is typically used for Single-Page Applications (SPA), and while there are methods to get them to act as multi-page websites (typically by using a Router, although for personal blogs we personally recommend using Gatsby instead)
* Know how to use your Developer Tools!

## Further Extensions

Recreate your personal website with Gatsby (gatsbyjs.org/)! Gatsby offers Search Engine Optimization, routing, and image optimization, which can improve the performance of your website.

