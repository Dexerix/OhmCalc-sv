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

<div class="fields">
    <label for="resistance">Resistance (Ω):</label>
    <input bind:value={resistance} type="text" name="resistance" id="resistance" class="input"><br>
    <label for="gauge">Gauge (mm²):</label>
    <input bind:value={gauge} type="text" name="gauge" id="gauge" class="input"><br>
    <label for="length">Length (m):</label>
    <input bind:value={length} type="text" name="length" id="length" class="input"><br>
    <button onclick={() => { rhoValue = resistivity(resistance, gauge, length); }}>Calculate</button>
    <p>Resistivity: {rhoValue} Ω mm2/m</p>
</div>