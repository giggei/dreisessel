<script>
	import nord from '$lib/assets/Nord.png';
	import ost from '$lib/assets/Ost.png';
	import sued from '$lib/assets/Sued.png';
	import west from '$lib/assets/West.png';
	import schutzhaus from '$lib/assets/schutzhaus.jpg';
</script>

<svelte:head>
	<title>Umbau</title>
	<html lang="de"></html>
</svelte:head>

<!-- Background image TODO: Eigene Componente -->
<div
	class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
	style="
   background-image: url({schutzhaus});
   background-position: center; 
   height: 500px;
 "
>
	<div
		class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
		style="background-color: rgba(0, 0, 0, 0.6)"
	>
		<div class="flex justify-center items-center h-full">
			<div class="text-white">
				<!--
				<h2 class="font-semibold text-4xl mb-4 text-beige">Förderverein Schutzhaus Dreisessel</h2>
				<h4 class="font-semibold text-xl mb-6 text-beige">Willkommen</h4>
				-->
			</div>
		</div>
	</div>
</div>
<!-- Background image -->

<!-- component -->
<section class="py-20 bg-white">
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<div class="relative">
			<h1 class="font-bold text-3xl mb-4 text-gruen">Die Renovierungspläne</h1>
			<p class="mb-6">
				Es sieht immer noch wunderschön aus, das Dreisesselschutzhaus, aber so langsam ist es in die
				Jahre gekommen. Eine Renovierung des geschichtsträchtigen Gebäudes ist unumgänglich. Diese
				muss natürlich mit viel Fingerspitzengefühl geplant und den heutigen Gegebenheiten angepasst
				werden. Dabei geht es vor allem darum, das Gasthaus am Dreisessel wieder für eine breite
				Besucherschicht interessant zu gestalten. Nicht nur Wanderer oder Wirtshausgäste sollen sich
				hier wohlfühlen, sondern auch Familien mit kleinen Kindern, Naturfreunde, Betriebe und
				Vereine, Sportler sowie Kulturinteressierte aus Deutschland, Österreich und Tschechien.
				Zusätzlich werden natürlich geltende Verordnungen wie der Brandschutz und das Thema
				Barrierefreiheit umgesetzt. Nur eine Modernisierung der bestehenden Anlagen kann den
				reibungslosen Betrieb künftig gewährleisten. Ein ambitioniertes Projekt, für das der
				Besitzer des Dreisesselschutzhauses - die Bayerische Waldvereins- Sektion Dreisessel e. V. -
				dringend unsere Unterstützung benötigt. Als Förderverein Dreisesselschutzhaus ist es unser
				Ziel, das notwendige Kapital für die Renovierungsarbeiten bereitzustellen. Dazu sind wir
				natürlich auf zahlreiche Spenden von Firmen und Privatpersonen angewiesen. Helfen auch Sie
				mit, auf dass das Dreisesselschutzhaus bald wieder in voller Pracht erstrahlen kann.
			</p>
			<p class="mb-6">
				Das Dreisesselschutzhaus wird sich durch die Umbaumaßnahmen von außen kaum verändern.
				Lediglich das Dach soll neu gedeckt und die Terrasse erweitert werden. Das ist uns sehr
				wichtig, schließlich handelt es sich um ein traditionsreiches Gebäude von historischem Wert.
				Umso mehr passiert allerdings in den Innenräumen: die Haustechnik erfährt ein Update, die
				Sanitäranlagen werden saniert, eine Erneuerung der Fenster steht an und eine behinderten-
				sowie rollstuhlgerechte Toilette im EG ist eingeplant. Zusätzlich werden die geltenden
				Brandschutzmaßnahmen umgesetzt, damit bald wieder Übernachtungsgäste im Dreisesselschutzhaus
				beherbergt werden können. Eine große Neuerung gibt es dann allerdings doch: Zukünftig soll
				der Pächter direkt im Dreisesselschutzhaus wohnen, weshalb das Konzept für den Umbau eine
				Wohnung und einen Carport beinhaltet.
			</p>
		</div>
		<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
			<img class="rounded-lg shadow-xl max-w-full h-auto" src={nord} alt="" />
		</div>
		<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
			<img class="rounded-lg shadow-xl max-w-full h-auto" src={ost} alt="" />
		</div>
		<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
			<img class="rounded-lg shadow-xl max-w-full h-auto" src={sued} alt="" />
		</div>
		<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
			<img class="rounded-lg shadow-xl max-w-full h-auto" src={west} alt="" />
		</div>
	</div>
