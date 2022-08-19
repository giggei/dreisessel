<script>
	import west from '$lib/assets/West.png';
</script>

<!-- component -->
<section class="py-20 bg-white">
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<div class="relative">
			<h1 class="font-bold text-3xl mb-4">Die Renovierungspläne</h1>

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
			<div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
				<img class="rounded-lg shadow-xl" src={west} alt="" />
			</div>
			<div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
				<p class="mb-2 text-sm font-semibold leading-none text-left text-green-600 uppercase">
					Nordseite
				</p>
				<h3 class="mt-2 text-2xl">Überschrift</h3>
				<p class="mt-5">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
				</p>
			</div>
		</div>
		<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
			<div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
				<img class="rounded-lg shadow-xl" src={west} alt="" />
			</div>
			<div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
				<p class="mb-2 text-sm font-semibold leading-none text-left text-green-600 uppercase">
					Nordseite
				</p>
				<h3 class="mt-2 text-2xl">Überschrift</h3>
				<p class="mt-5">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
				</p>
			</div>
		</div>
		<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
			<div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
				<img class="rounded-lg shadow-xl" src={west} alt="" />
			</div>
			<div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
				<p class="mb-2 text-sm font-semibold leading-none text-left text-green-600 uppercase">
					Nordseite
				</p>
				<h3 class="mt-2 text-2xl">Überschrift</h3>
				<p class="mt-5">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
				</p>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<div class="relative">
			<h1 class="font-bold text-3xl mb-8">Zeitplan</h1>

			<div class="relative space-y-12 max-w-7xl xl:px-12 flex flex-col px-8 mx-auto">
				<div
					class="absolute hidden w-px h-full transform -translate-x-1/2 bg-green-600 lg:block left-1/2"
				/>
				<div class="space-y-12 lg:space-y-8">
					<!-- Left section -->
					<div>
						<div class="flex flex-col items-center">
							<div class="flex items-center justify-start mt-10 lg:mt-0 w-full mx-auto">
								<div class="w-full lg:w-1/2 lg:pr-8">
									<div class="p-4 bg-white rounded shadow-lg">
										<p
											class="mb-2 text-sm font-semibold leading-none text-left text-green-600 uppercase"
										>
											September 2022
										</p>
										<p>Baubeginn (Dacharbeiten)</p>
									</div>
								</div>
							</div>
							<div
								class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-600 border-2 border-green-200 rounded-full left-1/2 sm:translate-y-0"
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
											class="mb-2 text-sm font-semibold leading-none text-left text-green-600 uppercase"
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
								class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-600 border-2 border-green-300 rounded-full left-1/2 sm:translate-y-0"
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
											class="mb-2 text-sm font-semibold leading-none text-left text-green-600 uppercase"
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
								class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-600 border-2 border-green-200 rounded-full left-1/2 sm:translate-y-0"
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
											class="mb-2 text-sm font-semibold leading-none text-left text-green-600 uppercase"
										>
											APRIL-JUNI 2023
										</p>
										<p class="text-sm text-green-600 mb-2">
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
								class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-600 border-2 border-green-300 rounded-full left-1/2 sm:translate-y-0"
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
											class="mb-2 text-sm font-semibold leading-none text-left text-green-600 uppercase"
										>
											30. Juli 2023
										</p>
										<p>Abschluss der Bauarbeiten</p>
									</div>
								</div>
							</div>
							<div
								class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-600 border-2 border-green-200 rounded-full left-1/2 sm:translate-y-0"
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
