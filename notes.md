# Principles

* Sensible by default. A page with zero classes on it should look at least somewhat reasonable.

# Hacks

* A max width is applied everywhere by default, because that's sensible by default. But I wanted some full-width elements (footers, headers, and `t-sidebyside`) so I did a gross hack by centering them horizontally and making them effectively `width: 100vw`, but I had to subtract the scrollbar width to get the width actually correct. In case that subtraction is wrong, I also added `overflow-x: clip` on `<html>`.

# Things I decided not to do

* Scroll snapping - I wanted to apply a scroll snap to all `t-fullheight`s that aren't an only child, but even `proximity` is too coercive, especially in Firefox.
* `scrollbar-gutter: stable both-edges` messes with the scrollbar width calculations too much (needed for the full-width things)
