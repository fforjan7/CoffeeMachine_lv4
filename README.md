# CoffeeMachine_lv4

Objasnjenje laboratorijske vjezbe 4

Kako je navedeno u zadatku napravljeni su testovi za klasu CoffeMachine. Klasa sadrzi 3 atributa i 4 metode.
Za testiranje koristeni su Chai, Mocha i NYC(Istambul). Za logiranje u terminal korisen je Sinon.

Prvo je izvrseno testiranje na atributima, bilo je potrebno provjeriti jesu li coffeAmount i waterAmount numericke vrijednosti i je li powerStatus boolean vrijednost. 

Drugi testni slucaj odnosi se na turnMachineOn() metodu. Postoje dva slucaja, ukoliko je stroj prethodno ugasen, potrebno ga je samo  upaliti i drugi slucaj ukolo 
je stroj vec upaljen potrebno je ispisati poruku da stroj vec radi.

Treci tesni slucaj odnosi sea na turnMachineOff() metodu. Slicno kao testiranje turnMachineOn() metode postoje dva slucaja, no poruka se ispisuje ukoliko se ide ugasiti vec ugasen stroj. Ukoliko je stroj upaljen samo se ugasi.

Zadnji tesni slucaj je refill() metoda. Nju smo prvo morali popraviti kako bi zadovoljavala trazene uvijete i umjesto errora da samo zapise poruku u terminal

if (this.coffeAmount >= 5 && this.waterAmmount >= 15) {

...

}else {
  console.log(
    "You don´t have enough amount of ingredients for making coffe. Please refill!"
  );
})


Rezultati testiranja:

Coffe Machine Class unit test:
    Testiranje tipova parametara:
      ✔ coffeAmount mora biti broj
      ✔ waterAmmount mora biti broj
      ✔ powerStatus mora biti bool vrijednost
    turnMachineOn() metoda:
      ✔ Metoda turnMachineOn() vraca Boolean true vrijednost ukoliko je uredaj ugasen
Machine is already turned on !
      ✔ Metoda turnMachineOn() vraca Boolean true vrijednost i ispisuje poruku na konzoli
    turnMachineOff() metoda:
      ✔ Metoda turnMachineOff() vraca Boolean false vrijednost ukoliko je uredaj upaljen
Machine is already turned off !
      ✔ Metoda turnMachineOff() vraca Boolean false vrijednost i ispisuje poruku na konzoli
    refill() metoda:
Machine refilled !
      ✔ Metoda refill() vraca status 200 ukoliko su parametri u numerickom obliku i ispisuje poruku na konzoli
      ✔ Metoda refill() vraca gresku ukoliko parametri nisu numerickog oblika
    makeCoffe() metoda:
      ✔ Metoda makeCoffe() moze napraviti kavu dok ima vise od 5g kave i 15 ml vode
You don´t have enough amount of ingredients for making coffe. Please refill!
      ✔ Metoda makeCoffe() vraca poruku da nije moguce napraviti kavu jer nemamo dovoljno vode ili kave teonemogucuje pravljenje kave


  11 passing (7ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 zad1.js  |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
