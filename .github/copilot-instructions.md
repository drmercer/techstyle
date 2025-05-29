This project is a demo website for a stylesheet I made called [`techstyle.css`](../public/techstyle.css).

About the stylesheet:
* I use it for building hobby projects
* It's intentionally limited so I can focus on the functionaltiy of my projects
* See the [README](../README.md) for more about how one uses it

About the demo website:
* built using Astro
  * syntax is kind of like JSX, but note it uses `<slot>` instead of `{children}`
* the main page is [`index.astro`](../src/pages/index.astro) which shows some example features and a theme customizer
* it lists some examples, which can be found in the [`examples`](../src/pages/examples/) directory, that demonstrate different UIs or features people can build using the stylesheet
  * Each example page uses the ExamplePage component defined in _ExamplePage.astro. See one of the existing example pages for an example (haha).

Development workflow
* After making changes, run the Astro Build task to verify them
