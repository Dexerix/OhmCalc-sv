<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { rhosistence } from '../Ohm.svelte';
    let rho: string = $state('');
    let gauge: string = $state('');
    let length: string = $state('');
    let rhoValue: number = $state(0);
</script>

<Header title="Rhosistence" />

<div class="fields">
    <label for="resistivity">Resistivity (Ω mm²/m):</label>
    <input bind:value={rho} type="text" name="resistivity" id="resistivity" class="input"><br>
    <label for="gauge">Gauge (mm²):</label>
    <input bind:value={gauge} type="text" name="gauge" id="gauge" class="input"><br>
    <label for="length">Length (m):</label>
    <input bind:value={length} type="text" name="length" id="length" class="input"><br>
    <button onclick={() => { rhoValue = rhosistence(rho, gauge, length); }}>Calculate</button>
    <p>Resistance: {rhoValue} Ω</p>
</div>
