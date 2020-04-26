# React Crash Course (Part 1)

This document is meant as a quick and dirty introduction to the React knowledge that you need for this project.

If you have any suggestions for this document, please feel free to let us know.

## Table of Contents

1. [Introduction to React](#introduction-to-react)
1. [Getting Started](#getting-started)
1. [JSX vs HTML and Javascript](#jsx-vs-html-and-javascript)
1. [Creating New Components](#creating-new-components)
1. [Other Words](#other-words)

## Introduction to React

React is a Javascript library that allows us to develop reactive Single-Page Applications (SPAs) with relative ease. Notably, React introduces a syntax called JSX, or Javascript XML, that strongly resembles a combination of HTML and Javascript, and will appear familiar to you. Programming in React is driven by a few principles:

* Component-Based: React components are reusable and can receive variables to adapt to the context they are used.
* Stateful: Components are capable of keeping track of internal state.  

Don't worry if the above doesn't make sense at the moment. As you go along, you'll start to be more acquainted with React programming. 

## Getting Started

If you had followed the README for this project, you should have initialized a repo with `npx create-react-app`. 

First, let us start by opening up the project folder in your editor of choice and navigate to `src/App.js`, which should look like the following: 

```jsx
// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

This file can be thought of as the entry point to our project. Going through this line by line,

```jsx
import React from 'react';
```

This line is used to import a javascript variable (i.e. React) from a package (i.e the `'react'` package), which allows us to use React and everything associated with it. If you have programming experience with Python, C, or Java, this should be familiar!

```jsx
import logo from './logo.svg';
import './App.css';
```

This code block shows how we can import assets into our files to be used. Note the difference in syntax between importing an image asset versus a CSS file.

```jsx
function App() {
  return (
    <div className="App">
      ...
    </div>
  );
}
```

The first line of this code block is Javascript's syntax for declaring a function. Recall that a javascript function can be declared in three ways: 

```javascript
function inc1(x) {
    return x + 1;
}

const inc2 = (x) => {
    return x + 1;
}

const inc3 = (x) => x + 1;
```

The last line in `App.js`,
```jsx
export default App
```
allows for what we have declared above to be exported, and subsequently imported in `index.js`, and React will do the necessary steps to convert that into a webpage.

## JSX vs HTML and Javascript

```jsx
// App.js
<div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React
    </a>
    </header>
</div>
```

In the above code block we see an example of JSX. On first glance it looks like HTML, with a few main differences:

1. Instead of using the variable `class`, we use `className`.
1. Javascript can be passed into it via curly braces. For example, `<span>{1+1}</span>` will give display 2.

## Creating New Components

We can create new JSX components to be used in other JSX components, effectively allowing us to modularize our designs and minimize repetition of code. For example, we might want to create such a component to display our projects.

```jsx
// src/ProjectItem.js
import React from 'react';
import './ProjectItem.css';

// Equivalent to:
// function ProjectItem({title, description}) {
const ProjectItem = ({title, description}) => { 
    return (
        <div className="project-item">
            <span className="project-title">
                {title}
            </span>
            <p className="project-description">
                {description}
            </p>
        </div>
    );
}

export default ProjectItem;
```

which can then be used in `App.js` like such:

```jsx
// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
+ import ProjectItem from './ProjectItem';

function App() {
  return (
    //...
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
+       <ProjectItem title="Underwater basket weaving" description="Tremendous baskets." />
+       <ProjectItem title="CSCI 326" description="XCode." />
    //...
  );
}

export default App;
```

The '+'s are there to indicate the lines that have been added - you shouldn't have them in your code.

Let's unpack this a little. In `src/ProjectItem.js` we created a `ProjectItem` component, which is imported in `src/App.js` and subsequently used. To pass variables (commonly known as properties, or `props` for short), we indicate the key of the prop, followed by the variable. Note that we can pass strings as strings themselves, but if we wanted to pass other javascript variables, we should pass them in curly braces, like so:

```jsx
<ProjectItem title="Underwater basket weaving" description="Tremendous baskets." number={1}/>
```

Components should be CamelCased, and should come with their own CSS files. Note that in Javascript, when importing a default export, the import name does not have to be the same. We could have imported `ProjectItem` in `src/App.js` like such:
```jsx
import ProjectBlob from './ProjectItem';
```


## Other Words

React files can be named with the extension `.jsx` instead of `.js`. This is our preference, since it allows us to easily know which files have React components, and while files are just pure Javascript.