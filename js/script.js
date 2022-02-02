/* For this task you will be provided with both the existing HTML
 * (`former-html.html` - manual pairing version) of the component and the
 * starter HTML for the task, along with the completed CSS. Your task is to
 * write a JS function that generates a footnote reference list from
 * citation/reference pairs in the main content of the starter HTML file,
 * enabling the list to remain accurate if the pairs are reordered.
 *
 * To successfully complete the task, you must:
 *
 * 1. Populate the `js/script.js` file with a function that generates a
 *    footnotes reference list from the citation/reference pairs in the main
 *    content of the `starter-html.html` file
 *
 * 2. Link each citation to its reference so that the `selected` class is
 *    added to the appropriate reference `li` when the citation is clicked
 *
 * 3. Ensure that the function serves as intended if the citation/reference
 *    pairs are reordered within the main content
 */
 
//generating all the citations and references
function generateCitations() {
    let citations = document.querySelectorAll('.citation');
    let citationRef = document.querySelectorAll('.ref');
    let citationsLength = citations.length;
    let citationReferences = getCitationReferences(citationsLength, citationRef);

    for (let i = 0; i < citationsLength; i++) {
        let parentTag = citations[i].parentNode;
        let aTag = document.createElement('a');

        citations[i].setAttribute('class', 'citation-text');
        aTag.setAttribute('id', 'citations' + (i + 1));
        aTag.setAttribute('class', 'citation');
        aTag.setAttribute('role', 'doc-noteref');
        aTag.setAttribute('title', 'Jump to reference');
        aTag.setAttribute('href', '#ref' + (i + 1));
        aTag.appendChild(citations[i]);
        parentTag.appendChild(aTag);
        citationRef[i].remove();
    }
    generateFooter(citationsLength, citationReferences);
}

//Storing all the references
function getCitationReferences(citationsLength, citationRef) {
    let citationReferences = [];
    for (let i = 0; i < citationsLength; i++) {
        citationReferences.push(citationRef[i].outerHTML);
    }
    return citationReferences;
}

//generating the footer with all the references
function generateFooter(citationsLength, citationReferences) {
    let articleBody = document.querySelector('.footnotes-article');
    let divTag = document.createElement('div');
    let olTag = document.createElement('ol');
    divTag.setAttribute('class', 'footnotes-footer');

    for (let i = 0; i < citationsLength; i++) {
        let liTag = document.createElement('li');
        let aTag = document.createElement('a');

        liTag.setAttribute('id', 'ref' + (i + 1));
        aTag.setAttribute('href', '#citation' + (i + 1));
        liTag.appendChild(aTag);
        aTag.innerHTML = citationReferences[i];
        olTag.appendChild(liTag);
    }
    divTag.appendChild(olTag);
    articleBody.appendChild(divTag);
}

generateCitations();
