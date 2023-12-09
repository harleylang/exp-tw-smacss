# Experiment - Tailwind vs. SMACSS

The purpose of this repository is to compare how Tailwind and SMACSS stack up against the following requirements for a design system:

- 1. **Multibrand theming**: Support multibrand theming.
- 2. **Multibrand tailoring**: Support component modifications for specific brands.
- 3. **Global scalability**: Provide the ability for one style change to affect all uses of that style.

## Local Development Instructions

```
# install modules
yarn

# open local dev server
yarn start
```

## Interpretations

[ ] TODO: Evaluate HTML + CSS builds across both frameworks.

Tailwind: 4.2kb HTML, 5.2kb CSS.

### 1. Multibrand theming

Tailwind

- Theming is configured in JavaScript and takes imports to build only styles required.
  - The built-in treeshaking is nice!
  - How would this work for statically generated or server-side rendered pages?
- Theming is configured in JavaScript -- no cascade.
  - Both a pro and con?

### 2. Multibrand tailoring

Tailwind

- Theme-related config are put into `tailwind.config.js`.
- If there are muiltiple themes, put that config into the `index.css` layer code block.
  - Does this mean that every theme needs it's own `tailwind.config.js` / `index.css` file?
  - E.g., what if one theme / brand does not require specific style components?

### 3. Global scalability

Tailwind

- One change will require updates in many places.
  - If a change to the component is required, every component that is rendered needs to change.
  - In a JS framework or templating system this might be fine. In a larger mixed-rendering system this might be more difficult to orchestrate and will require editing in multiple places.
    - How would this scale for static content that does not require JS?
  - TW docs say to [use multicursor / loops](https://tailwindcss.com/docs/reusing-styles); is that enough to solve repeatability + shipped markup in the HTML file?
  - However if the markup is consistently linked to named classes, deploying new class styles will apply to all components and reduce shipped HTML?
- No BEM / class system.
  - TW docs say [to avoid classes](https://tailwindcss.com/docs/functions-and-directives#using-apply-with-per-component-css) but that seems counterintuitive. Is utility-based style development at the sacrifice of basic css functionality, e.g., the cascade and reusable styles?
  - Why not take the best of both worlds? BEM + utilities?

## Thoughts

- Is Tailwind best for products that are...?

  - A single brand/theme?
  - Small in scale?
  - Entirely JavaScript rendered? (Or query-able somehow, to best make use of tree shaking?)

- Tailwind solves [separation of concern](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/), maybe at the sacrifice of scalability?

- Is this all 6 & 2 thirds? Is there really a benefit choosing Tailwind, SCSS, etc. over other solutions, so long as the selected solution is consistent, fully-featured, and user friendly?
