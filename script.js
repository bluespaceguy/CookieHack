if (typeof Game === "undefined") {     
    const Game = {
        Earn: function(amount) {
            console.log(`Earned ${amount} in the game!`);
        }
    };
}

const inputContainer = document.createElement('div');
inputContainer.style.position = 'fixed';
inputContainer.style.top = '20px';
inputContainer.style.left = '50%';
inputContainer.style.transform = 'translateX(-50%)';
inputContainer.style.zIndex = '9999';
inputContainer.style.background = 'pink'; 
inputContainer.style.padding = '10px';
inputContainer.style.borderRadius = '5px';
inputContainer.style.color = 'white';

const customTextContainer = document.createElement('div');
customTextContainer.style.fontSize = '18px';
customTextContainer.style.fontWeight = 'bold';
customTextContainer.style.marginBottom = '10px'; 
customTextContainer.textContent = 'CookieHack Client';  

inputContainer.appendChild(customTextContainer);

const inputField = document.createElement('input');
inputField.id = 'amountInput';
inputField.placeholder = 'Enter amount to earn';
inputField.style.padding = '5px';
inputField.style.fontSize = '16px';
inputField.style.marginRight = '10px';

const earnButton = document.createElement('button');
earnButton.textContent = 'Earn';
earnButton.style.padding = '5px 10px';
earnButton.style.fontSize = '16px';
earnButton.style.cursor = 'pointer';

inputContainer.appendChild(inputField);
inputContainer.appendChild(earnButton);
document.body.appendChild(inputContainer);

const hideButton = document.createElement('button');
hideButton.textContent = 'Hide';
hideButton.style.position = 'fixed';
hideButton.style.top = '20px';
hideButton.style.left = '35%'; 
hideButton.style.zIndex = '9999';
hideButton.style.padding = '5px 10px';
hideButton.style.fontSize = '16px';
hideButton.style.cursor = 'pointer';

document.body.appendChild(hideButton);

function updateGameEarn() {
    const inputValue = document.getElementById('amountInput').value;  
    const amount = parseInt(inputValue);  

    if (!isNaN(amount) && amount > 0) {
        Game.Earn(amount);  
        document.getElementById('amountInput').value = ''; 
    } else {
        alert("Enter a valid number, smartass.");
    }
}

earnButton.addEventListener('click', updateGameEarn);

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        updateGameEarn();
    }
});

let isHidden = false;
hideButton.addEventListener('click', function() {
    if (isHidden) {
        inputContainer.style.display = 'block'; 
        hideButton.textContent = 'Hide'; 
    } else {
        inputContainer.style.display = 'none'; 
        hideButton.textContent = 'Show'; 
    }
    isHidden = !isHidden; 
});
