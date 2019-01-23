class Batterie {
    constructor(pSettings) {
        this.capacity = pSettings.capacity;
        this.chargePercentage = 0;
        this.power = pSettings.capacity / 3600;
        this.stop = false;
        this.name = pSettings.name;
    }

    charge() {
        let charged = 0;
        const intervalHandler =
            setInterval(() => {
                charged += this.power;
                this.chargePercentage = Math.floor((charged * 100) / this.capacity);
                if (this.chargePercentage === 100 || this.stop === true) {
                    clearInterval(intervalHandler);
                }
                console.log(this.name + " charging : " + this.chargePercentage + " %")
            }, 100);
    }

    stopCharge() {
        this.stop = true;
    }

    getCapacity() {
        return this.capacity;
    }

    getChargePercentage() {
        return this.chargePercentage;
    }

    getPower() {
        return this.power;
    }

    getName(){
        return this.name;
    }
}