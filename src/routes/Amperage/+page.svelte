<script lang="ts">
    import type { PageData } from './$types';
    import Header from '../Header.svelte';
    import { amperage } from '../Ohm.svelte';

    let { data }: { data: PageData } = $props();
</script>

<Header title="Amperage"/>