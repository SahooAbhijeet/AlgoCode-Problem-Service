const marked = require('marked');
const santizeHTMLLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkeddownContent(markdownContent) {
    const turndownService = new TurndownService();

// 1. Convert markeddown to HTML
    const convertedHTML = marked.parse(markdownContent);
    console.log("convertedHTml", convertedHTML);

// 2. Santize HTML
    const sanitizedHTML = santizeHTMLLibrary(convertedHTML, {
        allowedTags: santizeHTMLLibrary.defaults.allowedTags
    });
    console.log("sanitizedHTML", sanitizedHTML);

// 3. Convert the sanitized HTML back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHTML);
    console.log("sanitizeMarkeddown", sanitizedMarkdown);
    return sanitizedMarkdown;
}

module.exports = sanitizeMarkeddownContent;