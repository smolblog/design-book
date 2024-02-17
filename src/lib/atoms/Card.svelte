<script lang="ts">
	import type { ColorMode, SemanticColor } from "$lib/types.js";
	import type { Snippet } from "svelte";

	interface CardProps {
		theme?: SemanticColor
		mode?: ColorMode
		children: Snippet
	};

	let { theme, mode, children } = $props<CardProps>();

	let modeClass = mode ? `${mode}-mode` : '';
</script>

<style>
	div {
		border-radius: var(--border-radius);
		box-shadow: var(--shadow-base);
		background: var(--body-shading);
		padding: var(--gutter);
		margin: var(--gutter);

		&.primary { background: var(--primary-shading); }
		&.secondary { background: var(--secondary-shading); }
		&.danger { background: var(--danger-shading); }
		&.neutral { background: var(--neutral-shading); }
	}
</style>

<div class={`${theme} ${modeClass}`}>
	{@render children()}
</div>