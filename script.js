//set top offset for .right, .left divs
let headerDivHeight = document.querySelector(".header").offsetHeight;
let leftDiv = document.querySelector(".left");
let rightDiv = document.querySelector(".right");
leftDiv.style.top = headerDivHeight + "px";
rightDiv.style.top = headerDivHeight + "px";
let flag = false;

//creating the playoff chart
function createPlayoffChart(parentClass, childClass) {
    //creating input fields
    function createInputFields(divToStoreIn) {
        for (let i = 0; i < 2; i++) {
            inputField = document.createElement("input");
            inputField.type = "text";
            inputField.readOnly = true;
            if (i == 1) {
                inputFieldHeight = document.querySelector("input").offsetHeight;
                inputField.style.marginTop = inputFieldHeight + "px";
            }
            divToStoreIn.appendChild(inputField);
        }
    }
    let parentDiv;
    let childDiv;
    let columnDiv;
    let columnDivHeight;
    let inputDiv;
    let inputLabel;
    let inputField;
    let inputFieldHeight;

    //creating divs to store the columnDivs
    parentDiv = document.querySelector(parentClass);
    childDiv = document.createElement("div");
    childDiv.className = childClass;
    parentDiv.appendChild(childDiv);

    //creating columnDivs
    for (let i = 0; i < 3; i++) {
        columnDiv = document.createElement("div");
        if (childClass == "leftContent") columnDiv.id = `leftColumn_${i}`;
        else if (childClass == "rightContent") columnDiv.id = `rightColumn_${i}`;
        else columnDiv.id = `centerRow_${i}`;
        columnDiv.style.display = "flex";
        columnDiv.style.flexDirection = "column";
        if (i == 0 && childClass == "leftContent" || i == 2 && childClass == "rightContent") columnDiv.style.justifyContent = "space-between";
        else columnDiv.style.justifyContent = "space-around";
        childDiv.appendChild(columnDiv);
    }

    //adding inputfields to the inputDivs
    function populateColumnDivs(matchCounter) {
        for (let i = 0; i < matchCounter / 2; i++) {
            if (childClass == "leftContent") {
                switch (matchCounter) {
                    case 8:
                        columnDiv = document.getElementById(`leftColumn_0`);
                        inputDiv = document.createElement("div");
                        inputDiv.id = `0left_${i}`;
                        break;
                    case 4:
                        columnDiv = document.getElementById(`leftColumn_1`);
                        inputDiv = document.createElement("div");
                        inputDiv.id = `1left_${i}`;
                        break;
                    case 2:
                        columnDiv = document.getElementById(`leftColumn_2`);
                        inputDiv = document.createElement("div");
                        inputDiv.id = `2left_${i}`;
                        break;
                }
                inputDiv.style.display = "flex";
                inputDiv.style.flexDirection = "column";
                inputDiv.style.alignItems = "flex-end";
                columnDiv.appendChild(inputDiv);
                createInputFields(inputDiv);
            } else if (childClass == "rightContent") {
                switch (matchCounter) {
                    case 8:
                        columnDiv = document.getElementById("rightColumn_2");
                        inputDiv = document.createElement("div");
                        inputDiv.id = `3right_${i}`;
                        break;
                    case 4:
                        columnDiv = document.getElementById("rightColumn_1");
                        inputDiv = document.createElement("div");
                        inputDiv.id = `2right_${i}`;
                        break;
                    case 2:
                        columnDiv = document.getElementById("rightColumn_0");
                        inputDiv = document.createElement("div");
                        inputDiv.id = `1right_${i}`;
                        break;
                }
                inputDiv.style.display = "flex";
                inputDiv.style.flexDirection = "column";
                inputDiv.style.alignItems = "flex-end";
                columnDiv.appendChild(inputDiv);
                createInputFields(inputDiv);
            } else {
                if (matchCounter == 4 && flag == false) {
                    columnDiv = document.getElementById("centerRow_0");
                    columnDiv.style.height = `${columnDivHeight}px`;
                    inputDiv = document.createElement("div");
                    inputDiv.id = `center${i}`;
                    inputLabel = document.createElement("label");
                    inputLabel.htmlFor = `center${i}`;
                    inputLabel.innerHTML = "Final";
                    inputLabel.style.marginBottom = "2vh";
                    inputLabel.style.fontSize = "1.8em"
                    inputLabel.style.fontWeight = "bold";
                    inputLabel.style.textAlign = "center";
                    inputDiv.style.display = "flex";
                    inputDiv.style.flexDirection = "column";
                    inputDiv.style.alignItems = "center";
                    columnDiv.appendChild(inputLabel);
                    columnDiv.appendChild(inputDiv);
                    createInputFields(inputDiv);
                    flag = true;
                } else if (matchCounter == 4 && flag == true) {
                    columnDiv = document.getElementById("centerRow_1");
                    columnDiv.style.height = `${columnDivHeight}px`;
                    inputDiv = document.createElement("div");
                    inputDiv.id = `center${i}`;
                    inputLabel = document.createElement("label");
                    inputLabel.htmlFor = `center${i}`;
                    inputLabel.innerHTML = "Bronze medal game";
                    inputLabel.style.marginBottom = "2vh";
                    inputLabel.style.fontSize = "1.2em"
                    inputLabel.style.fontWeight = "bold";
                    inputLabel.style.textAlign = "center";
                    inputDiv.style.display = "flex";
                    inputDiv.style.flexDirection = "column";
                    inputDiv.style.alignItems = "center";
                    columnDiv.appendChild(inputLabel);
                    columnDiv.appendChild(inputDiv);
                    createInputFields(inputDiv);
                }
            }
        }
    }

    populateColumnDivs(8);
    populateColumnDivs(4);
    populateColumnDivs(2);
}

