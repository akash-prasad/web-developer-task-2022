# Web Developer Task - February 2022

## Introduction

Welcome to the King's Online Web Developer task. This a short programming task that is designed to see how you approach problem-solving a technical issue. Please commit your response to your own git repository and then email the link to danielle.johnstone@kcl.ac.uk by **Tuesday, February 2nd at 17.00**. You will have a chance to present your task and explain your approach during the interview (see "Submitting and presenting" instructions below). 

## The problem

The King's Online E-learning Content Developer (ELCD) team build our courses by using components to present content and activities. The Footnotes component is used when cited sources are included in the main content of a page. An ordered list of footnote references, which includes information such as the author, title of work, etc.  appears at the bottom of the page, with each reference number corresponding to a numbered citation.

The content developers find that reordering of citations within the content results in a need to adjust the footnote reference list and the current manual generation of each citation/reference pair allows room for human error in this process. A development ticket has been submitted requesting that the list of footnote references is created automatically, based on the ordering of the citations within the main content.

>"I have been creating footnotes using the component template HTML you provided, but I'm finding it quite difficult in practice. I create the page and all the footnotes, but then the lecturer chooses to re-organise the page which means the citations get moved around or new quotes are added. Each time this happens, I need to rebuild both the main body of text and the footnotes at the bottom, and I often make mistakes in how the footnotes are ordered. Is there any way this could be made easier? Perhaps something that could automatically order the footnotes based on the order of the citations in the main text?"  
(Content developer 1)

For this task you will be provided with both the existing HTML (manual pairing version) of the component and the starter HTML for the task, along with the completed CSS. Your task is to write a JS function that generates a footnote reference list from citation/reference pairs in the main content of the starter HTML file, enabling the list to remain accurate if the pairs are reordered.

## File structure

- `current-html.html` - existing HTML with manual pairing of citations and references 
- `starter-html.html` - the starter HTML provided for the task
- `css/style.css` - styles for the Footnotes component
- `js/script.js` - a blank JS file for the task

**Please note: the `js/script.js` file is the only file you will need to edit for this task.**

## Task

To successfully complete the task, you must: 

1. Populate the `js/script.js` file with a function that generates a footnotes reference list from the citation/reference pairs in the main content of the `starter-html.html` file
2. Link each citation to its reference so that the `selected` class is added to the appropriate reference `li` when the citation is clicked
3. Ensure that the function serves as intended if the citation/reference pairs are reordered within the main content

## Submitting and presenting
Once you are ready to submit, please commit your response to your own git repository and then email the link to danielle.johnstone@kcl.ac.uk by **Tuesday, February 2nd at 17.00**, with email subject "dev task". 

**During your interview**, you will be asked to present the work you did for the task and explain your approach (5 mins). The panel will have a chance to ask your some questions about the task. You may wish to address the following when you present or during the questions:  
- What did you do to understand the problem?
- What was your solution and how did you implement it? 
- How might you have approached this differently if you'd had more time, if it was part of a bigger project, or if you could get additional information from the content developers? 
