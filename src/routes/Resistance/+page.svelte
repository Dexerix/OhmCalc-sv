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
    <table>
        <tbody>
            <tr>
                <td id="label"><label for="voltage">Voltage (V):</label></td>
                <td><input bind:value={voltage} type="text" name="voltage" id="voltage" class="input"></td>
            </tr>
            <tr>
                <td id="label"><label for="intensity">Intensity (A):</label></td>
                <td><input bind:value={intensity} type="text" name="intensity" id="intensity" class="input"></td>
            </tr>
        </tbody>
    </table>
    <button onclick={() => { resistanceValue = resistance(voltage, intensity); }}>Calculate</button>
    <p>Resistance: {resistanceValue} Ω</p>
</div>

<div class="description">
    <p>The resistance <em>R</em> in ohms (Ω) is equal to the voltage <em>V</em> in volts (V) divided by the current <em>I</em> in amperes (A):</p>
    <p><strong>R = V / I</strong></p>
</div>