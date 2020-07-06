<!-- omit in toc -->
# 🏰 Yet Another React Structure _(YARS)_

![](docs/assets/image.png)

<!-- omit in toc -->
## Introduction

**The year is 2020.**

**Granted it's already a strange time just to be human (judging by the current state of affairs).**

Furthermore, it is increasing becoming a stranger time to be front-end developer too. Not only are there exhaustive lists of competing, and often conflicting, ways to structure front-end projects. As you're reading this, the daily Twitter-wars burn ever bright. These range from the degree to which one should rely on JavaScript; to whether the CSS language itself is an sufficient mechanism to style our interfaces.

Unfortunately, things don't get much better upon narrowing our scope to specific toolchains and/or technologies. Granted, there are degrees to which specific tools lend themselves to disagreement amongst their various communities. However as the universe would have it, my preferred tool-chain: the [React](https://reactjs.org/) ecosystem is one of the bigger offenders.

Don't get me wrong. This is one of the beauties of React (compared to a lot of competitors): that it gives you a non-opinionated toolbelt of primitives that you can co-configure in whatever manner you see fit. It's worthwhile to acknowledge that this philosophy is baked into the [design of React's itself]((https://reactjs.org/docs/design-principles.html)). Which subsequently means that one of the primary pain-points (in true open-source fashion) is that there is rarely any clear consensus on how to employ these tools.

**So where does this leave us?**

If we were to look to [Medium.com](https://medium.com/search?q=react%20project%20structure) or [Dev.to](https://dev.to/search?q=react%20project%20structure) it probably entails selecting from a neverending array of "silver-bullet", one-size-fits-all, true™ ways of structuring React projects. Some of these has pretty clever names like [Fractal](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) or [Atomic React](https://arc.js.org/), and for what it's worth, I am by no means discounting this approach - they wouldn't exist if they didn't resonate with a large slice of the React community.

If it works well for you, then more power to you!

However, for me personally, I tend to subscribe to [Dan Abramov's approach](https://react-file-structure.surge.sh/) of just _"[moving] files around until it feels right"_. Which, admittedly, advocates nothing short of a [Kierkegaardien](https://en.wikipedia.org/wiki/S%C3%B8ren_Kierkegaard) approach in which all of us must figure out our own project structure (while pushing production code) "with fear and trembling".

**If you are looking for a paint-by-numbers formula to structure your React projects then the above examples are probably more aligned to your needs. The intent behind this collection of conventions is that you following the thought process that lead me to them, as a means to help you find the structure that works best for you, your team and your project's needs**.

<!-- omit in toc -->
## Table of Contents

- [Guiding Principles](#guiding-principles)
  - [🟢 Assumed Complexity](#🟢-assumed-complexity)
  - [🔵 Contributor Friendly](#🔵-contributor-friendly)
  - [🟣 Decoupled UI and App Logic](#🟣-decoupled-ui-and-app-logic)
  - [🟤 API Driven Development](#🟤-api-driven-development)
  - [🔴 Avoiding over-abstraction](#🔴-avoiding-over-abstraction)
- [Structures](#structures)
  - [React Components](#react-components)
    - [⚙️ Element Components](#️-element-components)
    - [👽 Custom Components](#-custom-components)
    - [📺 View Components](#-view-components)
    - [🔌 Connector Components](#-connector-components)
  - [JavaScript modules](#javascript-modules)
    - [🎨 Tokens](#-tokens)
    - [📡 Data](#-data)
    - [🔨 Helpers](#-helpers)
    - [🧲 Hooks](#-hooks)
  - [Testing](#testing)
    - [💼 Fixtures](#-fixtures)
    - [👻 Mocks](#-mocks)
    - [⚛️ React Components](#️-react-components)
    - [⚡️ JavaScript modules](#️-javascript-modules)
  - [Other Structures](#other-structures)
    - [📚 Documentation](#-documentation)
    - [🚚 Assets](#-assets)
- [Technologies](#technologies)



## Guiding Principles

### 🟢 Assumed Complexity

**This structure assumes a minimum level of complexity inherent in codebase/project that it is being applied to.**

If you are building a traditional website (or basic one-man webapp) then this structure is probably overkill, and might cause more trouble than it's worth.


My personal rule of thumb is that if the project's complexity justifies adding dedicated documentation and/or static typing by means of TypeScript (which is assumed in this structure) then it is probably sufficiently complex.

### 🔵 Contributor Friendly

**This structure assumes that you will not being the only person contributing and/or maintaining this codebase (either at this current moment or in the foreseeable future)**.

This means two things:
- All code should be exhaustively documented (rather err on the side of unneeded or over-documentation)
- Code should be built strictly adhering to the [principle of seperation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)

The later manifests itself in the following manner:

For example: 
- If you are a developer primarily versed in HTML, CSS and DOM-facing JavaScript, and you need to change the way an "add to cart" button works in the UI layer then you should not have to know anything about how items get added to the cart in the core-app logic/database. You should only need to deal with the following (TypeScript documented) callback (passed to the view as a prop): `type onAddToCart = (itemId: string) => Promise<Error | void>`.
- If you are a developer primarily versed in NodeJS or business-logic-facing JavaScript, and you need to change the way items are added to the shopping cart (or related logic) inside the core app logic  you should not need to know how (or where) the above `onAddCart` callback is used inside the UI layer. The only requirement should be that you need to the honour the TypeScript-based API contract insofar that the callback takes the ID of the item and assumes that it was added successfully unless an `Error` is returned (which is handled in the UI).

### 🟣 Decoupled UI and App Logic

The above means that the structure is split into to broad layers of concern:

- `src/ui`
- `src/app`

All files in `ui` folder should only be concerned with the UI state in the browser at a specific time (agnostic of happens inside the core app logic). Whereas all files in the `app` folder shou only be concerned with bootstrapping specific UI views and providing the initial data and decoupled callbacks that can be used to update or retrieve data from the core app logic.

**For example:**

|Name|Description|Technologies/Tools|
|---|---|---|
|**Database**| Structures the data in a manner that makes sense semantically to the domain/industry that it functions in.|MySQL, MongoDB, a headless-CMS, local markdown files, HTML5 web storage, etc.
|**App logic**| Files located in `src/app`. Should run `yarn app` when working on this layer. Fetches and unifies the data retrieved from Database API's in a semantic manner to be passed along to the UI (via React props exposed by the view components). Usually transforms the data and behaviour exposed by endpoints into props (either as initial values or callbacks) that are passed to views. These file themselves should **NEVER** contain any markup, CSS or DOM-facing JavaScript| Gatsby, Redux, RESTful API, GraphQL, HTML web storage API or even node scripts that fetch/pass data from local markdown/JSON files.
|**UI**|Files located in `src/ui`. These are the React components that exclusively handle UI concerns such as output HTML, CSS and DOM-facing JavaScript. These should be developed exclusively against mocked data fixtures located and in the `src/ui` folder itself.|Storybook, Styled Components, Faker, Material UI,

### 🟤 API Driven Development

**Tying into the above, this structure assumes full-on adoption of the [principle of modular programming](https://en.wikipedia.org/wiki/Modular_programming).**

This means that modules (whether pure-JavaScript or React components) are scoped to a folder-level. For example `src/ui/components/elements/Button` would indicate a specific `Button` module, which is only accessible through the folder's internal `index.ts` file.

For example you are allowed to do `import { types, constants, Button } from 'src/ui/components/elements/Button`, but not `import { calcButtonColor } from 'src/ui/components/elements/Button/helpers/Button.color` into other modules.

Furthermore, all files are pre-pended by their associated modules. For example the `Button.color` above for `Button.useClicked.calcClicked`, etc. This makes it easier to see to which module a file belongs in your IDE or when working in Git. 

The only exception is the index.js file that is at the root of all modules. This file declares and returns the API exposed by the module.

### 🔴 Avoiding over-abstraction

This approach learns heavily on [Sandi Metz](https://www.sandimetz.com/)'s thinking on abstraction in programming, [going all the way back to 2016](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction). In short:

> **Duplication is far cheaper than the wrong abstraction.**

This means that it is assumed that all new functionality will start out as embedded files inside view folders, and that it is only when when it meets [the rule of three principle](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)) (i.e. duplicated three times) that is abstracted. 

**This might seem counter intuitive at first (in the same way that something like [BEM](https://en.bem.info/) might seem counter intuitive at first too). However this approach is built on the belief that over and early-abstraction is the root of a lot of [spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code) in front-end complex projects.**

With the above in mind we should start out project with a view, for example: `src/ui/views/Homepage/Homepage.jsx`. At some point we will inevitable create something like a button, so instead of immediately creating a `src/ui/elements/Button` we should rather create `src/views/views/Homepage/components/Homepage.Button.tsx`.

In addition to an `index.ts` file that exports a public module API, each module should also have a `README.md` file (located in the root of the folder) documenting it's use-case and structure.

## Structures

### React Components

Given that this is a React-based project the majority of code in the project will consist of React-specific components. All React component are one of the following 4 examples:

#### ⚙️ Element Components

....

#### 👽 Custom Components

...

#### 📺 View Components

...

#### 🔌 Connector Components

...

---

###  JavaScript modules

#### 🎨 Tokens

...

#### 📡 Data

....

#### 🔨 Helpers

...

#### 🧲 Hooks

...

---

### Testing

#### 💼 Fixtures

....

#### 👻 Mocks

...

#### ⚛️ React Components

...

#### ⚡️ JavaScript modules

...

---

...

### Other Structures

#### 📚 Documentation

...

#### 🚚 Assets

....

## Technologies
