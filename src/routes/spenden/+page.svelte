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

			<div class="bg-gelb border rounded-md shadow-lg dark:border-gray-100 p-4 lg:w-1/2">
				<div class="flex place-items-center p-4">
					<div>
						<h1 class="font-bold text-2xl">Aktuelle Spendensumme: 25.678,16 €</h1>
						(Stand: 19.09.2022)
					</div>
				</div>
			</div>

			<div class="grid mt-5">
				<h1 class="font-bold text-3xl mb-4 text-gruen">
					Bitte überweisen Sie Ihre Spende auf folgendes Konto:
				</h1>

				<div class="bg-gelb border rounded-md shadow-lg dark:border-gray-100 p-4 lg:w-1/2">
					<div class="flex place-items-center p-4">
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
									<br/>
									<QRCode/>
									Scannen Sie einfach diesen Code mit Ihrer Banking-App!
								</div>
							</blockquote>
						</div>
					</div>
				</div>

				<h1 class="font-bold text-3xl my-4 text-gruen">Vielen Dank</h1>
			</div>
		</div>
	</div>
</section>
