module.exports = function getZerosCount(number) {

    var count = 0;

    for (var i = 5; i <=number; i++) {
        var j = i;
        while (j >= 5) {
            if (j%5 === 0) {
                count++;
                j = j/5;
            } else {
                break;
            }
        }
    }

    return count;
}
