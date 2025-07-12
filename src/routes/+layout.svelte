<script lang="ts">
    import type { PageData } from './$types';
    let { children } = $props();
    import Footer from './Footer.svelte';
</script>

{@render children()}

<Footer />