function druckeVersandticketDruckerInJessicasZimmer(eins, anschrift) {
    console.log(eins)
}


function berechneBetrag(einzelstückpreis, anzahl) {
    const betrag = einzelstückpreis * anzahl * 1.19
    return betrag
}

function druckeRechnung(rechnungsbetrag) {
    console.log(rechnungsbetrag + "€")
}
// wenn ich statt dem plus ein komma mache wird mir das Eurozeichen in der Konsole grün angezeigt und steht in Anführungszeichen: '€' - wieso und wie umgeh ich das?

function order(kunde, anschrift, einzelstückpreis, anzahl) {
    const hans = berechneBetrag(einzelstückpreis, anzahl)

    druckeVersandticketDruckerInJessicasZimmer(kunde, anschrift)
    berechneBetrag(einzelstückpreis, anzahl)
    druckeRechnung(berechneterBetrag)
}

order("Philipp Hellwich", "Am Hölzlein 18", 12, 10)


