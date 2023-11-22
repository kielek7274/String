
function ucFirst(str) {
    if (str.length > 0) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        return "";
    }
}

// Example usage:
var result = ucFirst("hello");
console.log(result);



function checkSpam(str) {
    var lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// Example usage:
console.log(checkSpam("Buy ViAgRA now")); // Output: true
console.log(checkSpam("Hello world"));     // Output: false
console.log(checkSpam("Check out this XXX video")); // Output: true





function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    } else {
        return str;
    }
}

// Example usage:
var result1 = truncate("Hello, world!", 10);
console.log(result1); // Output: "Hello, wo…"

var result2 = truncate("Short string", 15);
console.log(result2); // Output: "Short string"


function extractCurrencyValue(str) {
    return parseInt(str.slice(1), 10);
}

// Example usage:
var costString = "$120";
var numericValue = extractCurrencyValue(costString);
console.log(numericValue); // Output: 120