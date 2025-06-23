<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { voltage } from '../Ohm.svelte';

    let resistance: string = $state('');
    let intensity: string = $state('');
    let voltageValue: number = $state(0)
</script>

<style>
    
</style>

<Header title="Voltage"/>

<input bind:value={resistance} type="text" name="resistance" id="resistance" class="input"> Resistance (Ω)<br>
<input bind:value={intensity} type="text" name="intensity" id="intensity" class="input"> Intensity (A)<br>
<button onclick={() => { voltageValue = voltage(resistance, intensity); }}>Calculate</button>
<p>Voltage: {voltageValue} V</p>