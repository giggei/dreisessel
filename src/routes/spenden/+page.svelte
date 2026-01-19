<script>
	//import timeline from '$lib/assets/data/timeline.json';
	import QRCode from './QRCode.svelte';
</script>

<svelte:head>
	<title>Spenden</title>
</svelte:head>

<section class="py-20 bg-white">
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<div class="relative">
			<h1 class="font-bold text-3xl mb-4 text-gruen">Unterstützen Sie uns!</h1>
			<p class="mb-6">
				Nun kennen Sie alle Hintergründe - von der beeindruckenden Geschichte des
				Dreisesselschutzhauses über die Umbaupläne bis hin zum neuen Pächter. Lassen Sie uns das
				vielversprechende Konzept für das Dreisesselschutzhaus gemeinsam realisieren. Wir freuen uns
				über kleine Beträge von Privatpersonen ebenso wie über größere Beiträge von Unternehmen, um
				unser Ziel zu erreichen.
			</p>
			<p class="mb-6">
				Alle Spender und der aktuelle Spendenstand werden regelmäßig auf der Webseite des
				Fördervereins Dreisesselschutzhaus veröffentlicht. Möchten Sie hier nicht genannt werden,
				dann teilen Sie uns das bitte im Betreff Ihrer Spende oder per E-Mail
				(info@waldverein-dreisessel.de) mit. Selbstverständlich erhalten Sie von uns auf Wunsch auch
				eine Spendenquittung.
			</p>

			<div class="flex flex-col place-items-center">
				<h1 class="font-bold text-3xl mb-4 text-gruen">
					Bitte überweisen Sie Ihre Spende auf folgendes Konto:
				</h1>

				<div
					class="flex place-items-center w-full max-w-2xl p-4 shadow-lg rounded-sm border border-gray-200"
				>
					<div>
						<blockquote>
							<div>
								<div class="text-gray-800 sm:text-xl">
									<em>
										<p><b>Förderverein Schutzhaus Dreisessel e.V.</b></p>
										<p>IBAN: DE03 7406 1101 0201 8124 16</p>
										<p>BIC: GENODEF 1RGS</p>
										<p>Betreff: Spende Schutzhaus Dreisessel</p>
									</em>
								</div>
								<br />
								<QRCode />
								Scannen Sie einfach diesen Code mit Ihrer Banking-App!
							</div>
						</blockquote>
					</div>
				</div>

				<h1 class="font-bold text-3xl my-4 text-gruen">Vielen Dank an alle Spender!</h1>
			</div>

			<!-- component -->

			<section class="antialiased text-gray-600">
				<div class="flex flex-col place-items-center">
					<h1 class="font-bold text-2xl">Aktuelle Spendensumme: 560.768,75 €</h1>
					<div class="mb-2">(Stand: 16.07.2025)</div>

					<div
						class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200"
					>
						<header class="px-5 py-4 border-b border-gray-100">
							<h2 class="font-semibold text-gray-800">Spenden ab 5000€</h2>
						</header>
						<div class="p-3">
							<div class="overflow-x-auto">
								<table class="table-auto w-full">
									<tbody class="text-sm divide-y divide-gray-100">
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Knaus Tabbert AG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">PARAT GmbH & Co. KG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">RGR Real-Estate-One GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Richter, Ottensoos</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">BPR Dr. Schaepertoens Consult GmbH & Co. KG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Mayerhofer, Hoch-Tief und Ingenieurbau GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">SPARKASSE Passau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Pfaffinger Josef Bauunternehmung GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Rosenberger Johann</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Grunberger Matthias GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Raiffeisen Passau Nord</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Gemeinde Neureichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Sparkassenbezirkverband Ndb.</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Jakob Claus</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Wir Waermen KG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Herzig Sanitär</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schmöller Helmut</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Tourismusverein am Dreisessel (Quälspaß)</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Resch Baptist</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Hoffmann Johann (Schreinerei)</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Schmidbauer Dr. Siegfried u. Dagmar</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Rosenium GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">ILE Abteiland</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Weigerstorfer Haustechnik</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Schmidbauer Dr. Siegfried u. Dagmar</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Rosenium XXI Gut Oberfrauenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">RAIBA Gewinnsparverein</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">RAIBA Wegscheid</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Modehaus Garhammer</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Pullman City Westernstadt</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Hotel Reischlhof Wegscheid</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Landrefugium Obermüller Untergriesbach</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Hotel Hüttenhof Grainet</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Landhaus zur Ohe Schönberg</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Hotel Jagdhof Röhrnbach</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Strobl Bau GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Landkreis Freyung-Grafenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">1. Bier- und Wohlfühlhotel  Gut Riedelsbach GmbH  & Co.KG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Johann Rosenberger</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Sitter Bernhard (Tourismus Marketing)</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Josef Rädlinger Bauunternehmen Windorf</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<header class="px-5 py-4 border-b border-gray-100">
							<h2 class="font-semibold text-gray-800">Spenden von 1000€ bis 4999,99€</h2>
						</header>
						<div class="p-3">
							<div class="overflow-x-auto">
								<table class="table-auto w-full">
									<tbody class="text-sm divide-y divide-gray-100">
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Eggerstorfer Aßberg</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Gross Karl-Heinz Moos</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">KDNR bulicek+ingeneure GmbH Passau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">PRO BAU Ingenieur- und Rohrleitungsbau GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Herzig GmbH Waldkirchen</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Franz Schelle GMBH & CO KG Pfaffenhofen</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Karl Bachl Röhrnbach</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Bermann Frieda Lackenhäuser</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Bermann Walter Lackenhäuser</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Nebl Walter und Michael Neureichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Dr. Bernhard Becker Wandenburg</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Fuchs Helmut Passau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Garhammer Modehaus Waldkirchen</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schäfer Harald</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Hl. Geist Apotheke Dr. Birgit Schröger</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Holz Balk GmbH & Co.KG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Marienapotheke Franz Bumberger</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">ageno Dr. Amann Gerauer Noebauer</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Gibis Christine und Franz</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Nigl & Mader GmbH technische Planung</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">
													act-consult AG Ingenieurgesellschaft u. Untern.b.
												</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Leipfinger-Bader GMB</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Franz Carl Nüdling Basaltwerke GmbH & CO KG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">FFW Gsenget (Krinninger Josef)</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">JELBA GmbH & co KG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Blössl Norbert Spenglerei</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Estendorfer Franz</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schiermeier Andreas</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Hoertreiter-Buchci Thomas</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Stahl Irrgang Stahlhandel GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">RAIBA Golderner Steig</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">RAIBA Dreisessel</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kittl Johann</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Angerer Reiner</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Knödlseder Josef</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">m4 Ingenieure GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schmöller Helmut</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Eichenseer Alfred, Andreas</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Czornik Dr. Markus</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Grundmüller Georg</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Hurler August</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Altendorfer Kunststofftechnik GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Marienapotheke</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Hilti Deutschland AG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Jakob Metall am Bau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Ploechinger Thomas</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Roehrl & Keil GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Muthmann Alexander</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Geosystem GBK GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Bayerische Staatsforsten AöR</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Bermann Walter</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Edelmann Ingrid und Karl</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Coole-Decken-Designkühldecken</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Essl GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Breitenfellner Erwin Transport GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Weigerstorfer GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Vogl Bäckerei</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Gemeinde Tourismus</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kühberger Metallbau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kultur und Theaterverein e.V.</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Bumberger Erwin und Sylvia</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Fuchs Alois Schreinerei Dorn</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Stadt Waldkirchen</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Waldvereinssektion Freyung</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Akustikbau Haydn & Oberneder GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Mühldorfer Bettenhaus</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Drent und Herent</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kneidinger GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Auto Denk GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Götz Michael</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Pumpen Pauli</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schaepertoens Bernhard</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Berr Kurt Malerbetrieb</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Probsteder Gerüstbau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Weikl GmbH & Co. KG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schmöller Helmut</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">W. Markgraf GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Gaas Florian</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Fa. Richter Johannes Ingenieur Gesellschaft</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Richter-Gomes</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<header class="px-5 py-4 border-b border-gray-100">
							<h2 class="font-semibold text-gray-800">Spenden bis 999,99€</h2>
						</header>
						<div class="p-3">
							<div class="overflow-x-auto">
								<table class="table-auto w-full">
									<tbody class="text-sm divide-y divide-gray-100">
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Raab, Heinz Neureichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Boehm Michael Anzing</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">IGL Putz + Partner</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Ralph Peschl</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Drs. Knollmüller Waldkirchen</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Sparkasse FRG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schmidbauer Dr. Siegfried und Dagmar</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schroeger Rita</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Forst Grabmeier Horst Neureichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Waldverein Sektion (2019) Freyung</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Jagdreviere Alt-und Neureichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schmöller Anna Waldkirchen</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Mang Reinhard</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Nave Heinz und Gabriele</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Limmer Waldkirchen</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Raab Margit und Franz Neureichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Gaaß Ludwig Neureichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">M.Lang und S. Koblbauer</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Dersch Waldkirchen/lackenhäuser</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Meinzel Monika</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Beyer Hans</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Egger Klaudia</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Pollner Schreibwaren</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Raab Margit und Franz Neureichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Lutz Marion und Christoph</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">HIB Eisenwaren Waldkirchen</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Gell Dominik</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Maria Peter</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Huber Brigitte</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Praxl Paul</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Stadlbauer Günther und Veronika</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Stockinger Max und Andrea</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Fischer Miachel</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Taeger Christoph</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kittl Max</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Gemeinderat Neureichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Auto Kornexl & Lenz GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Geier Dr. Wolfgang und Edith</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Brunner Max</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Spitzenberger Otto</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Monika Bloessl</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Achim Baier</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kaspar Reinhold</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Brunner Franz und Marianne</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Jagdgenossenschaft Gsenget (Fesl Herbert)</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Sektion Leopoldsreut</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">
													Fischereiverein Neureichenau (Penzenstadler Werner)
												</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Stockinger Thomas GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Tourismusverein Altreichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Plank Norbert</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Radspieler Manuela u. Bauer Christian</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Bermann Hans</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Weidner Elisabeth</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kern Wolfgang, Jagdpächter</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Brunner Holding GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Jaschke Barbara und Klaus</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Holz Peter OHG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Süss Ludwig</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Pohl Hans-Jürgen</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kindermann Josef und Stefan</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">B & M Handels GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Aporta Jutta und Rolf</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Roeder Tanja</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Ritzer Thomas</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Waldverein Ebersberg</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Panzer Manfred</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Bauzentrum Segl</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Weber Max</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schützenverein Drei-Länder-Eck, Thuer Daniela</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Weigerstorfer Walter</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Seliger Rainer</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Winkelmann Dr. Dieter und Maria</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Riedl Florian</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Wirtschaftsjunioren Kuchler Josef</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Held Michael</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">SSP Planung GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Bouille Jacques</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Wirkert Josef und Anna</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Hartl Christine</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Bumberger Gabriele und Alois</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schmid Ingrid</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Oberneder Herbert</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Weigerstorfer Helmut</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schwind Bauingenieure</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Hoyer Andreas</div>
											</td>
										</tr>

										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Hoyer Waltraud</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Gutsmiedl Josef</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Maier Franz</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Edelmann Ilse und Karl</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kühberger Metaltechnik GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schiebelsberger Rudolf und Walter</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Bavaria Briefmarken Markus Sitter e.K.</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">S.V. Neureichenau e.V.</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">FC Dreisessel</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Möbel Weidinger GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schmöller Wolfgang</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Berschneider + Berschneider GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Süß Ludwig</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">FFW Lackenhäuser Königseder Michael</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Rotary-Club-FRG Sozialfonds</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Vogl Johann</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kreikenbaum Jörg und Susann</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schauberger GmbH & Co. KG</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Baumaschinen Weidinger</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Frick Konrad Dr.Dr.</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Jagdgenossenschaft Neureichenau Schramm Joachim</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kath.Kirchenst. Neureichenau Altenclub</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Sektion Frauenau Waldverein</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Praxl Sunnhild</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Harnisch Felicitas und Karl-Rüdiger</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Burlefinger Sebastian</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Jagdgenossenschaft Lackenhäuser Rudolf Essl</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Meier Leonhard</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Atzesdorfer Max Bau GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Haydn Herbert Autohaus</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Krammer Michael Autohaus</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Massinger Josef</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">KDFB Neureichenau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Paukner Alexander und Elisabeth</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kremer Christian Erlebnisakademie</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Prassl Stephan</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Limmer Oswald</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Theresia und Josef Madl</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Betonsägearbeiten und Kernbohrungen Vogl GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Anetzberger Maximilian</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Weber Elke</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schwaiger Manfred</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Dr. Reinhard August Roth und Christa Roth</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kobler-Rosing</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">DJK-SSC Lackenhäuser</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Thür Stefan</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Nigl & Mader GmbH technische Planung</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Denk E-Bike Center</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Mörtl Eduard Textilreinigung</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Hitzler Ludwig</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Weidner Elisabeth</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Madl Josef (Leopoldsreut)</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Blössl Norbert Spenglerei</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kapfer Johann</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schuster Bernd</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">E. Gottinger-Jany & M. Gottinger</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Thuer Stefan</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Kittl Josef E.K.</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Hackinger Daniel</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Ebner Ernst und Roswitha Wiesenbart</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Garhammer Vereinswoche</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Reis Patricia e Silva</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Jagdgenossenschaft Altreichenau Obergroßberger Josef</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Müller Josef Estrichbau</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Süß Ludwig</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Pauli Erwin</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Sterz Michael</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Limmer Oswald</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Sezgin Talu  Zahnärzte am Dreisessel</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Gibis Max</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Dr. Olaf Heinrich</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Stockinger Simon</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Schmid Eduard und Anneliese</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Scheibelberger Sandra</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Niedermeier Max</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap">
												<div class="text-left">Pichler Kirstin und Martin</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Brunner Franz</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Helbig Roland</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Gutsmiedl Josef und Elisabeth</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Schönenberg Axel</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Raiffeisenbank Vilshofen</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Gutsmiedl Josef und Elisabeth</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Freund Roland Stefan</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Muthmann Alexander</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Ruland Renate</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Limmer Oswald</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Blümel Johannes</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Krieg Heinrich</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Beyer Jakob & Marianne</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">König Max</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Frank Anton</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">fritzoffice GmbH</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Blumen Fixx a. Hartenberger</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Weinberger Helga</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Heinrich Anne-Rose & Heinrich</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Limmer Oswald</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Landrefugium Obermüller Untergriesbach</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Landhotel Haus Waldeck - Mitterfirmiansreut</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Limmer Oswald</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Franz Brunner</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Holz Resch</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Gumminger Resi</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Kirschner Maria</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Dickenberger Thomas</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Spitzer Waltraud</div>
											</td>
										</tr>
										<tr>
											<td class="p-2 whitespace-nowrap"
												><div class="text-left">Reischl Christian</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</section>
