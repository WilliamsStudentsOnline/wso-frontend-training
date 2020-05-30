# Redux

Consider the following simplified To-do list written in React:

```jsx
const TodoList = () => {
    const [todos, updateTodos] = useState([]);
    const [newTodo, updateNewTodo] = useState('');

    ...

    return (
        ...
        <div className="todo-container">
            {todos.map(todo => renderTodo(todo))}
        </div>
        <span>New Todo:</span>
        <input
            id="new-todo"
            type="text"
            value={newTodo}
            onChange={(e) => updateNewTodo(e.target.value)}/>
        <button type="button" onClick={addTodo}>Add Todo</button>
        ...
    );
}
```

If you are not familiar with the syntax above, `const [todos, updateTodos] = useState([]);` says that we wish to define a variable, `todos`, that might be changed with the function `updateTodos`, initialized with the default value `[]`, that will affect what is rendered. Note that given the values of the variables `todos` and `newTodo`, we are able to determine exactly what is rendered on screen, which is what makes **state** a very important concept in React.

Again, for emphasis:

1. React uses the current state of the component to determine what is displayed
1. Users do not directly modify what is being displayed. Instead, users always modify the state, which causes React magic to be triggered and the state to be updated.

Now, the way this is done is perfectly fine for small projects, but consider what might happen if we want to scale our project up? We might end up with a case where two very distant components might affect each other with their state updates. For example, in a calendar application, you might want to allow your user to decide if they want to see times displayed in 24-hour format or 12-hour format, which will then affect your calendar time intervals, as well as the how the events in them are displayed.

```jsx
const Calendar = () => {
    // Determines whether to display time in 23:48 or 11:48 PM
    const [useTweleveHour, setTimeFormat] = useState(true);
    const [events, updateEvents] = useState([]);

    ...

    return (
        ...
        <CalendarLayout twelveHour={twelveHour}>
            {events.map((e) => <CalendarEvent
                                    key={e.id}
                                    twelveHour={twelveHour}
                                    event={e} />)}
        </CalendarLayout>
        <div className="calendar-controls">
            <CalendarControls
                twelveHour={useTwelveHour}
                setTimeFormat={setTimeFormat}
                />
        </div>
        ...
    );
}
```

The code above is highly simplified, but I hope that you can appreciate the complexity that comes in in having to pass in the state and the function to update it to descendents, who might in turn pass it to their children.

How do we solve this issue?

## Iteration 1: Global State Object

One approach to doing this will simply be initializing a global state object that is accessible by only the necessary components. In Redux terms, this is known as a store. When using Redux, we initialize this store when our application starts and provide this store by for example simply importing a store, and directly access or modify the object.

An example for how this might look is as follows:

```jsx
import store from './store'

const CalendarLayout = () => {
    const tweleveHour = store.twelveHour;
    ...
}
```

Note that the above code will not work properly with React! However, thinking in this direction, we see that it simplifies the code, since we do not have to pass in `twelveHour` from `Calendar` to `CalendarLayout` any more! Thinking naively, we might be able to mutate the store object simply by directly accessing and modifying the code.

At this stage, the interaction looks roughly like this

```
Store <-> Component
```

## Iteration 2: Selectors and Reducers

Unfortunately, the code shown in the previous iteration will not work. This is because React wouldn't know how to update. React notices that a mutation has to be performed if the props that is passed in has changed, and if we are directly modifying the object, it will not change the object address that is passed into React.

Enter Reducers. Reducers are functions modify the store, returning a new store object, and therefore allowing React to detect the change. Reducers also allow for convenience, since the update function might do more than simply assigning a variable. For example, a JWT (JSON Web Token) used for authentication might contain information about the user, and the expiry date of the token. It might be helpful to parse and store this information given the token so that other components can simply get the user information without having to re-parse the token each time.

Likewise, we can define Selector functions for convenience to return us the information we want without having to traverse the full store.

The interaction now looks like:

```
Store -> Selector -> Component -> Reducer -> Store
```

As you might note, the data flow is now one directional. This might seem like a trivial change, but it allows us to test our code in a much simpler manner. Since we are employing functions to modify the store and retrieve information, it becomes a lot easier to craft unit tests to see if the changes were indeed as planned. To listen to someone more qualified talk about unidirectional data flow, see this [article](https://medium.com/swlh/the-case-for-flux-379b7d1982c6) by Dan Abramov, Co-author of Redux and Create-React-App.

## Iteration 3: Actions

What we already have above is sufficient for our iteration of a state management tool, but Redux does all the heavy lifting to make it all work under the hood. The final missing piece of this equation is Actions, which in essence wrap the data we pass to our reducers. For example, to add a to-do item, we might pass in an action that looks like:

```jsx
{
    type: "ADD_TODO",
    item: "Buy milk."
}
```

Actions allow for easier debugging, and there are methods of having Redux log each action, as well as the previous and new states of the store for us to analyze.

The final interaction now looks like:

```
Store -> Selector -> Component -> Action -> Reducer -> Store
```

## Final thoughts

Presented above is a simplified overview of how the Redux data flow can work, although there are multiple other ways for this to be extended, such as via middleware that can intercept your store before and after it undergoes the change. To learn more about Redux, check out the [learning resources](https://redux.js.org/introduction/learning-resources) posted on the official webpage!
