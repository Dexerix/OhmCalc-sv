<script lang="ts">
    import type { PageData } from '../voltage/$types';
    import Header from '../Header.svelte';
    import { voltage } from '../Ohm.svelte';
    
    let { data }: { data: PageData } = $props();
</script>

<Header title="Voltage"/>