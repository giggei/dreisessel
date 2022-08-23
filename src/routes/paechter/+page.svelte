<script>
	import paechter from '$lib/assets/schmoeller1.jpg';
	import zimmer from '$lib/assets/zimmer.jpg';
	import wirtshaus from '$lib/assets/wirtshaus.jpg';
	import familie from '$lib/assets/familie.jpg';
	import sportler from '$lib/assets/sportler.jpg';
	import natur from '$lib/assets/natur.jpg';
</script>

<section class="py-20 bg-white">
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<div class="relative">
			<h1 class="font-bold text-3xl mb-4 text-gruen">Der neue Pächter & sein Team</h1>
			<p class="mb-6">
				Philipp Schmöller und sein Team wollen künftig für frischen Wind auf dem Dreisessel sorgen.
				Als ausgebildeter Koch mit langjähriger Berufserfahrung bringt er dafür beste
				Voraussetzungen mit – und viele durchdachte Ideen. Die nötige Unterstützung bei der
				Umsetzung erhält der gebürtige Waldkirchener von seiner Familie und Freunden.
			</p>
			<img class="rounded-lg shadow-xl max-w-full h-auto" src={paechter} alt="" />
		</div>

		<div class="bg-white border rounded-md shadow-lg dark:border-gray-100 p-4">
			<div class="flex p-4">
				<div class="">
					<blockquote class="relative">
						<svg
							class="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
								fill="currentColor"
							/>
						</svg>

						<div class="relative">
							<p class="text-gray-800 sm:text-xl">
								<em>
									Zusammen ergänzen wir uns optimal und sehen uns dieser Herausforderung gewachsen.
									Durch unsere sehr unterschiedlichen Berufe und auch Charaktere bilden wir ein
									unschlagbares Team, das mit großer Vorfreude auf den Start am Dreisessel blickt.</em
								>
							</p>
						</div>
					</blockquote>
				</div>
			</div>
		</div>

		<div class="relative">
			<h1 class="font-bold text-3xl mb-2 text-gruen">Für jeden das passende Angebot</h1>
		</div>

		<div class="flex flex-col mb-8 animated fadeIn lg:flex-row">
			<div class="flex items-center mb-8 lg:w-1/2 lg:order-last">
				<img class="rounded-lg shadow-xl" src={zimmer} alt="" />
			</div>
			<div class="flex flex-col justify-center mt-5 mb-8 lg:w-1/2 lg:pr-16">
				<h3 class="mt-2 text-2xl text-gruen">Ein Herzliches Willkommen</h3>
				<p class="mt-5">
					Das Gasthaus am Dreisessel soll ein gemütlicher Treffpunkt werden. Ein Wirtshaus, in dem
					frisch zubereitetes Essen serviert wird. Dazu gibt es eine vielseitige Getränkeauswahl mit
					alkoholfreien Getränken, guten Weinen, regionalen Bieren und edlen Bränden.
					Selbstverständlich wird darüber hinaus an wichtigen Traditionen wie dem Reindlessen
					festgehalten. Neben der Bewirtung werden zukünftig wieder Übernachtungen angeboten. Auf
					alle Übernachtungsgäste wartet ein spezielles Programm mit einem Willkommensgetränk auf
					derTerrasse, zünftigem Hüttenabend mit stärkenden Mahlzeiten sowie einem zur Region
					passenden Frühstück. Und auch an der Barrierefreiheit wird mit Hochdruck gearbeitet. Eine
					behindertengerecht zugängliche Toilette ist für das Erdgeschoss eingeplant, sodass bald
					auch Rollstuhlfahrer und Gehbehinderte das Gasthaus am Dreisessel ohne Probleme besuchen
					können.
				</p>
			</div>
		</div>

		<div class="relative">
			<p class="mb-6">
				Der Dreisessel ist einer der bekanntesten und am stärksten frequentierten Berge im
				Bayerischen Wald. Zum einen verfügt er über eine Vielzahl an Wegen für Wanderer und
				Fahrradfahrer und zum anderen über eine ausgebaute Zufahrtsstraße, immer für einen Besuch
				interessant.
			</p>
		</div>

		<div class="flex flex-col mb-8 animated fadeIn lg:flex-row">
			<div class="flex items-center mb-8 lg:w-1/2">
				<img class="rounded-lg shadow-xl" src={familie} alt="" />
			</div>
			<div class="flex flex-col justify-center mt-5 mb-8 lg:w-1/2 lg:pl-16">
				<h3 class="mt-2 text-2xl text-gruen">Familien</h3>
				<p class="mt-5">
					Für Familien ist der Dreisessel ein ideales Ausflugsziel. Durch den nahegelegenen
					Parkplatz müssen Familien mit kleinen Kinder keine langen Strecken zu Fuß zurücklegen, um
					das Dreisesselschutzhaus zu erreichen. Diese optimalen örtlichen Gegebenheiten werden mit
					familienfreundlichen Angeboten ergänzt, zum Beispiel mit einer ansprechenden Speisekarte
					für Kinder, einer Spielecke im Innen- und einem Spielplatz im Außenbereich. Durch die
					Bereitstellung von Wassernäpfen und Hundekörben sollen sich zudem auch alle Vierbeiner
					rundum wohlfühlen.
				</p>
			</div>
		</div>

		<div class="flex flex-col mb-8 animated fadeIn lg:flex-row">
			<div class="flex items-center mb-8 lg:w-1/2 lg:order-last">
				<img class="rounded-lg shadow-xl" src={wirtshaus} alt="" />
			</div>
			<div class="flex flex-col justify-center mt-5 mb-8 lg:mt-0 lg:w-1/2 lg:pr-16">
				<h3 class="mt-2 text-2xl text-gruen">Wirtshausgäste</h3>
				<p class="mt-5">
					Für alle Wirtshausgäste liegt der Fokus ganz klar auf dem gastronomischen Angebot. Die
					Tradition des Reindlessens am Dreisesselberg wird für sie auf jeden Fall aufrecht
					erhalten. Bei der Speisekartengestaltung konzentiert sich der neue Pächter Philipp
					Schmöller auf die drei Länder, die am Dreisesselberg aufeinandertreffen – Deutschland,
					Österreich und Tschechien. Kaiserschmarrn, Moosbeernockerl sowie böhmische Knödel bieten
					sich als „Schmankerl“ an, um die verschiedenen Kulturen am Dreisessel miteinander zu
					verbinden. Ebenso wichtig wie das Essensangebot ist die Getränkeauswahl. Es wird den
					Gästen beste Qualität geboten um ihnen die kulinarischen Traditionen der Nachbarländer
					näherzubringen. Es werden Getränke von Brauereien, Brennereien und Kaffeeröstereien aus
					den drei Ländern serviert. Mit dem Angebot von Abendessen im Berggasthof Dreisessel kann
					das volle Potential der Innenräume sowie zusätzlich im Sommer der Terrasse ausgeschöpft
					werden. Essensbestellungen werden zukünftig immer bis um 20:30 Uhr möglich sein.
					Zusätzlich zur Speisekarte sind Specials wie der „Braterl-Sonndog“ geplant, bei dem jeden
					Sonntagmittag auf Vorbestellung ofenfrische Braten (z. B. Schweinebraten, Brathendl oder
					Ripperl) mit entsprechenden Beilagen serviert werden. Ein besonderes Augenmerk liegt
					außerdem auf der Biergartenkultur, die im Sommer auf dem Dreisessel belebt werden soll.
					Dazu wird auch ein Bereich geschaffen, in dem die Gäste sich ihre Brotzeit selbst
					mitnehmen können und dazu die Getränke im Berggasthof Dreisessel bestellen.
				</p>
			</div>
		</div>

		<div class="flex flex-col mb-8 animated fadeIn lg:flex-row">
			<div class="flex items-center mb-8 lg:w-1/2">
				<img class="rounded-lg shadow-xl" src={sportler} alt="" />
			</div>
			<div class="flex flex-col justify-center mt-5 mb-8 lg:w-1/2 lg:pl-16">
				<h3 class="mt-2 text-2xl text-gruen">Sportler</h3>
				<p class="mt-5">
					Der Gipfel des Dreisesselbergs ist das Ziel vieler Sportler. Diese Gruppe hat besondere
					Bedürfnisse, die im Gasthaus erfüllt werden. Im Winter kehren Tourenskigeher und
					Winterwanderer gerne nach dem Aufstieg am Gipfel ein. Es ist ein Raum vorhanden, in dem
					trockene Wechselkleidung angezogen werden kann. Zusätzlich wird es in den sanitären
					Einrichtungen Ablagen und Haken für Rucksäcke und Kleidung geben. Aus gastronomischer
					Sicht sind Events wie ein „Sportler-Frühschoppen“ am Samstagvormittag denkbar, z.B. ein
					Weißwurst-Frühstück, bei dem sich sporbegeisterte Menschen aus Böhmen, Österreich und
					Niederbayern treffen können. Regelmäßige Events wie dieses sind notwendig, um einen Ort
					der Zusammenkunft zu schaffen, woraus sich neue Freundschaften mit Gleichgesinnten
					entwickeln.
				</p>
			</div>
		</div>

		<div class="flex flex-col mb-8 animated fadeIn lg:flex-row">
			<div class="flex items-center mb-8 lg:w-1/2 lg:order-last">
				<img class="rounded-lg shadow-xl" src={natur} alt="" />
			</div>
			<div class="flex flex-col justify-center mt-5 mb-8 lg:mt-0 lg:w-1/2 lg:pr-16">
				<h3 class="mt-2 text-2xl text-gruen">Naturfreunde</h3>
				<p class="mt-5">
					Auch alle Naturfreunde, die sich am Dreisessel aufhalten, kommen künftig in den Genuss
					mehrerer, auf sie zugeschnittene Angebote. Experten, die sich intensiv mit den heimischen
					Bergen, Fauna-Flora- Habitat auskennen, steht ein Raum für Vortragsreihen zur Verfügung im
					Berggasthof Dreisessel. Außerdem sind geführte Wanderungen mit Fachleuten angedacht, bei
					denen der Fokus beispielsweise auf heimischen Pflanzen, auf dem Tierreich oder der
					geschichtlichen Entstehung liegt. Literarische Wanderungen auf den Spuren des Dichters
					Adalbert Stifter können bei Interesse in deutscher, tschechischer oder englischer Sprache
					angeboten werden, um möglichst viele Leute zu erreichen.
				</p>
			</div>
		</div>

		<div class="relative">
			<h3 class="mt-2 text-2xl text-gruen">Betriebe und Vereine</h3>
			<p class="my-6">
				Die Region Bayerisches Wald beherbergt eine Vielzahl von Unternehmen und Vereinigungen, die
				bald zum festen Kundenstamm des Berggasthofs Dreisessel gehören sollen. Angefangen von
				Vorträgen bis hin zu Weihnachtsfeiern und Jahreshauptversammlungen soll alles möglich sein –
				perfekt abgestimmt auf die jeweiligen Wünsche. Für das Vorführen von Präsentationen, Videos
				oder Fotos werden die Räume mit Bildschirmen bestückt. Mehrmals jährlich kann sich der
				Dreisesselgasthof dadurch in einen Treffpunkt für Kulturinteressierte verwandeln,
				beispielsweise durch Vorträge oder auch Workshops. Interessante Persönlichkeiten aus den
				Bereichen Sport, Kunst, Literatur oder Musik sollen hierfür eingeladen werden, um den Gästen
				ein besonderes Erlebnis zu bereiten.
			</p>
		</div>

		<div class="relative">
			<h3 class="mt-2 text-2xl text-gruen">Integratives Angebot</h3>
			<p class="my-6">
				Der Dreisessel ist ein wunderbarer Ort, um in die Natur einzutauchen und sie mit allen
				Sinnen zu entdecken. Vor allem bei der integrativen Arbeit setzt dieses Umfeld unglaubliche
				Energie frei, die Kindern und Jugendlichen mit Handicap einfach gut tut. Ihnen können wir
				nach der Sanierung bedürfnisgerechte Räumlichkeiten für solch ein Naturerlebnis anbieten.
				Neben einem barrierefreien / rollstuhlgerechten Eingang und WC-Bereich wird auch ein
				abtrennbarer Raum für Gruppenarbeiten vorhanden sein. Und selbstverständlich können die
				Kinder sowie ihre Betreuer auch bei uns übernachten. Hierfür bieten wir Einzel-, Doppel- und
				Vierbettzimmer an.
			</p>
		</div>
	</div>
</section>
