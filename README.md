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

### 3. Global scalability

Tailwind

- One change needs to be changed in many places.
  - If a change to the component is required, every component that is rendered needs to change.
  - In a JS framework or templating system this might be fine. In a larger mixed-rendering system this might be more difficult to orchestrate and will require editing in multiple places.
    - How would this scale for static content like a form that doesn't merit a JS file?
- No BEM / class system.
  - Why not take the best of both worlds? BEM + utilities?
