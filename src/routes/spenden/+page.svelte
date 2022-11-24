<script>
	//import timeline from '$lib/assets/data/timeline.json';
	import QRCode from './QRCode.svelte';
</script>

<svelte:head>
	<title>Spenden</title>
	<html lang="de" />
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
								<p class="text-gray-800 sm:text-xl">
									<em>
										<p><b>Förderverein Schutzhaus Dreisessel e.V.</b></p>
										<p>IBAN: DE03 7406 1101 0201 8124 16</p>
										<p>BIC: GENODEF 1RGS</p>
										<p>Betreff: Spende Schutzhaus Dreisessel</p>
									</em>
								</p>
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
					<h1 class="font-bold text-2xl">Aktuelle Spendensumme:  120.207,58 €</h1>
					<div class="mb-2">(Stand: 21.11.2022)</div>

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
												<div class="text-left">Josef Rädlinger Bauunternehmen Windorf</div>
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
												<div class="text-left">Franz Schelle GMBH &CO KG Pfaffenhofen</div>
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
												<div class="text-left">act-consult AG Ingenieurgesellschaft u. Untern.b.</div>
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
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Raab, Heinz Neureichenau</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Boehm Michael Anzing</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">IGL Putz + Partner</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Ralph Peschl</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Drs. Knollmüller Waldkirchen</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Schmidbauer Dr. Siegfried und Dagmar</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Schroeger Rita</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Forst Grabmeier Horst Neureichenau</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Waldverein Sektion (2019) Freyung</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Jagdgenossenschaft Alt-und Neureichenau</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Schmöller Anna Waldkirchen</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Mang Reinhard</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Nave Heinz und Gabriele</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Limmer Waldkirchen</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Raab Margit und Franz Neureichenau</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Gaaß Ludwig Neureichenau</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">M.Lang und S. Koblbauer</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Dersch Waldkirchen/lackenhäuser</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Meinzel Monika</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"><div class="text-left">Beyer Hans</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Egger Klaudia</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Pollner Schreibwaren</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Raab Margit und Franz Neureichenau</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">Lutz Marion und Christoph</div></td
											></tr
										>
										<tr
											><td class="p-2 whitespace-nowrap"
												><div class="text-left">HIB Eisenwaren Waldkirchen</div></td
											></tr
										>
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
												<div class="text-left">Fischereiverein Neureichenau (Penzenstadler Werner)</div>
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