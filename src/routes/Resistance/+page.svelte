<script lang="ts">
    import type { PageData } from './$types';
    import Header from '../Header.svelte';
    import { resistance } from '../Ohm.svelte';

    let { data }: { data: PageData } = $props();
</script>

<Header title="Resistance" />