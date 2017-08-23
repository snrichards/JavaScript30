const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('click', handleCheck);
});

function handleCheck(e) {
    let inbetween = false;
    if (e.shiftKey && this.checked) {
        checkBoxes.forEach((checkbox) => {
            if (checkbox === lastChecked || checkbox === this) {
                inbetween = !inbetween;
            }

            if (inbetween) {
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}