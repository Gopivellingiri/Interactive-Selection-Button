


const selectBtn = document.querySelector(".select_btn");
const items = document.querySelectorAll(".item");
const btnText = document.querySelector(".btn_text");

selectBtn.addEventListener('click', () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle("checked");
        const checkedCount = document.querySelectorAll(".checked").length;
        btnText.innerText = checkedCount > 0 ? `${checkedCount} Selected` : 'Select Language';
    });
});
