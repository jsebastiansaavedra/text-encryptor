// Calls the initial configuration
clearFields();

// Initial function to setup the environment
function clearFields() {
    document.getElementById("text__to__encrypt").value = "";
    document.getElementById("copy__result__button").value = "Copy";
    document.getElementById('text__result').innerText = "";
    document.getElementById('no__message__group').style.display = "block";
    document.getElementById('encryptor__result__button__container').style.display = "none";
    document.getElementById('copy__result__button').innerText = "Copy";
}

// Function that encrypt the text
function encryptText() {
    // Retrieving the text to encrypt
    let text = document.getElementById("text__to__encrypt").value;

    // Splitting text into an array
    text = text.split("");

    // Using an aux variable to store the new text encrypted
    let finalText = "";
    for (var i = 0; i < text.length; i++) {
        // Changing the values as needed
        if (text[i] == "a") {
            finalText += text[i].replace("a", "ai");
        }else if (text[i] == "e") {
            finalText += text[i].replace("e", "enter");
        }else if (text[i] == "i") {
            finalText += text[i].replace("i", "imes");
        }else if (text[i] == "o") {
            finalText += text[i].replace("o", "ober");
        }else if (text[i] == "u") {
            finalText += text[i].replace("u", "ufat");
        }else {
            finalText += text[i];
        }
    }
    
    // Setting up the environment with the new results
    document.getElementById("text__to__encrypt").value = "";
    document.getElementById('copy__result__button').innerText = "Copy";
    document.getElementById('text__result').innerText = finalText;
    document.getElementById('no__message__group').style.display = "none";
    document.getElementById('encryptor__result__button__container').style.display = "block";
}

// Function that decrypt the text
function decryptText() {
    // Retrieving the text to decrypt
    let text = document.getElementById("text__to__encrypt").value;

    // Changing the back the values
    for (var i = 0; i < text.length; i++) {
        text = text.replace("ai", "a");
        text = text.replace("enter", "e");
        text = text.replace("imes", "i");
        text = text.replace("ober", "o");
        text = text.replace("ufat", "u");
    }

    // Setting back up the environment with the new results
    document.getElementById("text__to__encrypt").value = "";
    document.getElementById('copy__result__button').innerText = "Copy";
    document.getElementById('text__result').innerText = text;
    document.getElementById('no__message__group').style.display = "none";
    document.getElementById('encryptor__result__button__container').style.display = "block";
}

// Function that copies the text generated
function copyResult() {
    // Retrieving the text
    let text = document.getElementById('text__result').innerText;

    // Adding the text to clipboard
    navigator.clipboard.writeText(text);

    // Changing the button text
    document.getElementById('copy__result__button').innerText = "Text Copied!";
    console.log(text);
}
