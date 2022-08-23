<script>
    import schutzhaus from '$lib/assets/Schutzhaus_bw.png';
	import timeline from '$lib/assets/data/timeline.json';
</script>

<section class="py-20 bg-white">
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<div class="relative">
			<h1 class="font-bold text-3xl mb-4 text-gruen">Das Dreisesselschutzhaus – damals & heute</h1>
			<p class="mb-6">
				Am 10. Juni 1889 wurde das Schutzhaus am Dreisessel feierlich eröffnet und der erste
				Bergwirt, Josef Moosbauer aus Breitenberg, begann mit seiner Arbeit. Seitdem ist vieles
				passiert. Zahlreichen Stürmen hat das Gebäude getrotzt, viele Feste fanden unter seinem Dach
				statt und unzählige Wanderer konnten sich dort stärken. Als das Dreisesselschutzhaus 1949
				durch einen Brand zerstört wurde, lies der Wiederaufbau nicht lange auf sich warten.
				Besonders einschneidend war natürlich die Zeit des Eisernen Vorhangs, der nach dem II.
				Weltkrieg 1945 entstand. Dieser beeinflusste in der Dreiländerregion
				Deutschland-Österreich-Tschechien in besonderem Maße den Alltag der Menschen. Und das für
				sehr viele Jahre. Erst 1989 war durch die Öffnung des Eisernen Vorhangs wieder grenzenloses
				Wandern am Dreisessel möglich. Nun konnte am Dreiländereck endlich wieder ein enges
				Miteinander und ein reger Austausch der Kulturen stattfinden.
			</p>
		</div>

        <img
					src={schutzhaus}
					alt="..."
					class="drop-shadow-lg rounded-lg max-w-full h-auto align-middle border-none"
				/>

		<h1 class="font-bold text-3xl mb-4 text-gruen">Wichtige Ereignisse</h1>
		<p class="mb-6">
			Der Begriff „Dreisessel“ entstand erst im 17. Jahrhundert. Die mächtig aufgetürmten
			Felsblöckehatten hatten die Form von „drei Sessel“, die schon von Ferne sichtbar waren. Diese
			markante Felsstruktur und die Lage auf dem Gipfel gab später dem ganzen Bergrücken den Namen.
		</p>
		<ol class="border-l border-gruen">
			{#each timeline.reverse() as { year, info }}
				<li>
					<div class="flex flex-start items-center pt-2">
						<div class="bg-gruen w-2 h-2 rounded-full -ml-1 mr-3" />
						<h4 class="text-gray-800 font-semibold text-xl mb-1.5">{year}</h4>
					</div>
					<div class="mt-0.5 ml-4 mb-6">
						<p class="text-gray-500 mb-3">
							{info}
						</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
