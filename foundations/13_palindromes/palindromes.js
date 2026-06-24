const palindromes = function (str) {
    str = removePunctuations(str).toLowerCase();
    str = removeSpaces(str);
    const reverseStr = reverseString(str).toLowerCase();
    if(str == reverseStr){
        return true;
    }
    return false;
};

function removePunctuations(str) {
  return str.replace(/[^\w\s]/g, "").toLowerCase();;
}

function removeSpaces(str) {
  return str.replace(/\s/g, "");
}

const reverseString = function(str) {
    return str.split("").reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;
