var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
        this.coins = 0;
    }
    SlotMachine.prototype.play = function () {
        this.coins++;
        var reel1 = Math.random() >= 0.5;
        var reel2 = Math.random() >= 0.5;
        var reel3 = Math.random() >= 0.5;
        if (reel1 && reel2 && reel3) {
            console.log("Congratulations!!! You won ".concat(this.coins, " coins!!"));
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    };
    return SlotMachine;
}());
var machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
