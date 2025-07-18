<title>OhmCalc</title>
<script lang='ts'>
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from './Header.svelte';
    import Menu from './Menu.svelte';
    import '../styles/global.css';
</script>

<Header title="OhmCalc"/>
<Menu />
<div class="description">
    <p>OhmCalc is an app that performs various electrical calculations based on Ohm's law and other electrical formulas.</p>
</div>