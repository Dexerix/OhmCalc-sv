<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { resistance } from '../Ohm.svelte';

    let voltage: string = $state('');
    let intensity: string = $state('');
    let resistanceValue: number = $state(0)
</script>

<Header title="Resistance" />

<input bind:value={voltage} type="text" name="voltage" id="voltage"> Voltage (V)<br>
<input bind:value={intensity} type="text" name="intensity" id="intensity"> Intensity (A)<br>
<button onclick={() => { resistanceValue = resistance(voltage, intensity); }}>Calculate</button>
<p>Resistance: {resistanceValue} Ω</p>