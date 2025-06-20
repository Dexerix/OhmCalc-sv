<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { section } from '../Ohm.svelte';
</script>

<Header title="Section" />