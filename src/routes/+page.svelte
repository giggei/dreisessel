<script>
	import bermann from '$lib/assets/WalterBermann.png';
	import dreisessel from '$lib/assets/Dreisessel.jpg';
	import pdf from '$lib/assets/Dreisesselschutzhaus_Broschüre.pdf';
</script>

<svelte:head>
	<title>Startseite</title>
	<html lang="de" />
</svelte:head>

<!-- Background image TODO: Eigene Componente -->
<div
	class="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
	style="
   background-image: url({dreisessel});
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
				<h2 class="font-semibold text-4xl mb-4 text-beige">Förderverein Schutzhaus Dreisessel</h2>
				<h4 class="font-semibold text-xl mb-6 text-beige">Willkommen</h4>
			</div>
		</div>
	</div>
</div>
<!-- Background image -->

<section class="py-20 bg-white">
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<!-- Section: Design Block -->
		<section class="text-gray-800">
			<h1 class="font-bold text-3xl mb-4 text-gruen">Liebe Berg- und Wanderfreunde,</h1>

			<p class="mb-6">
				unser Dreisessel ist einer der markantesten Berge des Bayerwaldes und bietet zu jeder
				Jahreszeit wunderschöne Ausblicke ins Böhmische, ins Mühlviertel und ins Donautal – mit
				grandiosem Alpenpanorama. Der Dreiländerberg erfreut sich daher im Winter wie auch im Sommer
				einer ungebrochenen Beliebtheit bei Touristen und Einheimischen, bei Sportlern und
				Naturliebhabern, bei Jung und Alt. Zudem ist er der einzig befahrbare Berg des Bayerischen
				Waldes.
			</p>
			<p class="mb-6">
				Der aus Granit gebaute Berggasthof, der 1888 errichtet und zweimal durch Brände fast
				zerstört wurde, soll nun zu einer gemütlichen und authentischen Bleibe mit berggerechter
				Übernachtungsmöglichkeit umgebaut werden – zu einem „Schmuckkästchen“ unserer Heimat.
				Bereits über die letzten Jahre wurde sehr viel Geld in die Renovierung des Berggasthofes
				gesteckt. Mittlerweile ist allerdings klar: Hier handelt es sich um ein Fass ohne Boden.
				Nach vielen Wochen des Überlegens hat sich die Vorstandschaft der Sektion Dreisessel e.V.
				daher zu einer Generalsanierung entschlossen. Wir möchten das Erbe unserer Vorgänger, den
				dominanten Granitsteinbau, in seiner Außenstruktur unbedingt erhalten. Die Geschich- te des
				Berggasthofes und den Umfang der geplanten Sanierung können Sie im Detail auf den folgenden
				Seiten nachlesen.
			</p>
			<p class="mb-6">
				Da wir eine der wenigen Sektionen im Verbund des Bayerischen Wald-Vereins sind, die ein
				eigenes Haus besitzen, stellt diese Generalsanierung eine unlösbare Aufgabe für unsere knapp
				200 Mitglieder dar. Deshalb richten wir uns mit einer dringlichen Bitte an alle Touristen,
				Naherholungssuchenden und Einheimischen sowie an alle Firmen im Umkreis „unseres
				Dreiländerberges Dreisessel“: Bitte helfen Sie uns durch Ihre Spende, dieses ursprüngliche
				Gast- und künftig auch wieder Unterkunftshaus zu erhalten. Wir sind es unseren Vorgängern
				und Erbauern sowie auch unseren Nachkommen schuldig, auf dem Berg einen „Verweilort“ zu
				schaffen. Einen wichtigen Treff- und Rastpunkt, den alle brauchen, die sich zu Fuß, auf dem
				Rad, mit Schneeschuhen oder Tourenschiern aufmachen, um einen schönen Tag in Stifters Land
				zu verbringen.
			</p>
			<p class="mb-6">
				Als gemeinnütziger Verein mit einer sehr aktiven Vorstandschaft haben wir einen engagierten
				Pächter gefunden. Gemeinsam möchten wir unseren Besuchern auch weiterhin eine
				Einkehrmöglichkeit bieten, die dem Standard der heutigen Zeit entspricht und trotzdem ihre
				Ursprünglichkeit nicht verliert.
			</p>
			<p class="mb-6">
				Wir hoffen auf Ihre Unterstützung und bedanken uns bereits im Vorfeld schon recht herzlich
				dafür!
			</p>
			<div class="w-80 py-4">
				<img
					src={bermann}
					alt="..."
					class="shadow rounded-full max-w-full h-auto align-middle border-none"
				/>
			</div>
			<p class="mb-6">
				<b class="text-gruen">Walter Bermann</b><br />
				Vorsitzender der Wald-Verein Sektion Dreisessel e.V.
			</p>
		</section>
		<div class="flex flex-wrap">
			<div class="items-center space-x-1 mr-6 pt-4">
				<a
					href="/spenden"
					class="py-2 px-3 bg-gruen text-white hover:bg-gruen text-sm hover:text-gelb rounded transition duration-300"
					>Jetzt Spenden!</a
				>
			</div>
			<div class="items-center space-x-1 mr-6 pt-4">
				<a
					href={pdf}
					download
					class="py-2 px-3 bg-gruen text-white hover:bg-gruen text-sm hover:text-gelb rounded transition duration-300"
					>Download PDF Broschüre</a
				>
			</div>
		</div>
		<!-- Section: Design Block -->
		<section class="mb-32 text-gray-800">
			<h1 class="font-bold text-3xl mb-4 text-gruen">
				Zusammenarbeit mit der Waldvereins-Sektion Dreisessel e. V.
			</h1>

			<p class="mb-6">
				Bei der Sanierung und natürlich auch beim künftigen Betrieb des Gasthauses am Dreisessel
				arbeiten der Pächter Philipp Schmöller und der Besitzer des Anwesens, die Bayerische
				Waldvereins-Sektion Dreisessel e. V., Hand in Hand. Gemeinsames Ziel ist es, das
				Dreisesselschutzhaus wieder zu einem Juwel der Gegend zu machen. Dabei soll der Waldverein
				präsent sein, beispielsweise durch Vereinsabende für Mitglieder oder einem regelmäßigen
				Vereinsstammtisch. Es hilft, den Waldverein noch bekannter zu machen, den persönlichen
				Kontakt zu pflegen und gerne neue Mitglieder zu gewinnen.
			</p>
		</section>
	</div>
	<!-- Container for demo purpose -->
</section>
