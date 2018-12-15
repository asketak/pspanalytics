# Projekt + data k projektu do machine learning

hl2010h1/2  

id_poslanec	int	Identifikátor poslance, viz poslanec:id_poslanec  
id_hlasovani	int	Identifikátor hlasování, viz hl_hlasovani:id_hlasovani  
vysledek	char(X)	Hlasování jednotlivého poslance. 'A' - ano, 'B' - ne, 'C' - zdržel se (stiskl tlačítko X), 'F' - nehlasoval (byl přihlášen, ale nestiskl žádné tlačítko), '@' - nepřihlášen, 'M' - omluven, 'W' - hlasování před složením slibu poslance, 'K' - zdržel se/nehlasoval. Viz úvodní vysvětlení zpracování výsledků hlasování.  



poslanec:  

id_poslanec	int	Identifikátor poslance  
id_osoba	int	Identifikátor osoby, viz osoba:id_osoba  
id_kraj	int	Volební kraj, viz organy:id_organu  
id_kandidatka	int	Volební strana/hnutí, viz org:id_organu, pouze odkazuje na stranu/hnutí, za kterou byl zvolen a nemusí mít souvislost s členstvím v poslaneckém klubu.  
id_obdobi	int	Volební období, viz organy:id_organu  
....  

  
osoby:  

id_osoba	int	Identifikátor osoby  
pred	char(X)	Titul pred jmenem  
jmeno	char(X)	Jméno  
prijmeni	char(X)	Příjmení  
za	char(X)	Titul za jménem  
narozeni	date	Datum narození, pokud neznámo, pak 1.1.1900.  
pohlavi	char(X)	Pohlaví, "M" jako muž, ostatní hodnoty žena  
zmena	date	Datum posledni změny  
umrti	date	Datum úmrtí  


priklad ziskani dat:  

5932|Mgr.|John|Radek| |06.12.1954|M|||  <- osoby  

1165|5932|581|949|170|\ |\ |\ |\ |\ |\ |\ |\ |\ |1|  <- poslanec.unl <- john ma id poslance 1165  

1165|52361|A|   <- John hlasoval pro v hlasovani cislo 52361  

napral jsem to do sqlite databaze, mozno otevrit v sqlitebrowser, projekt i data ve slozce 'data'  

2010-all.csv obsahuje:  
select osoby.field1, poslanec.field1, poslanec.field4, osoby.field3, osoby.field4, osoby.field6, hl2010h1.field2, hl2010h1.field3 from osoby,poslanec,hl2010h1 where osoby.field1 = poslanec.field2 and hl2010h1.field1 = poslanec.field1  
union  
select osoby.field1, poslanec.field1, poslanec.field4, osoby.field3, osoby.field4, osoby.field6, hl2010h2.field2, hl2010h2.field3 from osoby,poslanec,hl2010h2 where osoby.field1 = poslanec.field2 and hl2010h2.field1 = poslanec.field1;  

coz je:  
id_osoba, id_poslanec, id_kandidatka, jmeno, prijmeni, datum narozeni, cislo hlasovani, vysledek hlasovani  


2010-strany
Obsahuje misto 3. sloupce jmeno strany. Stacilo jen udelat join s tabulkou organy. 

cat 2010-strany.csv | cut -d',' -f3 | sort | uniq  
ANO2011  
CSSD  
KDU-�SL  
KSCM  
ODS  
TOP09  
VV  

id_kandidatka má k jménu strany vztah 1:1 takze je principiálně jedno, jaký ze souborů použijete.