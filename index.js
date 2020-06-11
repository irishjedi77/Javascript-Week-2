// Week 2 Javascript  -- Section 2

let isHotOutside = true;

let isWeekday = true;

let hasMoneyInPocket = true;

// Section 3

let costOfMilk = 3;

let moneyInWallet = 42;

let thirstLevel = 7;

// Section 4

var shouldBuyIceCream = "";

if (isHotOutside == true && hasMoneyInPocket == true) {

    var shouldBuyIceCream = true;
    console.log(shouldBuyIceCream); 
} else {
    console.log("Sorry! Not today.");
}

var willGoSwimming = "";

if (isHotOutside == true && isWeekday == false) {
    var willGoSwimming = true;
    console.log(willGoSwimming);
} else {
    console.log("Not on a weekday!");
}

var isAGoodDay = "";

if (isHotOutside == true && hasMoneyInPocket == true && isWeekday == false){
    var isAGoodDay = true;
    console.log(isAGoodDay);
} else {
    console.log("Looks like today is not your day...");
}

var willBuyMilk = "";

if (isHotOutside == true && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk) {
    var willBuyMilk = true;
    console.log(willBuyMilk);
} else {
    console.log("No milk today.");
}