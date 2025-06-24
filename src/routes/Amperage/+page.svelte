<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { amperage } from '../Ohm.svelte';

    let voltage: string = $state('');
    let resistance: string = $state('');
    let amperageValue: number = $state(0);
</script>

<Header title="Amperage"/>

<div class="fields">
    <label for="voltage">Voltage (V):</label>
    <input bind:value={voltage} type="text" name="voltage" id="voltage" class="input"><br>
    <label for="resistance">Resistance (Ω):</label>
    <input bind:value={resistance} type="text" name="resistance" id="resistance" class="input"><br>
    <button onclick={() => { amperageValue = amperage(voltage, resistance); }}>Calculate</button>
    <p>Amperage: {amperageValue} A</p>
</div>