createPlayoffChart(".left", "leftContent")
createPlayoffChart(".right", "rightContent")
createPlayoffChart(".center", "centerContent")

//creating the function for drawing teams
const hat = [{
        groupName: "A",
        firstTeam: {
            teamName: "Netherlands",
            teamCode: "NED",
            teamFlag: "🇳🇱",
            teamWins: 2,
            teamLosses: 0,
            teamDraws: 1,
            finalWins: 0,
            rankingScore: 1.5
        },
        secondTeam: {
            teamName: "Senegal",
            teamCode: "SEN",
            teamFlag: "🇸🇳",
            teamWins: 2,
            teamLosses: 1,
            teamDraws: 0,
            finalWins: 0,
            rankingScore: 1
        },
    },

    {
        groupName: "B",
        firstTeam: {
            teamName: "England",
            teamCode: "ENG",
            teamFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            teamWins: 2,
            teamLosses: 0,
            teamDraws: 1,
            finalWins: 0,
            rankingScore: 1.6
        },
        secondTeam: {
            teamName: "USA",
            teamCode: "USA",
            teamFlag: "🇺🇸",
            teamWins: 1,
            teamLosses: 0,
            teamDraws: 2,
            finalWins: 0,
            rankingScore: 1
        }
    },

    {
        groupName: "C",
        firstTeam: {
            teamName: "Argentina",
            teamCode: "ARG",
            teamFlag: "🇦🇷",
            teamWins: 2,
            teamLosses: 1,
            teamDraws: 0,
            finalWins: 0,
            rankingScore: 1.9

        },
        secondTeam: {
            teamName: "Poland",
            teamCode: "POL",
            teamFlag: "🇵🇱",
            teamWins: 1,
            teamLosses: 1,
            teamDraws: 1,
            finalWins: 0,
            rankingScore: 1
        }
    },

    {
        groupName: "D",
        firstTeam: {
            teamName: "France",
            teamCode: "FRA",
            teamFlag: "🇫🇷",
            teamWins: 2,
            teamLosses: 1,
            teamDraws: 0,
            finalWins: 0,
            rankingScore: 1.8
        },
        secondTeam: {
            teamName: "Australia",
            teamCode: "AUS",
            teamFlag: "🇦🇺",
            teamWins: 2,
            teamLosses: 1,
            teamDraws: 0,
            finalWins: 0,
            rankingScore: 1
        }
    },

    {
        groupName: "E",
        firstTeam: {
            teamName: "Japan",
            teamCode: "JPN",
            teamFlag: "🇯🇵",
            teamWins: 2,
            teamLosses: 1,
            teamDraws: 0,
            finalWins: 0,
            rankingScore: 1
        },
        secondTeam: {
            teamName: "Spain",
            teamCode: "ESP",
            teamFlag: "🇪🇸",
            teamWins: 1,
            teamLosses: 1,
            teamDraws: 1,
            finalWins: 0,
            rankingScore: 1.1
        }
    },

    {
        groupName: "F",
        firstTeam: {
            teamName: "Morocco",
            teamCode: "MAR",
            teamFlag: "🇲🇦",
            teamWins: 2,
            teamLosses: 0,
            teamDraws: 1,
            finalWins: 0,
            rankingScore: 1
        },
        secondTeam: {
            teamName: "Croatia",
            teamCode: "CRO",
            teamFlag: "🇭🇷",
            teamWins: 1,
            teamLosses: 0,
            teamDraws: 2,
            finalWins: 0,
            rankingScore: 1.4
        }
    },

    {
        groupName: "G",
        firstTeam: {
            teamName: "Brazil",
            teamCode: "BRA",
            teamFlag: "🇧🇷",
            teamWins: 2,
            teamLosses: 1,
            teamDraws: 0,
            finalWins: 0,
            rankingScore: 2
        },
        secondTeam: {
            teamName: "Switzerland",
            teamCode: "SUI",
            teamFlag: "🇨🇭",
            teamWins: 2,
            teamLosses: 1,
            teamDraws: 0,
            finalWins: 0,
            rankingScore: 1
        }
    },

    {
        groupName: "H",
        firstTeam: {
            teamName: "Portugal",
            teamCode: "POR",
            teamFlag: "🇵🇹",
            teamWins: 2,
            teamLosses: 1,
            teamDraws: 0,
            finalWins: 0,
            rankingScore: 1.2
        },
        secondTeam: {
            teamName: "South Korea",
            teamCode: "KOR",
            teamFlag: "🇰🇷",
            teamWins: 1,
            teamLosses: 1,
            teamDraws: 1,
            finalWins: 0,
            rankingScore: 1
        }
    }
];

