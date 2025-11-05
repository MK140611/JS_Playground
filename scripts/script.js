console.log("Script loaded!");

function moveTheThing() {
    const theThing = document.getElementById("theThing");
    const rightBlock = document.getElementById("rightBlock");
    const leftBlock = document.getElementById("leftBlock");
    leftBlock.childElementCount > 0
        ? rightBlock.append(theThing)
        : leftBlock.append(theThing);
}

function styleTheText() {
    let fancyText = document.getElementById("fancyText");
    fancyText.style.color = "purple";
    fancyText.style.fontFamily = "arial";
    fancyText.style.fontSize = "3em";
}

function getFormValues() {
    let firstField = document.getElementById("firstField");
    let secondField = document.getElementById("secondField");
    let thirdField = document.getElementById("thirdField");

    let firstResult = document.getElementById("firstResult");
    let secondResult = document.getElementById("secondResult");
    let thirdResult = document.getElementById("thirdResult");

    firstResult.textContent = firstField.value;
    secondResult.textContent = secondField.value;
    thirdResult.textContent = thirdField.checked;
}

function countTheStuff() {
    let countP = document.querySelectorAll("p").length;
    let countH2 = document.querySelectorAll("H2").length;
    let countTD = document.querySelectorAll("TD").length;

    let countPResult = document.getElementById("countOfP");
    countPResult.innerHTML = countP;
    let countH2Result = document.getElementById("countOfH2");
    countH2Result.innerHTML = countH2;
    let countTDResult = document.getElementById("countOfTD");
    countTDResult.innerHTML = countTD;
}

function addNewRow() {
    const addRowsTable = document.getElementById("addRowsTable");
    const tableBody = addRowsTable.tBodies[0] || addRowsTable; // fixed for browser compatibility
    const lastRow = tableBody.children[tableBody.children.length - 1];
    const currentCount = lastRow.innerText;
    const newRow = addRowsTable.insertRow();
    newRow.innerHTML = `<td>${+currentCount + 1}</td>`;
}

function yourBonusChallenge() {
    const body = document.body;
    body.classList.toggle('bonus-mode');

    const bonusButton = document.querySelector('button[onclick="yourBonusChallenge()"]');
    if (bonusButton) {
        bonusButton.textContent = body.classList.contains('bonus-mode')
            ? 'Revert Style'
            : 'Bonus Button';
    }
}
