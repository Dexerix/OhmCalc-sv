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
<div class="fields">
    <label for="voltage">Voltage (V):</label>
    <input bind:value={voltage} type="text" name="voltage" id="voltage" class="input">
    <label for="intensity">Intensity (A):</label>
    <input bind:value={intensity} type="text" name="intensity" id="intensity" class="input">
    <button onclick={() => { resistanceValue = resistance(voltage, intensity); }}>Calculate</button>
    <p>Resistance: {resistanceValue} Ω</p>
</div>
<div class="description">
    <p>The resistance <em>R</em> in ohms (Ω) is equal to the voltage <em>V</em> in volts (V) divided by the current <em>I</em> in amperes (A):</p>
    <p><strong>R = V / I</strong></p>
</div>