//steps to make the button work
//0. wait for the html page to load 
window.addEventListener('load', ()=> {
    console.log("page loaded!");
});
    //1.select the button 
    let pickButton =document.getElementById("snack1")
    //2. listen button to be clicked
    pickButton.addEventListener("click", () => {
    console.log('someone clicked the button!');
    });
    // Play sound when button is clicked
let button = document.getElementById("snack3");
let sound = document.getElementById("buttonClickSound");

button.addEventListener("click", () => {
    sound.currentTime = 0;
    console.log('someone clicked the button!');
    sound.play();
});

let bannedbutton = document.getElementById("snack1");
let bannedsound = document.getElementById("wrong");

bannedbutton.addEventListener("click", () => {
    bannedsound.currentTime = 0;
    console.log('someone clicked the button!');
    bannedsound.play();
});

let badbutton = document.getElementById("snack2");
let badsound = document.getElementById("wrong");

badbutton.addEventListener("click", () => {
    badsound.currentTime = 0;
    console.log('someone clicked the button!');
    badsound.play();
});

function fetchAndDisplayPopup(itemId) {
    fetch("groceries.json") // Asking for data
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Getting a promise object
        })
        .then((data) => {
            let bannedGroceries = data['banned_groceries'];
            let item = bannedGroceries[itemId];

            if (item) {
                let popupText = `
                    <div>Status: ${item.Status}</div>
                    <div>Item: ${item.Item}</div>
                    <div>Location: ${item.Location}</div>
                    <div>Reason: ${item.reason}</div>
                `;

                let popupTextElement = document.getElementById('popupText');
                popupTextElement.innerHTML = popupText;
                openPopup();
            } else {
                console.error('Item not found in the JSON data.');
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

document.getElementById('snack1').addEventListener('click', () => {
    fetchAndDisplayPopup(0);
});

document.getElementById('snack2').addEventListener('click', () => {
    fetchAndDisplayPopup(1);
});

document.getElementById('snack3').addEventListener('click', () => {
    // Add action for the third button if needed
});

function openPopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}
