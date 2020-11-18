function druckeVersandticketDruckerInJessicasZimmer(kunde, anschrift) {
    console.log(kunde)
}


function berechneBetrag(einzelstückpreis, anzahl) {
    console.log(einzelstückpreis + "€ x " + anzahl + " = " + einzelstückpreis*anzahl + "€")
}

function order(kunde, anschrift, einzelstückpreis, anzahl) {
    druckeVersandticketDruckerInJessicasZimmer(kunde, anschrift)
    berechneBetrag(einzelstückpreis, anzahl)
}

order("Philipp Hellwich", "Am Hölzlein 18", 12, 10)

// Implementiere eine neue Funktion druckeRechnung(), die mit dem errechneten Betrag aufgerufen wird. Diese soll auf der Konsole den berechneten Betraus ausgeben.
