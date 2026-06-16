const removeFromArray = function(arr, ...items) {
    return arr.filter(currentItem => !items.includes(currentItem));
};

// Do not edit below this line
module.exports = removeFromArray;
