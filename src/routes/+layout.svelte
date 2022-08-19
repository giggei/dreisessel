<script>
	import logoSmall from "$lib/assets/logo_small.png"
	import "../app.css";

	const toggleMenu = () => {
		const menu = document.querySelector(".mobile-menu");
		if (menu !== null) menu.classList.toggle("hidden");
	}
</script>

<div class="flex flex-col h-screen">
<!-- navbar goes here -->
<nav class="bg-gray-100 fixed inset-x-0 z-10 top-0">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-between">
			<!-- primary nav -->
			<div class="hidden md:flex items-center space-x-1">
				<a
					href="/"
					class="py-5 px-3 text-gray-700 hover:text-gray-900"
					>Startseite</a>
				<a
					href="/geschichte"
					class="py-5 px-3 text-gray-700 hover:text-gray-900"
					>Geschichte</a>
				<a
					href="/umbau"
					class="py-5 px-3 text-gray-700 hover:text-gray-900"
					>Die Renovierung</a>
					<a
					href="/paechter"
					class="py-5 px-3 text-gray-700 hover:text-gray-900"
					>Der Pächter</a>
					<a
					href="/blog"
					class="py-5 px-3 text-gray-700 hover:text-gray-900"
					>Aktuelles</a>
			</div>
			<!-- secondary nav -->
			<div class="hidden md:flex items-center space-x-1">
				<a
					href="/"
					class="py-2 px-3 bg-green-400 text-white hover:bg-green-300 text-sm hover:text-yellow-800 rounded transition duration-300"
					>Spenden</a
				>
			</div>
			<!-- mobile button goes here -->
			<div class="md:hidden flex items-center space-x-1">
				<!-- empty element to get burger to the right -->
			</div>
			<div class="md:hidden flex items-center space-x-1 h-16 float-right cursor-pointer" on:click="{toggleMenu}">
				<div class="space-y-2">
					<div class="w-8 h-0.5 bg-gray-600"></div>
					<div class="w-8 h-0.5 bg-gray-600"></div>
					<div class="w-8 h-0.5 bg-gray-600"></div>
				  </div>
			</div>
		</div>
	</div>
	<!-- mobile menu -->
	<div class="mobile-menu hidden md:hidden">
		<a href="/" class="block py-2 px-4 text-sm hover:bg-gray-200" on:click="{toggleMenu}">Startseite</a>
		<a href="/geschichte" class="block py-2 px-4 text-sm hover:bg-gray-200" on:click="{toggleMenu}">Geschichte</a>
		<a href="/umbau" class="block py-2 px-4 text-sm hover:bg-gray-200" on:click="{toggleMenu}">Die Renovierung</a>
		<a href="/paechter" class="block py-2 px-4 text-sm hover:bg-gray-200" on:click="{toggleMenu}">Der Pächter</a>
		<a href="/blog" class="block py-2 px-4 text-sm hover:bg-gray-200" on:click="{toggleMenu}">Aktuelles</a>
		<a href="/" class="block py-2 px-4 text-sm hover:bg-gray-200" on:click="{toggleMenu}">Spenden</a>
	</div>
</nav>
<!-- content goes here -->

<div class="pb-20 mt-[64px] flex-grow">
	<slot />
</div>

<footer class="p-4 bg-gray-100 shadow md:px-6 text-gray-600 ">
    <div class="sm:flex sm:items-center sm:justify-between">
		<img style="height: 40px;" src={logoSmall} alt="Förderverein Schutzhaus Dreisessel" class="mr-3 h-8">
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="/" class="mr-4 hover:underline md:mr-6 ">Impressum</a>
            </li>
            <li>
                <a href="https://waldverein-dreisessel.de" class="mr-4 hover:underline md:mr-6">Waldverein Dreisessel</a>
            </li>
        </ul>
    </div>
</footer>
</div>