//creating 2d array for 8th finals
let matches = Array(hat.length);

for (let i = 0; i < matches.length; i++) {
    matches[i] = Array(2);
}

//creating 2d array for quarter-finals
let quarterFinalsL = Array(2);

for (let i = 0; i < quarterFinalsL.length; i ++) {
    quarterFinalsL[i] = Array(2);
}

let quarterFinalsR = Array(2);

for (let i = 0; i < quarterFinalsR.length; i ++) {
    quarterFinalsR[i] = Array(2);
}

//creating array for semi-finals
let semiFinalsL = [];
let semiFinalsR = [];

// creating array for finals
let final = [];
let thirdplace = [];

//creating array for final winners
let winners = [];

//creating match pairs
let pairflag = false;
for (let i = 0; i < hat.length; i++) {
    if (pairflag == false) {
        matches[i][0] = hat[i].firstTeam;
        matches[i][1] = hat[i + 1].secondTeam;
        pairflag = true;
    } 
    else {
        matches[i][0] = hat[i].firstTeam;
        matches[i][1] = hat[i - 1].secondTeam;
        pairflag = false;
    }
}

//calculate odds for teams
function calculateOdds(team1, team2) {
    let numberOfMatches1;
    let numberOfMatches2;
    let team1Probability;
    let team2Probability;
    let teamsArray = [];
    let randomNumber = 0;

    numberOfMatches1 = team1.teamWins + team1.teamDraws + team1.teamLosses;
    numberOfMatches2 = team2.teamWins + team2.teamDraws + team2.teamLosses;

    team1Probability = (team1.teamWins + (team1.teamDraws / 2)) / numberOfMatches1 * team1.rankingScore;
    team2Probability = (team2.teamWins + (team2.teamDraws / 2)) / numberOfMatches2 * team2.rankingScore;

    for (let i = 0; i < team1Probability * 100 - 1; i++) {
        teamsArray.push(team1);
    }

    for (let i = 0; i < team2Probability * 100 - 1; i++) {
        teamsArray.push(team2);
    }

    while (true) {
        let drawnArray = [];
        let team1Counter = 0;
        let team2Counter = 0;

        for (let i = 0; i < 9; i++) {
            randomNumber = Math.floor(Math.random() * (teamsArray.length - 0)) + 0;
            drawnArray.push(teamsArray[randomNumber]);
            if (drawnArray[i].teamCode == team1.teamCode) team1Counter++;
            else team2Counter++;
        }

        if (team1Counter != team2Counter) {
            if (team1Counter > team2Counter) {
                return "team1";
            }
            else return "team2";
        }
    }   
}

