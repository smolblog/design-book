<script lang="ts">
	export let type: 'submit'|'reset'|null = null;
	export let theme: 'secondary'|'primary'|'danger' = 'secondary';
	export let disabled = false;
</script>

<style>
	button {
		font-size: 1rem;
		border-radius: 0;
		border: .1rem solid var(--color-secondary);
		padding: .5em 1em;
		display: inline-block;
		background: var(--color-secondary-background);
		font-weight: bold;
		color: var(--color-foreground);
		box-shadow: 0 .2rem .4rem .2rem rgba(0, 0, 0, 0.3);

		&:active {
			box-shadow: 0 .1rem .2rem .1rem rgba(0, 0, 0, 0.3);
		}
		
		&.primary {
			background: var(--color-primary);
			color: white;
		}
		
		&.danger {
			background: var(--color-danger);
			color: white;
		}
		
		&[disabled] {
			opacity: 0.5;
		}
	}
</style>

<button {type} class={theme} {disabled}>
	<slot/>
</button>