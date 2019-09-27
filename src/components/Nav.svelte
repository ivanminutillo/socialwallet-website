<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 700;
		padding: 40px 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		margin-right: 40px;
		font-size: 16px;
		letter-spacing: 1px;
		text-transform: uppercase;
		font-family: 'Baloo Bhaijaan', cursive;
		font-weight: 500;
		text-rendering: optimizeLegibility;
		color: white;
	}
</style>
<div class="container">
<nav class="row">
	<ul>
		<li><a class='{segment === "modules" ? "selected" : ""}' href='#modules'>modules</a></li>
		<li><a class='{segment === undefined ? "selected" : ""}' href='#usecases'>usecases</a></li>
		<li><a class='{segment === "media" ? "selected" : ""}' href='#media'>media</a></li>
		<li><a class='{segment === "contact" ? "selected" : ""}' href='#contact'>contact us</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li> -->
	</ul>
</nav>
</div>