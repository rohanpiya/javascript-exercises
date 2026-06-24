const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    arr.sort((a,b) => {
        if(a.yearOfDeath == undefined){
            a.yearOfDeath == currentYear;
        } else if (b.yearOfDeath == undefined) {
            b.yearOfDeath = currentYear;
        }
        
        if((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)){
            return 1;
        } else {
            return -1;
        }
    })
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
