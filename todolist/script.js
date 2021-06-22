const button = document.getElementById('button');
const input = document.getElementById('input');
const listF = document.querySelector(".first");
const listS = document.querySelector(".second");
button.addEventListener('click', clickButton);
function clickButton() {
    const temp = document.createElement('li');
    temp.setAttribute("class", "")
    temp.innerHTML = input.value;
    listF.appendChild(temp);
}
listF.addEventListener('click', (e) => {
    const temp = document.createElement('li');
    temp.innerHTML = e.target.textContent;
    listS.appendChild(temp);
})
