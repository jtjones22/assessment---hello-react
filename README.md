# Assessment: Hello React

For this assessment, extend the basic scaffold generated by
`create-react-app` with a few trivial features. In doing so, you'll be
demonstrating a basic understanding of the following:

- Kick-starting a React app using `create-react-app`
- Using [props](https://reactjs.org/docs/components-and-props.html) to pass
  immutable state to a component
- Combining components together to make more complex components

## Getting Started
_fork_ this repository into your own GitHub account then clone
this repository to your local machine:

```console
git clone git@gitlab.com:kenzie-academy/se/fe/react/assessment---hello-react.git 
```

You'll undoubtedly notice that the only thing in this repository is this
`README.md` file. In addition
to getting you some extra practice `forking` from existing code rather than
initializing new git repositories, we wanted to get you comfortable with
relying on gathering necessary information from project `README.md` files, as
it's common practice in the development world, especially as far as [open
source](https://opensource.com/resources/what-open-source) projects are
concerned.

## Acceptance Criteria
_Note: Please see the rubric on Canvas for detailed break down on how this
assessment is being graded. The information below is provided for your
convenience._

### Step 1: Basic React Scaffold

All that is required to get these
points is to initialize a react application in your new repository. The tricky
part is that we want the root of the new React project to be the root of _this_
repository. That is, the resulting directory structure should __not__ look like this:

    .
    ├── README.md
    └── hello-react
        ├── README.md
        ├── node_modules
        ├── package.json
        ├── package-lock.json
        ├── public
        └── src

And instead, should look like this:

    .
    ├── README.md
    ├── README.old.md
    ├── node_modules
    ├── package.json
    ├── package-lock.json
    ├── public
    └── src

Note the flatter structure of the expected result. You can accomplish that by
invoking `create-react-app` as follows:

```console
foo@bar:~/hello-react $ create-react-app .
```

Note that this `README.md` file will be renamed `README.old.md`, as
`create-react-app` generates its own `README.md` file, which is a
`create-react-app` user guide. We encourage you to take a look at it in your
free time, as it's jam-packed with all kinds of useful information

If your submission does not follow the above structure, but nevertheless
functions, you'll receive partial credit. Not paying attention to detail will
cost you ;-)!

### Step 2: Create a `Text` Component

For this step, you will be defining a `Text` component just above the
`App` component in  `App.js`. We typically like to define components in separate
files and
[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
them for use in more complex components. However, doing so would require an
understanding of [ES6
modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), which is out
of scope for this particular assessment.


This component will have the following props:

- `color`: A string representing the color of text that appears in the
    component. Any valid [css color](https://www.w3schools.com/cssref/css_colors.asp)
    should be accepted as a valid string
- `value`: This is the actual text to display. We'll learn later how to
    use the
    [children](https://reactjs.org/docs/composition-vs-inheritance.html)
    prop to make this component more pleasant to use, but this will do
    for now.

Using the component should look something like this:
```jsx
    <h1>Hello, <Text color="green" value="Kenzie" /></h1>
```

And produce a result similar to what you'd get if you used the following HTML:

```html
<h1>Hello, <span style="color: green">Kenzie</span></h1>
```


### Step 3: Use your `Text` Component in the `App` Component

All that remains after having defined your new component is to _use_ it.
`App.js` should end up looking something like this:

```jsx
import React, { Component } from 'react';

// ... more imports here

class Text extends Component {

    // ... component implementation here
}

class App extends Component {
    render() {
        return (
            // ... add at least one instance of `<Text ... />` here
        );
    }
}

export default App;
```

Feel free to take liberties with whatever else appears in your application, but
you must use the new `Text` component once and:

- Change the color to something _other_ than green
- Replace the value with _your_ name

Other than that, go wild!

## Bonus

- Using classes here is redundant, since these components are stateless. 
  Try to implement both `Text` and `App` as
  [functional components](https://reactjs.org/docs/components-and-props.html)
- Using `value` for the `<Text>` component was
  unidiomatic. See if you can understand the `children` prop and make
  your usage of the `Text` component look like this instead: 
    `<Text color="green">Kenzie</Text>`
- See if you can work out how to create a separate
  `Text.jsx`[1] file and use import it for use inside of `App.js`.

## Submission
`create-react-app` includes instructions for publishing a React application on
GitHub Pages. However, for _this_ assessment, it's sufficient to submit the
`git` URL for your repository. Again, we do __not__ expect to see a GitHub Pages
link for _this_ assessment. In the future, we'll demonstrate how to do so and
update expecations accordingly, in _future_ projets.

#### Footnotes
[1] You can also name it `Text.js`. The benefit of giving
components a `.jsx` extension is that it signals to other developers
that what lies within is a react component with JSX syntax. Also, some text editors will provide better syntax highlighting with the `.jsx` extension.
