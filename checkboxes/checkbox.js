// function getSelectedCheckboxValues(name) {
//     const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
//     let values = [];
//     checkboxes.forEach((checkbox) => {
//         values.push(checkbox.value);
//     });
//     return values;
// }

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     alert(getSelectedCheckboxValues('icecream'));
// });

const btn = document.querySelector('#btn');
btn.onclick = function () {
    const radiobutton = document.querySelectorAll('input[name="choice"]');
    let selectedValue;
    for (const rbutton of radiobutton) {
        if (rbutton.checked) {
            selectedValue = rbutton.value;
            break;
        }
    }
    alert(selectedValue);
};