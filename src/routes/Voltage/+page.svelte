<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { voltage } from '../Ohm.svelte';

    let resistance: string = $state('');
    let intensity: string = $state('');
    let voltageValue: number = $state(0)
</script>

<Header title="Voltage"/>

<input bind:value={resistance} type="text" name="voltage" id="voltage"> Voltage (V)<br>
<input bind:value={intensity} type="text" name="intensity" id="intensity"> Intensity (A)<br>
<button onclick={() => { voltageValue = voltage(resistance, intensity); }}>Calculate</button>
<p>Resistance: {voltageValue}</p>