function druckeVersandticketDruckerInJessicasZimmer(kunde, anschrift) {
    console.log(kunde)
}


function berechneBetrag(einzelstückpreis, anzahl) {
    console.log(einzelstückpreis + "€ x " + anzahl + " = " + einzelstückpreis*anzahl + "€")
    druckeRechnung(einzelstückpreis, anzahl)
}

function druckeRechnung(einzelstückpreis, anzahl) {
    console.log(einzelstückpreis*anzahl + "€")
}
// wenn ich statt dem plus ein komma mache wird mir das Eurozeichen in der Konsole grün angezeigt und steht in Anführungszeichen: '€' - wieso und wie umgeh ich das?

function order(kunde, anschrift, einzelstückpreis, anzahl) {
    druckeVersandticketDruckerInJessicasZimmer(kunde, anschrift)
    berechneBetrag(einzelstückpreis, anzahl)
}

order("Philipp Hellwich", "Am Hölzlein 18", 12, 10)



// Implementiere eine neue Funktion druckeRechnung(), die mit dem errechneten Betrag aufgerufen wird. Diese soll auf der Konsole den berechneten Betraus ausgeben.
