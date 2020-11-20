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

function buchhaltung(kontoName) {
    console.log(kontoName)
}

function order(kunde, anschrift, einzelstückpreis, anzahl, konto) {
    const berechneterBetrag = berechneBetrag(einzelstückpreis, anzahl)
    const kontoName = getBuchungskonto(konto)
    druckeVersandticketDruckerInJessicasZimmer(kunde, anschrift)
    druckeRechnung(berechneterBetrag)
    buchhaltung(kontoName)
}

order("Philipp Hellwich", "Am Hölzlein 18", 12, 10, "Materialkosten")

//ist's egal, ob ich in Zeile 29 "kontoName" oder "konto" rein schreibe?
//ich versteh immer noch nicht für was es gut sein soll dieses return in Zeile 7,15 zu haben.