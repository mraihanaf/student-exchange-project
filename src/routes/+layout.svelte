<script>
	import Sidebar from '$lib/Sidebar.svelte';
	import "../app.css"
  import Navbar from '$lib/Navbar.svelte';
	let { children } = $props();
</script>

<div class="flex min-h-screen max-w-screen bg-gradient-to-b from-slate-900 to-slate-800">
	<!-- Sidebar should be sticky -->
	<div class="lg:h-screen fixed lg:top-0 lg:left-0 collapse lg:visible">
		<Sidebar />
	</div>

	<!-- Main content container -->
	<div class="flex-1 flex flex-col w-full lg:ml-64 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
		<Navbar></Navbar>
		<main class="flex flex-col p-4 max-w-full w-full">
			{@render children()}
		</main>
	</div>
</div>
