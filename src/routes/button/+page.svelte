<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
</script>

<div class="prose">
	<h1>Button</h1>

	<p>Trigger an action or make a link look special.</p>

	<p><Button href="#">Save Draft</Button> <Button action={() => {}} variant="primary">Publish now</Button></p>

	<h2>Primary</h2>

	<p>The main action on a form, or the call-to-action in a card.</p>

	<p><Button href="#" variant="primary">Go Forth</Button> <Button action={() => {}} variant="primary">Save</Button></p>

	<h2>Secondary</h2>

	<p>Other actions or links that are less likely to be used.</p>

	<p><Button href="#">Maybe</Button> <Button action={() => {}}>Refresh</Button></p>

	<h2>Danger</h2>

	<p>Button that performs a destructive action.</p>

	<p><Button href="#" variant="danger">Go Away</Button> <Button action={() => {}} variant="danger">Delete</Button></p>
</div>