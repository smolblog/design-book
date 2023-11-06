<script lang="ts">
	export let href: string|null = null;
	export let variant: 'primary'|'danger'|'secondary' = 'secondary';
	export let action: (() => void)|null = null;

	$: if (!href && !action) {
		console.error('Button component requires a href or action prop');
	}

	let primary = false;
	let danger = false;
	$: switch (variant) {
		case 'primary':
			primary = true;
			break;
		
		case 'danger':
			danger = true;
			break;
	}
</script>

<style lang="postcss">
	a, button {
		@apply px-4 py-2 font-bold bg-texture-light inline-block rounded no-underline;
	}

	.primary {
		@apply bg-primary-dark text-contrast-light;
	}

	.danger {
		@apply bg-danger-dark text-contrast-light;
	}
</style>

{#if href}
	<a {href} class:primary class:danger>
		<slot/>
	</a>
{:else}
	<button on:click={action} class:primary class:danger>
		<slot/>
	</button>
{/if}