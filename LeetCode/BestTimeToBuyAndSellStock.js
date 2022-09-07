

const prices = [7, 1, 5, 3, 6, 4];
var maxProfit = function (prices) {
    if (prices.length == 1) {
        return 0;
    }
    let maxProfit = 0, start = 0, End = 1;
    while (End < prices.length) {
        if (prices[start] < prices[End]) {
            maxProfit = Math.max(maxProfit, prices[End] - prices[start]);
        }
        else {
            start = End;
        }
        End++;
    }
    return maxProfit;

};
console.log(maxProfit("maximum profit is:", prices));
