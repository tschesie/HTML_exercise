function druckeVersandticketDruckerInJessicasZimmer(eins, anschrift) {
    console.log(eins)
}

function berechneBetrag(einzelstückpreis, anzahl) {
    const betrag = einzelstückpreis * anzahl
    return betrag
}

function druckeRechnung(rechnungsbetrag) {
    console.log(rechnungsbetrag + "€")
}

function getBuchungskonto(konto) {
    return konto
}

function order(kunde, anschrift, einzelstückpreis, anzahl, konto) {
    const berechneterBetrag = berechneBetrag(einzelstückpreis, anzahl)
    const kontoName = getBuchungskonto(konto)
    getBuchungskonto(konto)
    druckeVersandticketDruckerInJessicasZimmer(kunde, anschrift)
    berechneBetrag(einzelstückpreis, anzahl)
    druckeRechnung(berechneterBetrag)
}

order("Philipp Hellwich", "Am Hölzlein 18", 12, 10, "Materialkosten")

//ich hab keine Ahnung wieso das nicht geht