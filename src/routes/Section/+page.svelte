<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { section } from '../Ohm.svelte';
    let raw_diameter: string = $state('');
    let gaugeValue: number = $state(0);
</script>

<Header title="Section" />

<input bind:value={raw_diameter} type="text" name="diameter" id="diameter"> Diameter (mm)<br>
<button onclick={() => { gaugeValue = section(raw_diameter); }}>Calculate</button>
<p>Gauge: {gaugeValue} mm2</p>