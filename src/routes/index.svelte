<script>
	import Hero from '../components/Hero.svelte';
	import Modules from '../components/Modules.svelte';
	import Usecases from '../components/Usecases.svelte';
	import Clients from '../components/clients.svelte';
	import Media from '../components/media.svelte';
	import Contact from '../components/contact.svelte';

</script>


<svelte:head>
	<title>The social wallet</title>
</svelte:head>

<div class="container">
	<Hero />
	<Modules />
	<Usecases />
</div>
<Clients />
<div class="container">
	<Media />
	<Contact />
</div>

