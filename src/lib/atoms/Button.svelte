<script lang="ts">
	import type { ColorMode, SemanticColor } from "$lib/types.js";
	import type { Snippet } from "svelte";

	interface ButtonProps {
		type?: 'submit'|'reset'
		theme?: SemanticColor
		mode?: ColorMode
		disabled?: boolean
		children: Snippet
	};

	let { type, theme, mode, disabled = false, children } = $props<ButtonProps>();

	let modeClass = (mode == 'light') ? 'light-mode' : 'dark-mode';
</script>

<style>
	button {
		font-size: 1rem;
		border-radius: var(--border-radius);
		border: 0;
		padding: .5em 1em;
		display: inline-block;
		background: var(--neutral-gradient);
		font-weight: bold;
		color: var(--body-content);
		box-shadow: var(--shadow-base);

		&:active {
			box-shadow: var(--shadow-half);
		}
		
		&.primary {
			background: var(--primary-gradient);
		}
		
		&.secondary {
			background: var(--secondary-gradient);
		}
		
		&.danger {
			background: var(--danger-gradient);
		}
		
		&[disabled] {
			opacity: 0.5;
		}
	}
</style>

<button {type} class={`${theme} ${modeClass}`} {disabled}>
	{@render children()}
</button>