//writing matches into the chart
function onResize() {
    function writeIntoChart(side) {
        let currentInput;
        let thirdPlaceInput;
        let width = window.innerWidth;

        let allInputs = document.querySelectorAll("input");

        allInputs.forEach(element => {
            element.style.borderColor = "white";
            element.style.color = "white";
        });

        if (side == "left") {
            //8th finals
            for (let i = 0; i < 8; i += 2) {
                currentInput = document.getElementById(`0left_${i/2}`);
                if (width <= 1150) {
                    currentInput.querySelectorAll("input")[0].value = matches[i][0].teamFlag + " " + matches[i][0].teamCode;
                    currentInput.querySelectorAll("input")[1].value = matches[i][1].teamFlag + " " + matches[i][1].teamCode;
                } 
                else {
                    currentInput.querySelectorAll("input")[0].value = matches[i][0].teamFlag + " " + matches[i][0].teamName;
                    currentInput.querySelectorAll("input")[1].value = matches[i][1].teamFlag + " " + matches[i][1].teamName;
                }
            }
            //quarter finals
            let matchIndex = 0;
            for (let i = 0; i < 2; i++) {
                currentInput = document.getElementById(`1left_${i}`);
                if (width <= 1150) {
                    for (let j = 0; j < 2; j++) {
                        switch (calculateOdds(matches[matchIndex][0], matches[matchIndex][1])) {
                            case "team1":
                                currentInput.querySelectorAll("input")[j].value = matches[matchIndex][0].teamFlag + " " + matches[matchIndex][0].teamCode;
                                quarterFinalsL[i][j] = matches[matchIndex][0];
                                break;
                            case "team2":
                                currentInput.querySelectorAll("input")[j].value = matches[matchIndex][1].teamFlag + " " + matches[matchIndex][1].teamCode;
                                quarterFinalsL[i][j] = matches[matchIndex][1];
                                break;
                        }
                        matchIndex += 2;
                    }
                }
                else {
                    for (let j = 0; j < 2; j++) {
                        switch (calculateOdds(matches[matchIndex][0], matches[matchIndex][1])) {
                            case "team1":
                                currentInput.querySelectorAll("input")[j].value = matches[matchIndex][0].teamFlag + " " + matches[matchIndex][0].teamName;
                                quarterFinalsL[i][j] = matches[matchIndex][0];
                                break;
                            case "team2":
                                currentInput.querySelectorAll("input")[j].value = matches[matchIndex][1].teamFlag + " " + matches[matchIndex][1].teamName;
                                quarterFinalsL[i][j] = matches[matchIndex][1];
                                break;
                        }
                        matchIndex += 2;
                    }
                }
            }
            //semi finals
            for (let i = 0; i < 2; i ++) {
                currentInput = document.getElementById("2left_0");
                if (width <= 1150) {
                    switch (calculateOdds(quarterFinalsL[i][0], quarterFinalsL[i][1])) {
                        case "team1":
                            currentInput.querySelectorAll("input")[i].value = quarterFinalsL[i][0].teamFlag + " " + quarterFinalsL[i][0].teamCode;
                            semiFinalsL.push(quarterFinalsL[i][0]);
                            break;
                        case "team2":
                            currentInput.querySelectorAll("input")[i].value = quarterFinalsL[i][1].teamFlag + " " + quarterFinalsL[i][1].teamCode;
                            semiFinalsL.push(quarterFinalsL[i][1]);
                            break;
                    }    
                }
                else {
                    switch (calculateOdds(quarterFinalsL[i][0], quarterFinalsL[i][1])) {
                        case "team1":
                            currentInput.querySelectorAll("input")[i].value = quarterFinalsL[i][0].teamFlag + " " + quarterFinalsL[i][0].teamName;
                            semiFinalsL.push(quarterFinalsL[i][0]);
                            break;
                        case "team2":
                            currentInput.querySelectorAll("input")[i].value = quarterFinalsL[i][1].teamFlag + " " + quarterFinalsL[i][1].teamName;
                            semiFinalsL.push(quarterFinalsL[i][1]);
                            break;
                    }
                }
            }

            //finals
            currentInput = document.getElementById("center0");
            thirdPlaceInput = document.getElementById("center1");
            if (width <= 1150) {
                switch (calculateOdds(semiFinalsL[0], semiFinalsL[1])) {
                    case "team1":
                        currentInput.querySelectorAll("input")[0].value = semiFinalsL[0].teamFlag + " " + semiFinalsL[0].teamCode;
                        thirdPlaceInput.querySelectorAll("input")[0].value = semiFinalsL[1].teamFlag + " " + semiFinalsL[1].teamCode;
                        final.push(semiFinalsL[0]);
                        thirdplace.push(semiFinalsL[1]);
                        break;
                    case "team2":
                        currentInput.querySelectorAll("input")[0].value = semiFinalsL[1].teamFlag + " " + semiFinalsL[1].teamCode;
                        thirdPlaceInput.querySelectorAll("input")[0].value = semiFinalsL[0].teamFlag + " " + semiFinalsL[0].teamCode;
                        final.push(semiFinalsL[1]);
                        thirdplace.push(semiFinalsL[0]);
                        break;
                    }
            }
            else {
                switch (calculateOdds(semiFinalsL[0], semiFinalsL[1])) {
                    case "team1":
                        currentInput.querySelectorAll("input")[0].value = semiFinalsL[0].teamFlag + " " + semiFinalsL[0].teamName;
                        thirdPlaceInput.querySelectorAll("input")[0].value = semiFinalsL[1].teamFlag + " " + semiFinalsL[1].teamName;
                        final.push(semiFinalsL[0]);
                        thirdplace.push(semiFinalsL[1]);
                        break;
                    case "team2":
                        currentInput.querySelectorAll("input")[0].value = semiFinalsL[1].teamFlag + " " + semiFinalsL[1].teamName;
                        thirdPlaceInput.querySelectorAll("input")[0].value = semiFinalsL[0].teamFlag + " " + semiFinalsL[0].teamName;
                        final.push(semiFinalsL[1]);
                        thirdplace.push(semiFinalsL[0]);
                        break;
                }
            }
        } 
        else if (side == "right") {
            //8th finals
            for (let i = 1; i < 9; i += 2) {
                switch (i) {
                    case 1:
                        currentInput = document.getElementById("3right_0");
                        break;
                    case 3:
                        currentInput = document.getElementById("3right_1");
                        break;
                    case 5:
                        currentInput = document.getElementById("3right_2");
                        break;
                    case 7:
                        currentInput = document.getElementById("3right_3");
                        break;
                }
                if (width <= 1150) {
                    currentInput.querySelectorAll("input")[0].value = matches[i][0].teamFlag + " " + matches[i][0].teamCode;
                    currentInput.querySelectorAll("input")[1].value = matches[i][1].teamFlag + " " + matches[i][1].teamCode;
                } 
                else {
                    currentInput.querySelectorAll("input")[0].value = matches[i][0].teamFlag + " " + matches[i][0].teamName;
                    currentInput.querySelectorAll("input")[1].value = matches[i][1].teamFlag + " " + matches[i][1].teamName;
                }
            }
            
            //quarter finals
            let matchIndex = 1;
            for (let i = 0; i < 2; i++) {
                currentInput = document.getElementById(`2right_${i}`);
                if (width <= 1150) {
                    for (let j = 0; j < 2; j++) {
                        switch (calculateOdds(matches[matchIndex][0], matches[matchIndex][1])) {
                            case "team1":
                                currentInput.querySelectorAll("input")[j].value = matches[matchIndex][0].teamFlag + " " + matches[matchIndex][0].teamCode;
                                quarterFinalsR[i][j] = matches[matchIndex][0];
                                break;
                            case "team2":
                                currentInput.querySelectorAll("input")[j].value = matches[matchIndex][1].teamFlag + " " + matches[matchIndex][1].teamCode;
                                quarterFinalsR[i][j] = matches[matchIndex][1];
                                break;
                        }
                        matchIndex += 2;
                    }
                }
                else {
                    for (let j = 0; j < 2; j++) {
                        switch (calculateOdds(matches[matchIndex][0], matches[matchIndex][1])) {
                            case "team1":
                                currentInput.querySelectorAll("input")[j].value = matches[matchIndex][0].teamFlag + " " + matches[matchIndex][0].teamName;
                                quarterFinalsR[i][j] = matches[matchIndex][0];
                                break;
                            case "team2":
                                currentInput.querySelectorAll("input")[j].value = matches[matchIndex][1].teamFlag + " " + matches[matchIndex][1].teamName;
                                quarterFinalsR[i][j] = matches[matchIndex][1];
                                break;
                        }
                        matchIndex += 2;
                    }
                }
            }

            //semi finals
            for (let i = 0; i < 2; i ++) {
                currentInput = document.getElementById("1right_0");
                if (width <= 1150) {
                    switch (calculateOdds(quarterFinalsR[i][0], quarterFinalsR[i][1])) {
                        case "team1":
                            currentInput.querySelectorAll("input")[i].value = quarterFinalsR[i][0].teamFlag + " " + quarterFinalsR[i][0].teamCode;
                            semiFinalsR.push(quarterFinalsR[i][0]);
                            break;
                        case "team2":
                            currentInput.querySelectorAll("input")[i].value = quarterFinalsR[i][1].teamFlag + " " + quarterFinalsR[i][1].teamCode;
                            semiFinalsR.push(quarterFinalsR[i][1]);
                            break;
                    }    
                }
                else {
                    switch (calculateOdds(quarterFinalsR[i][0], quarterFinalsR[i][1])) {
                        case "team1":
                            currentInput.querySelectorAll("input")[i].value = quarterFinalsR[i][0].teamFlag + " " + quarterFinalsR[i][0].teamName;
                            semiFinalsR.push(quarterFinalsR[i][0]);
                            break;
                        case "team2":
                            currentInput.querySelectorAll("input")[i].value = quarterFinalsR[i][1].teamFlag + " " + quarterFinalsR[i][1].teamName;
                            semiFinalsR.push(quarterFinalsR[i][1]);
                            break;
                    }
                }
            }

            //finals
            currentInput = document.getElementById("center0");
            thirdPlaceInput = document.getElementById("center1");
            if (width <= 1150) {
                switch (calculateOdds(semiFinalsR[0], semiFinalsR[1])) {
                    case "team1":
                        currentInput.querySelectorAll("input")[1].value = semiFinalsR[0].teamFlag + " " + semiFinalsR[0].teamCode;
                        thirdPlaceInput.querySelectorAll("input")[1].value = semiFinalsR[1].teamFlag + " " + semiFinalsR[1].teamCode;
                        final.push(semiFinalsR[0]);
                        thirdplace.push(semiFinalsR[1]);
                        break;
                    case "team2":
                        currentInput.querySelectorAll("input")[1].value = semiFinalsR[1].teamFlag + " " + semiFinalsR[1].teamCode;
                        thirdPlaceInput.querySelectorAll("input")[1].value = semiFinalsR[0].teamFlag + " " + semiFinalsR[0].teamCode;
                        final.push(semiFinalsR[1]);
                        thirdplace.push(semiFinalsR[0]);
                        break;
                    }
            }
            else {
                switch (calculateOdds(semiFinalsR[0], semiFinalsR[1])) {
                    case "team1":
                        currentInput.querySelectorAll("input")[1].value = semiFinalsR[0].teamFlag + " " + semiFinalsR[0].teamName;
                        thirdPlaceInput.querySelectorAll("input")[1].value = semiFinalsR[1].teamFlag + " " + semiFinalsR[1].teamName;
                        final.push(semiFinalsR[0]);
                        thirdplace.push(semiFinalsR[1]);
                        break;
                    case "team2":
                        currentInput.querySelectorAll("input")[1].value = semiFinalsR[1].teamFlag + " " + semiFinalsR[1].teamName;
                        thirdPlaceInput.querySelectorAll("input")[1].value = semiFinalsR[0].teamFlag + " " + semiFinalsR[0].teamName;
                        final.push(semiFinalsR[1]);
                        thirdplace.push(semiFinalsR[0]);
                        break;
                }
            }
        }
    }
    writeIntoChart("left");
    writeIntoChart("right");

    //winner
    let currentInput
    for (let i = 0; i < 2; i ++) {
        currentInput = document.getElementById(`center${i}`);
        if (i == 0) {
            switch (calculateOdds(final[0], final[1])) {
                case "team1":
                    currentInput.querySelectorAll("input")[0].style.borderColor = "#FFD700";
                    currentInput.querySelectorAll("input")[0].style.color = "#FFD700";
                    currentInput.querySelectorAll("input")[0].value += " 🏆";
                    currentInput.querySelectorAll("input")[1].style.borderColor = "#C0C0C0";
                    currentInput.querySelectorAll("input")[1].style.color = "#C0C0C0";
                    currentInput.querySelectorAll("input")[1].value += " 🥈";
                    winners.push(final[0].teamName);
                    break;
                case "team2":
                    currentInput.querySelectorAll("input")[1].style.borderColor = "#FFD700";
                    currentInput.querySelectorAll("input")[1].style.color = "#FFD700";
                    currentInput.querySelectorAll("input")[1].value += " 🏆";
                    currentInput.querySelectorAll("input")[0].style.borderColor = "#C0C0C0";
                    currentInput.querySelectorAll("input")[0].style.color = "#C0C0C0";
                    currentInput.querySelectorAll("input")[0].value += " 🥈";
                    winners.push(final[1].teamName);
                    break;
            }
        }
        else {
            switch (calculateOdds(thirdplace[0], thirdplace[1])) {
                case "team1":
                    currentInput.querySelectorAll("input")[0].style.borderColor = "#CD7F32";
                    currentInput.querySelectorAll("input")[0].style.color = "#CD7F32";
                    currentInput.querySelectorAll("input")[0].value += " 🥉";
                    break;
                case "team2":
                    currentInput.querySelectorAll("input")[1].style.borderColor = "#CD7F32";
                    currentInput.querySelectorAll("input")[1].style.color = "#CD7F32";
                    currentInput.querySelectorAll("input")[1].value += " 🥉";
                    break;
            }
        }
    }
    semiFinalsL = [];
    semiFinalsR = [];
    final = [];
    thirdplace = [];
}

