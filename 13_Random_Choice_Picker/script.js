const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// Automatically puts cursor into the textarea:
textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        // To clear the textarea
        // setTimeout(() => {
        //     e.target.value = '';
        // }, 10);
        randomSelect();
    }
});

function createTags(input) {
    // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    // (It does not manipulate tags themselves)
    // ' Name' will be shown, but it is not an empty string after trimming '', so it passes the test.
    // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;

    // Shifting highlight into each tag
    // Highlighting and unhighlinghting after certain amount of time
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    // Takes care of stopping shifting and picking a random tag to land on and highlight
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);

}

function pickRandomTag() {
    // querySelectorAll gives a node list
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}
function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}