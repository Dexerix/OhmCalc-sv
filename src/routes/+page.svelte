<script lang='ts'>
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from './Header.svelte';
    import Menu from './Menu.svelte';
</script>

<Header title="OhmCalc"/>
<Menu />
