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

<input bind:value={voltage} type="text" name="voltage" id="voltage"> Voltage (V)<br>
<input bind:value={resistance} type="text" name="resistance" id="resistance"> Resistance (Ω)<br>
<button onclick={() => { amperageValue = amperage(voltage, resistance); }}>Calculate</button>
<p>Amperage: {amperageValue}</p>