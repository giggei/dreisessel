<script>
	import schutzhaus from '$lib/assets/Schutzhaus_bw.png';
	import timeline from '$lib/assets/data/timeline.json';

	import { onMount } from 'svelte';

	let posts = [];
	let portfolio = [];
	let y;
	let x;
	const postApiUrl = 'https://waldverein-dreisessel.de/wp-json/wp/v2/posts?categories=13';

	onMount(async function () {
		const postresponse = await fetch(postApiUrl);
		const postsall = await postresponse.json();
		//console.log(posts);
		posts = postsall.slice(0, 6);
	});
</script>

<section class="py-20 bg-white">
	<div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
		<div class="relative">
			<h1 class="font-bold text-3xl mb-4">Aktuelles</h1>
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
													<p class="mb-2 text-sm font-semibold leading-none text-left text-green-600 uppercase">
														{new Date(post.date).toLocaleDateString("de-DE")}
													</p>
													<h3 class="mt-2 text-2xl">{post.title.rendered}</h3>
													<p class="mt-5">
														{@html post.content.rendered}
													</p>
												</div>
											</blockquote>
										</div>
									</div>
									<div class="border-b-2 my-10 border-green-600"></div>
								{/each}
							{/if}
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
