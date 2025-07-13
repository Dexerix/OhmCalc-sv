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
<div class="fields">
    <label for="resistance">Resistance (Ω):</label>
    <input bind:value={resistance} type="text" name="resistance" id="resistance" class="input">
    <label for="intensity">Intensity (A):</label>
    <input bind:value={intensity} type="text" name="intensity" id="intensity" class="input">
    <button onclick={() => { voltageValue = voltage(resistance, intensity); }}>Calculate</button>
    <p>Voltage: {voltageValue} V</p>
</div>
<div class="description">
    <p>The voltage <em>V</em> in volts (V) is equal to the product of the current <em>I</em> in amperes (A) and the resistance <em>R</em> in ohms (Ω):</p>
    <p><strong>V = R × I</strong></p>
</div>