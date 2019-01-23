class ChargeManager {

    constructor(pBaterie) {
        this.baterie = pBaterie;
    }


    start() {

        $("#name").html(this.baterie.getName());
        let previousValue = 0;
        let currentValue = 0;
        const stopHandler =
            setInterval(() => {
                currentValue = this.baterie.getChargePercentage();
                if (currentValue - previousValue === 1) {
                    // UI Update
                    $("#baterieUI").append("<div class='chargedLine'></div>");
                    $("#info").html(currentValue + "%");
                    previousValue = this.baterie.getChargePercentage();
                }

            }, 100);
    };

    charge() {
        $("#startBtn").on("click", function () {
            this.start();
        })
    };

    decharge() {
        $("#stopBtn").on("click", function () {
            clearInterval(this.stopHandler);
        })
    };
}