/*for (let i = 0; i < 10000; i++) {
    onResize();
}*/

onResize();

winners.forEach(element => {
    switch(element) {
        case "Argentina":
            hat[2].firstTeam.finalWins++;
            break;
        case "Australia":
            hat[3].secondTeam.finalWins++;
            break;
        case "Netherlands":
            hat[0].firstTeam.finalWins++;
            break;
        case "USA":
            hat[1].secondTeam.finalWins++;
            break;
        case "Japan":
            hat[4].firstTeam.finalWins++;
            break;
        case "Croatia":
            hat[5].secondTeam.finalWins++
            break;
        case "Brazil":
            hat[6].firstTeam.finalWins++;
            break;
        case "South Korea":
            hat[7].secondTeam.finalWins++;
            break;
        case "England":
            hat[1].firstTeam.finalWins++;
            break;
        case "Senegal":
            hat[0].secondTeam.finalWins++;
            break;
        case "France":
            hat[3].firstTeam.finalWins++;
            break;
        case "Poland":
            hat[2].secondTeam.finalWins++;
            break;
        case "Morocco":
            hat[5].firstTeam.finalWins++;
            break;
        case "Spain":
            hat[4].secondTeam.finalWins++;
            break;
        case "Portugal":
            hat[7].firstTeam.finalWins++;
            break;
        case "Switzerland":
            hat[6].secondTeam.finalWins++;
            break;
    }
});

