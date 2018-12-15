#Generátor dat pro projekt do předmětu Strojové učení a dobývání znalostí.

Generátor dat slouží ke pohodlnému generování dat pro testování algoritmů strojového učení. Generátor umí generovat body ve 2D prostoru a definovat jim kategorie. Generátor generuje data v CSV formátu, kde každý řádek odpovídá jednomu vygenerovanému bodu.
Každý řádek je zapsaný ve formátu: hodnota souřadnice x, hodnota souřadnice y, číslo kategorie.

###Instalace a používání:

Generátor je napsán čistě pomocí html a javascriptu a je možné ho používat online na adrese:
https://cdn.rawgit.com/asketak/machine-learning-project/master/gen-data/Sample_Generator.html

#####nebo 

stáhnout
`svn export https://github.com/asketak/machine-learning-project/trunk/gen-data`

a otevřít html soubor v prohlížeči
`see gen-data/Sample_Generator.html`


###Ovládání generátoru:

Datový záznam vygenerujete kliknutím do 2d plochy na vrchu stránky.

Pole **width** a **height** slouží ke změně šířky a výšky 2D plochy pro zadávání bodů.
Změnu šířky a výšky potvrdíte tlačítkem **Change Canvas Size**

Pomocí **grid granularity** můžete změnit rozteč mřížky. To se hodí v případě zatržení přepínače **Snap to grid**.
Tlačítko **Snap to Grid** umožňuje, aby vygenerované body vždy ležely na průsečících mřížky. Defaultně je rozteč mřížky rovná 1 a vygenerované body tak mají celočíselné souřadnice. Při nastavení **grid granularity** například na 0.5 pak budou všechny souřadnice vygenerovaných bodů násobkem 0.5.

Přepínač **generate labels** mění, jestli se ve vygenerovaném souboru má nacházet třetí sloupec(kategorie bodů)


**generate samples** vygeneruje textový soubor s daty.
**Copy to clipboard** zkopíruje obsah souboru do schránky.
**Clear canvas** vymaže vygenerované body a umožní generovat novou datovou sadu od začátku.
**Select pointer color** vybere barvu(kategorii) pro body, které budou dále generovány.