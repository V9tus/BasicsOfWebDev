# Improvements & Self-Review
Carolyn Ott, Vitus Wagensonner

## General change: 
- made the navigation bar and  footer looks on all pages the same 
- improved responsive layout 
- ussed Tailwind classe for spacing, buttons, shaadows,...
- form <fieldest>elements use <lengend> fr grouping 
- videos includ "controls" , "muted" , "loop" for accessibility

## Changes becaus of errors and warnings from validator: 
- We only had the error and warnings from the catalog page in task k. But these were more or less the same as the ones in order (task k) and catalog (task k) . We didint know, that we had to write about those errors. 

### Missing alt attribute on <img>
- All images knw have menaingful 'alt' text 
- <img src="..." alt="Comfort Step-Though E-Bike">

### Section lacks heading
- Added <h2> to selections that did not have a heading

### Video width/height value not allowed
- removed "width="100%" / "height="100%" -> used Tailwind => "w-full" / "h-full" to size the video

### Multiple or incorrect <h1>
- <h1> is only used for the main page title 
- used subheadings <h2> / <h3> for followed headings

## Self-Review: 
We totaly forgot to check the task j and k with the validator.
But now we checked the final page and we dont have any erreos or warning. The website is now more accessible, responsive and semantically correct. 

So we learned how important it is to use those checkers and to get a fast and every detailed feedback about the page. - We will never forget to check our pages! 


