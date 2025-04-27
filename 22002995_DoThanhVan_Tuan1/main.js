let tips = []
let totals = []

function calcTip(bills) {
    return bills.map((bill, index) => {
        if (bill >= 50 && bill <= 300) {
            tips = [...tips, bill * 0.15]
            totals = [...totals, bill * 1.15]
        } else {
            tips = [...tips, bill * 0.2]
            totals = [...totals, bill * 1.2]
        }
    })
}

function calcAverage(totals) {
    let size = totals.length
    let sum = 0;
    for (i = 0; i < size; i++) {
        sum += totals[i];
    }
    return sum / size;
}

calcTip([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52])
console.log(calcAverage(totals))
console.log(tips)
console.log(totals)