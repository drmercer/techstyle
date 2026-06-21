# [techstyle](https://techstyle.danmercer.net)

An opinionated stylesheet for quickly building web apps that look "good enough to use".

[Check out the website](https://techstyle.danmercer.net) for a theme randomizer, a demo of the features, and some example UIs.

## Goals

* Focused on apps more than documents.
* No thinking about little details like fonts, colors, spacing, variants, etc.
* A few parameters that can _optionally_ be customized - ideally the params can be randomly chosen and look decent most of the time.

## Features

Simple theme:
* Just three parameters to consider:
  * A hue for the theme color. (Set via `--t-hue` on `:root`.)
  * Dark mode. (Set via `color-scheme: dark` on `:root`.)
  * Whether to apply the color to the background or foreground. (Foreground is the default. Swap it by setting `--t-swapped: 1` on `:root`.)
* Uses `oklch` for consistent visual lightness with any hue.
* Try the "Randomize" button on [the website](https://techstyle.danmercer.net) to see a randomly chosen theme. In my opinion, it usually looks pretty good!

Default styles:
* Some "pretty good" styling on form elements.

Classes:
* `t-card`: a clean "card" look.
  * Cards can be used as list items (the list decoration is removed).
* `t-tinted`: apply your theme hue to the element - works on anything! images, emojis, iframes, etc
* `t-theme-root`: define a new theme root (by default `:root` is the only theme root). This lets you apply a different theme to a specific subtree

Everything is in a CSS layer, so if you want to override a style with your own CSS, it should be pretty easy. 🙂

## Inspiration

* [MVP.css](https://andybrewer.github.io/mvp/)
* [Pico.css](https://picocss.com/)

## Why "techstyle"?

It's a stylesheet that looks kind of techy. It's also a pun on _textile_ - my last name, _Mercer_, comes from a word meaning "a textile merhant", so this is a way of living up to that heritage. 😆
