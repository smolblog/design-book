<script lang="ts">
	import type { SemanticColor } from "$lib/types.js";

	export let type: 'submit'|'reset'|null = null;
	export let theme: SemanticColor|null = null;
	export let disabled = false;
</script>

<style>
	button {
		font-size: 1rem;
		border-radius: .5em;
		border: 0;
		padding: .5em 1em;
		display: inline-block;
		background: var(--neutral-gradient-light);
		font-weight: bold;
		color: var(--body-content-dark);
		box-shadow: 0 .25rem .25rem .125rem rgba(0, 0, 0, 0.2);

		&:active {
			box-shadow: 0 .125rem .125rem .0625rem rgba(0, 0, 0, 0.2);
		}
		
		&.primary {
			background: var(--primary-gradient-light);
		}
		
		&.secondary {
			background: var(--secondary-gradient-light);
		}
		
		&.danger {
			background: var(--danger-gradient-light);
		}
		
		&[disabled] {
			opacity: 0.5;
		}
	}
</style>

<button {type} class={theme} {disabled}>
	<slot/>
</button>