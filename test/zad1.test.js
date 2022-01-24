const CoffeMachine = require("./../zad1");

let coffeeMachine = new CoffeMachine(5, 15, false);

const assert = require("chai").assert;
const sinon = require("sinon");

describe("Coffe Machine Class unit test: ", function () {
  describe("Testiranje tipova parametara:", function () {
    it("coffeAmount mora biti broj", function () {
      assert.isNumber(coffeeMachine.coffeAmount);
    });

    it("waterAmmount mora biti broj", function () {
      assert.isNumber(coffeeMachine.waterAmmount);
    });

    it("powerStatus mora biti bool vrijednost", function () {
      assert.isBoolean(coffeeMachine.powerStatus);
    });
  });

  describe("turnMachineOn() metoda:", function () {
    it("Metoda turnMachineOn() vraca Boolean true vrijednost ukoliko je uredaj ugasen", function () {
      coffeeMachine.powerStatus = false;
      coffeeMachine.turnMachineOn();
      assert.equal(coffeeMachine.powerStatus, true);
    });

    it("Metoda turnMachineOn() vraca Boolean true vrijednost i ispisuje poruku na konzoli", function () {
      let spy = sinon.spy(console, "log");
      coffeeMachine.powerStatus = true;
      coffeeMachine.turnMachineOn();
      assert.equal(coffeeMachine.powerStatus, true);
      assert(spy.calledWith("Machine is already turned on !"));
      spy.restore();
    });
  });

  describe("turnMachineOff() metoda:", function () {
    it("Metoda turnMachineOff() vraca Boolean false vrijednost ukoliko je uredaj upaljen", function () {
      coffeeMachine.powerStatus = true;
      coffeeMachine.turnMachineOff();
      assert.equal(coffeeMachine.powerStatus, false);
    });

    it("Metoda turnMachineOff() vraca Boolean false vrijednost i ispisuje poruku na konzoli", function () {
      let spy = sinon.spy(console, "log");
      coffeeMachine.powerStatus = false;
      coffeeMachine.turnMachineOff();
      assert.equal(coffeeMachine.powerStatus, false);
      assert(spy.calledWith("Machine is already turned off !"));
      spy.restore();
    });
  });

  describe("refill() metoda:", function () {
    it("Metoda refill() vraca status 200 ukoliko su parametri u numerickom obliku i ispisuje poruku na konzoli", function () {
      let spy = sinon.spy(console, "log");
      assert.equal(coffeeMachine.refill(15, 45), 200);
      assert(spy.calledWith("Machine refilled !"));
      spy.restore();
    });

    it("Metoda refill() vraca gresku ukoliko parametri nisu numerickog oblika", function () {
      assert.throws(
        function () {
          coffeeMachine.refill("Tekst", 45);
        },
        Error,
        /Illegal type/
      );
    });
  });

  describe("makeCoffe() metoda:", function () {
    it("Metoda makeCoffe() moze napraviti kavu dok ima vise od 5g kave i 15 ml vode", function () {
      coffeeMachine.waterAmmount = 15;
      coffeeMachine.coffeAmount = 5;
      let initialWater = coffeeMachine.waterAmmount;
      let initialCoffee = coffeeMachine.coffeAmount;
      coffeeMachine.makeCoffe();
      assert.equal(initialWater - 15, coffeeMachine.waterAmmount);
      assert.equal(initialCoffee - 5, coffeeMachine.coffeAmount);
    });

    it("Metoda makeCoffe() vraca poruku da nije moguce napraviti kavu jer nemamo dovoljno vode ili kave te onemogucuje pravljenje kave", function () {
      let spy = sinon.spy(console, "log");
      coffeeMachine.waterAmmount = 0;
      coffeeMachine.coffeAmount = 0;
      let initialWater = coffeeMachine.waterAmmount;
      let initialCoffee = coffeeMachine.coffeAmount;
      coffeeMachine.makeCoffe();
      assert.equal(initialWater, coffeeMachine.waterAmmount);
      assert.equal(initialCoffee, coffeeMachine.coffeAmount);
      assert(
        spy.calledWith(
          "You don´t have enough amount of ingredients for making coffe. Please refill!"
        )
      );
      spy.restore();
    });
  });
});