//filling up the tempArray with teams
let tempArray = [];
hat.forEach(element => {
    tempArray.push(element.firstTeam);
    tempArray.push(element.secondTeam);
})
//get the team with most wins after drawing 100x
let mostWins = tempArray[0];
tempArray.forEach(element => {
    if (element.finalWins > mostWins.finalWins) {
        mostWins = element;
    }
})
/*console.log(mostWins.teamName);
console.log(mostWins.finalWins/100+"%");*/
tempArray.splice(tempArray.indexOf(mostWins), 1);

//get the teams with the 2nd most wins
let second = tempArray[0];
tempArray.forEach(element => {
   if (element.finalWins > second.finalWins) {
        second = element;
   }
}) 
/*console.log(second.teamName);
console.log(second.finalWins/100+"%");*/
tempArray.splice(tempArray.indexOf(second), 1);

//get the third most wins
let third = tempArray[0];
tempArray.forEach(element => {
    if (element.finalWins > third.finalWins) {
        third = element;
    }
})
/*console.log(third.teamName);
console.log(third.finalWins/100+"%");*/
tempArray.splice(tempArray.indexOf(third), 1);

//get the fourth most wins
let fourth = tempArray[0];
tempArray.forEach(element => {
    if (element.finalWins > fourth.finalWins) {
        fourth = element;
    }
})
/*console.log(fourth.teamName);
console.log(fourth.finalWins/100+"%");*/
tempArray.splice(tempArray.indexOf(fourth), 1);

//get the fifth most wins
let fifth = tempArray[0];
tempArray.forEach(element => {
    if (element.finalWins > fifth.finalWins) {
        fifth = element;
    }
})
/*console.log(fifth.teamName);
console.log(fifth.finalWins/100+"%");*/
tempArray.splice(tempArray.indexOf(fifth), 1);

//get the sixth most wins
let sixth = tempArray[0];
tempArray.forEach(element => {
    if (element.finalWins > sixth.finalWins) {
        sixth = element;
    }
})
/*console.log(sixth.teamName);
console.log(sixth.finalWins/100+"%");*/

if (Boolean(sessionStorage.alertFlag) != true) alert("Refresh the page to see different results");
sessionStorage.setItem("alertFlag", "true");