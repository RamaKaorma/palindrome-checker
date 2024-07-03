function validatePalindrome() {
    // Get inpu
    let inputText = document.getElementById("text-input").value;

    let check = false; // flag

    // Empty field or one character checks
    if (inputText == "") {
        alert("Please input a value");
    } else if (inputText.length == 1) {
        check = true;
    }

    // Remove punctuation, whitespace and reverse the string
    let text = inputText.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, "").toLowerCase();
    let reverse = text.split("").reduce((acc, char) => char + acc, "");

    // Check if palindrome
    if (text == reverse) {
        check = true;
    }

    // Reset input field
    document.getElementById("text-input").value = "";

    // Return result
    if (check) {
        document.getElementById("result").innerText = inputText + " is a palindrome";
        return true;
    } else {
        document.getElementById("result").innerText = inputText + " is not a palindrome";
        return false;
    }

}