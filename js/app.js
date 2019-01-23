
/*

// Varta
const vartaSettings = {name:"Varta", capacity:5500};
const batterieName = new Batterie (vartaSettings);
batterieName.charge();

*/

// Sony
const sonySettings = {name:"Sony", capacity:2700};
const batterieName = new Batterie (sonySettings);
batterieName.charge();


const batterieChargeManager = new ChargeManager(batterieName);
batterieChargeManager.start();
batterieChargeManager.decharge();





