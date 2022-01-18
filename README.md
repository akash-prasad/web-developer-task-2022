# Web Developer Task - February 2022

## Introduction

Welcome to the King's Online Web Developer task. This a short programming task that is designed to see how you approach problem-solving a technical issue. Please commit your response to your own git repository and then email the link to danielle.johnstone@kcl.ac.uk by **Day, Month XXth at XX.00**.

## The problem

The King's Online E-learning Content Developer (ELCD) team build our courses by using components to present content and activities. The Footnotes component is used when cited sources are included in the main content of a page. An ordered list of footnote references, which includes information such as the author, title of work, etc.  appears at the bottom of the page, with each reference number corresponding to a numbered citation.

The ELCD team find that reordering of citations within the content results in a need to adjust the footnote reference list and the current manual generation of each citation/reference pair allows room for human error in this process. A development ticket has been submitted requesting that the list of footnote references is created automatically, based on the ordering of the citations within the main content.

For this task you will be provided with both the existing HTML (manual pairing version) of the component and the starter HTML for the task, along with the completed CSS. Your task is to write a JS function that generates a footnote reference list from citation/reference pairs in the main content of the starter HTML file, enabling the list to remain accurate if the pairs are reordered.

## Task

To successfully complete the task, you must: 

1. Populate the js/script.js file with a function that generates a footnotes reference list from the citation/reference pairs in the main content of the starter-html.html file.
2. Link each citation to its reference so that the ‘selected’ class is added to the appropriate reference li (as shown on reference 2 in the current-html.html file) when the citation is clicked
3. Ensure that the function serves as intended if the citation/reference pairs are reordered within the main content