</section>
<section>
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<div class="relative">
			<h1 class="font-bold text-3xl mb-8 text-gruen">Zeitplan</h1>

			<div class="relative space-y-12 max-w-7xl xl:px-12 flex flex-col px-8 mx-auto">
				<div
					class="absolute hidden w-px h-full transform -translate-x-1/2 bg-gruen lg:block left-1/2"
				></div>
				<div class="space-y-12 lg:space-y-8">
					<!-- Left section -->
					<div>
						<div class="flex flex-col items-center">
							<div class="flex items-center justify-start mt-10 lg:mt-0 w-full mx-auto">
								<div class="w-full lg:w-1/2 lg:pr-8">
									<div class="p-4 bg-white rounded shadow-lg">
										<p
											class="mb-2 text-sm font-semibold leading-none text-left text-gruen uppercase"
										>
											September 2022
										</p>
										<p>Baubeginn (Dacharbeiten)</p>
									</div>
								</div>
							</div>
							<div
								class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-gruen border-2 border-gruen rounded-full left-1/2 sm:translate-y-0"
							>
								<span class="text-white">1</span>
							</div>
						</div>
					</div>

					<!-- Right section -->
					<div>
						<div class="flex flex-col items-center">
							<div class="flex items-center justify-end mt-10 lg:mt-0 w-full mx-auto">
								<div class="w-full lg:w-1/2 lg:pl-8">
									<div class="p-4 bg-white rounded shadow-lg">
										<p
											class="mb-2 text-sm font-semibold leading-none text-left text-gruen uppercase"
										>
											Herbst/Winter 2022
										</p>
										<p>Fenster</p>
										<p>Terrasse</p>
										<p>Brandschutz</p>
									</div>
								</div>
							</div>
							<div
								class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-gruen border-2 border-gruen rounded-full left-1/2 sm:translate-y-0"
							>
								<span class="text-white">2</span>
							</div>
						</div>
					</div>

					<!-- Left section -->
					<div>
						<div class="flex flex-col items-center">
							<div class="flex items-center justify-start mt-10 lg:mt-0 w-full mx-auto">
								<div class="w-full lg:w-1/2 lg:pr-8">
									<div class="p-4 bg-white rounded shadow-lg">
										<p
											class="mb-2 text-sm font-semibold leading-none text-left text-gruen uppercase"
										>
											Über Winter 2023
										</p>
										<p>Innenrenovierung OG</p>
										<p>• Pächterwohnung</p>
										<p>• Gästezimmer</p>
										<p>• Sanitäranlage</p>
									</div>
								</div>
							</div>
							<div
								class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-gruen border-2 border-gruen rounded-full left-1/2 sm:translate-y-0"
							>
								<span class="text-white">3</span>
							</div>
						</div>
					</div>

					<!-- Right section -->
					<div>
						<div class="flex flex-col items-center">
							<div class="flex items-center justify-end mt-10 lg:mt-0 w-full mx-auto">
								<div class="w-full lg:w-1/2 lg:pl-8">
									<div class="p-4 bg-white rounded shadow-lg">
										<p
											class="mb-2 text-sm font-semibold leading-none text-left text-gruen uppercase"
										>
											APRIL-JUNI 2023
										</p>
										<p class="text-sm text-gruen mb-2">
											in dieser Zeit ist der Berggasthof geschlossen (3 Monate)
										</p>
										<p>Hauptarbeiten EG</p>
										<p>• Küche</p>
										<p>• Toilette</p>
										<p>• Keller</p>
										<p>• barrierefreie Toilette</p>
									</div>
								</div>
							</div>
							<div
								class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-gruen border-2 border-gruen rounded-full left-1/2 sm:translate-y-0"
							>
								<span class="text-white">4</span>
							</div>
						</div>
					</div>

					<!-- Left section -->
					<div>
						<div class="flex flex-col items-center">
							<div class="flex items-center justify-start mt-10 lg:mt-0 w-full mx-auto">
								<div class="w-full lg:w-1/2 lg:pr-8">
									<div class="p-4 bg-white rounded shadow-lg">
										<p
											class="mb-2 text-sm font-semibold leading-none text-left text-gruen uppercase"
										>
											30. Juli 2023
										</p>
										<p>Abschluss der Bauarbeiten</p>
									</div>
								</div>
							</div>
							<div
								class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-gruen border-2 border-gruen rounded-full left-1/2 sm:translate-y-0"
							>
								<span class="text-white">5</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
