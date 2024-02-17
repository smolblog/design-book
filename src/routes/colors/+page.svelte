<script>
	import Card from "$lib/atoms/Card.svelte";
</script>
<style>
	div.colorDemo {
		display: grid;
		grid: auto / 1fr 1fr;
		gap: .5em;
		padding: .5em;

		& span {
			display: block;
			line-height: 2em;
		}
	}
</style>

<h1>Colors!</h1>

<p>There are twenty distinct colors in the design system:</p>

<ul>
	<li>Five semantic contexts (body, primary, secondary, danger, neutral) &times;</li>
	<li>Two brightness levels (content, shading) &times;</li>
	<li>Two color modes (light, dark)</li>
</ul>

<p>In practice, it looks like this:</p>

<Card mode="light">
	<div class='colorDemo'>
		<span>--body-content</span>
		<span>--body-shading</span>
		<span style="color: var(--primary-content)">--primary-content</span>
		<span style="background: var(--primary-shading)">--primary-shading</span>
		<span style="color: var(--secondary-content)">--secondary-content</span>
		<span style="background: var(--secondary-shading)">--secondary-shading</span>
		<span style="color: var(--danger-content)">--danger-content</span>
		<span style="background: var(--danger-shading)">--danger-shading</span>
		<span style="color: var(--neutral-content)">--neutral-content</span>
		<span style="background: var(--neutral-shading)">--neutral-shading</span>
	</div>
</Card>

<Card mode="dark">
	<div class='colorDemo'>
		<span>--body-content</span>
		<span>--body-shading</span>
		<span style="color: var(--primary-content)">--primary-content</span>
		<span style="background: var(--primary-shading)">--primary-shading</span>
		<span style="color: var(--secondary-content)">--secondary-content</span>
		<span style="background: var(--secondary-shading)">--secondary-shading</span>
		<span style="color: var(--danger-content)">--danger-content</span>
		<span style="background: var(--danger-shading)">--danger-shading</span>
		<span style="color: var(--neutral-content)">--neutral-content</span>
		<span style="background: var(--neutral-shading)">--neutral-shading</span>
	</div>
</Card>

<p>Or at least something like that.</p>