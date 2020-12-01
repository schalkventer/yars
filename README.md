<!-- omit in toc -->
# 🏰 Yet Another React Structure _(YARS)_

*⭐️ If you find this useful please star it on [Github](https://github.com/schalkventer/yars) ⭐️*

_Note that this is still a work in progress, so some sections are incomplete_

![](docs/assets/image.png)

<!-- omit in toc -->
## Introduction

**The year is 2021.**

**Granted it's already a strange time just to be human**

Furthermore, it is increasing becoming a stranger time to be front-end developer too. Not only are there exhaustive lists of competing, and often conflicting, ways to structure front-end projects. As you're reading this, the daily Twitter-wars burn ever bright. These range from the degree to which one should rely on JavaScript; to whether the CSS language itself is an sufficient mechanism to style our interfaces.

Unfortunately, things don't get much better upon narrowing our scope to specific toolchains and/or technologies. Granted, there are degrees to which specific tools lend themselves to disagreement amongst their various communities. However as the universe would have it, my preferred tool-chain: the [React](https://reactjs.org/) ecosystem is one of the bigger offenders.

Don't get me wrong. This is one of the beauties of React (compared to a lot of competitors): that it gives you a non-opinionated toolbelt of primitives that you can co-configure in whatever manner you see fit. It's worthwhile to acknowledge that this philosophy is baked into the [design of React's itself]((https://reactjs.org/docs/design-principles.html)). Which subsequently means that one of the primary pain-points (in true open-source fashion) is that there is rarely any clear consensus on how to employ these tools.

**So where does this leave us?**

If we were to look to [Medium.com](https://medium.com/search?q=react%20project%20structure) or [Dev.to](https://dev.to/search?q=react%20project%20structure) it probably entails selecting from a neverending array of "silver-bullet", one-size-fits-all, right™ ways to structure React projects. Some two well known ones are [Fractal](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) and [Atomic React](https://arc.js.org/), and for what it's worth, I am by no means discounting them - they wouldn't exist if they didn't resonate with a large slice of the React community.

However, for me personally, I tend to subscribe to [Dan Abramov's approach](https://react-file-structure.surge.sh/) of just _"[moving] files around until it feels right"_. Which, admittedly, advocates nothing short of a [Kierkegaardien](https://en.wikipedia.org/wiki/S%C3%B8ren_Kierkegaard) approach in which all of us must figure out our own project structure "[with fear and trembling](https://en.wikipedia.org/wiki/Fear_and_Trembling)" (all while pushing production code and meeting sprint deadlines) .

**Which explains the tongue-in-cheek name of this repository.**

Reader beware: My intent here it is not to provide a paint-by-numbers formula to structure React projects, but rather to document my own thought process and reasoning that lead to the current conventions I'm using. My hope is that this might provide other React developers a reference by which to figure out their own approach and structure.

<!-- omit in toc -->
## Table of Contents

- [Guiding Principles](#guiding-principles)
  - [Assumed Complexity](#assumed-complexity)
  - [JAMstack](#jamstack)
  - [Contributor Friendly](#contributor-friendly)
  - [Decoupled API and UI Logic](#decoupled-api-and-ui-logic)
  - [Avoiding over-abstraction](#avoiding-over-abstraction)



## Guiding Principles

### Assumed Complexity

**This approach assumes a certain level of complexity inherent in the codebase/project that it is being applied to.**

If you are building a traditional website (or basic one-man webapp) then this structure is probably overkill, and might cause more trouble than it's worth. My personal rule of thumb is that if the project's complexity justifies adding dedicated documentation then it is probably sufficiently complex.

### JAMstack

...

### Contributor Friendly

**This structure assumes that you will not being the only person contributing and/or maintaining this codebase (either at this current moment or in the foreseeable future)**.

This means two things:
- All code should be exhaustively documented (rather err on the side of over-documentation than under-documentation)
- Code should be structured in such a way that you are able to make changes to a specific section without requiring an understanding of the entire architecture/codebase.

### Decoupled API and UI Logic

The above means that the structure is split into to broad layers of concern:

### Avoiding over-abstraction

This approach lears heavily on [Sandi Metz](https://www.sandimetz.com/)'s thinking on abstraction in programming, [going all the way back to 2016](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction). In short:

> **Duplication is far cheaper than the wrong abstraction.**

This means that it is assumed that all new functionality will start out as embedded files inside view/api folders, and that we should hold-off on creating re-usable components/utilities until it becomes clear that they are re-used. Generally [the rule of three principle](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)) (i.e. duplicated three times) is a good rule of thumb here.

**This might seem counter intuitive at first (in the same way that something like [BEM](https://en.bem.info/) might seem counter intuitive at first too). However this approach is built on the belief that over and early-abstraction is the root of a lot of [spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code) in front-end complex projects.**

With the above in mind we should start out project with a view, for example: `src/views/Homepage/Homepage/Homepage.tsx`. At some point we will inevitable create something like a button, so instead of immediately creating a `src/components/Button` we should rather create `src/views/Homepage/Homepage/Homepage/Homepage.Button.tsx`.