<script lang="ts">
    import type { PageData } from './$types';
    let { children } = $props();
    import Footer from './Footer.svelte';
    import '../styles/global.css'
</script>

{@render children()}

<Footer />