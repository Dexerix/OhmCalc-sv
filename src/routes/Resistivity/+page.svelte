<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { resistivity } from '../Ohm.svelte';
    let resistance:string = $state('');
    let gauge:string = $state('');
    let length:string = $state('');
    let rhoValue:number = $state(0);
</script>

<Header title="Resistivity" />

<input bind:value={resistance} type="text" name="resistance" id="resistance"> Resistance (Ω)<br>
<input bind:value={gauge} type="text" name="gauge" id="gauge"> Gauge (mm²)<br>
<input bind:value={length} type="text" name="length" id="length"> Length (m)<br>
<button onclick={() => { rhoValue = resistivity(resistance, gauge, length); }}>Calculate</button>
<p>Resistivity: {rhoValue} Ω mm2/m</p>