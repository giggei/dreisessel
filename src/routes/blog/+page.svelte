<svelte:head>
	<title>Aktuelles</title>
	<html lang="de" />
</svelte:head>

<section class="py-20 bg-white">
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<div class="relative">
			<h1 class="font-bold text-3xl mb-4 text-gruen">Aktuelles</h1>
			<p class="mb-6">
				Neuigkeiten und Aktuelles zum Umbau und zum Verlauf der Spendenaktion
			</p>
		</div>

		<section class="templateux-section mb-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-8">
						<div class="row">
							{#if posts && posts.length > 0}
								{#each posts as post}
									<div>
										<div class="flex">
											<blockquote class="relative">
												<div class="relative">
													<p class="mb-2 text-sm font-semibold leading-none text-left text-gruen uppercase">
														{new Date(post.date).toLocaleDateString("de-DE")}
													</p>
													<h3 class="mt-2 text-2xl text-gruen">{post.title.rendered}</h3>
													<p class="mt-5">
														{@html post.content.rendered}
													</p>
												</div>
											</blockquote>
										</div>
									</div>
									<div class="border-b-2 my-10 border-gruen"></div>
								{/each}
							{:else}
							<div role="status">								
								<span class="sr-only">Aktuelle Informationen finden Sie auf der Webseite des Waldvereins Dreisessel e.V.</span>
								<span class="sr-only"><a href="https://waldverein-dreisessel.de">Waldverein Dreisessel e.V.</a></span>
							</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
