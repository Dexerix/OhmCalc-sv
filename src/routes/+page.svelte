<svelte:options runes={true}></svelte:options>
<link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
<script lang='ts'>
    import type { PageData } from './$types';
    import Header from './Header.svelte';
    import Menu from './Menu.svelte';
    let { data }: { data: PageData } = $props();
</script>

<Header title="OhmCalc"/>
<Menu />
