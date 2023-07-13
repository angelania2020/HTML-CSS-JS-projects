const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    // Counter starts with 0
    counter.innerText = '0';

    const updateCounter = () => {
        // Counter target
        // + is for string conversion to number
        const target = +counter.getAttribute('data-target');
        // What counter shows
        const c = +counter.innerText;

        // Increment is different for every counter so that they stop at the same time
        const increment = target / 200;

        // If (what we get when we increment) is less than (target)
        if ((Math.ceil(c + increment)) < target) {
            // Change the number the counter shows
            counter.innerText = `${Math.ceil(c + increment)}`;
            // Start function again, but with a delay
            setTimeout(updateCounter, 1);

            // If (what we get when we increment) is not less than (target)
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();
});