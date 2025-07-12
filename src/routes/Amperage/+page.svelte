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
    <table>
        <tbody>
            <tr>
                <td id="label"><label for="voltage">Voltage (V):</label></td>
                <td><input bind:value={voltage} type="text" name="voltage" id="voltage" class="input"></td>
            </tr>
            <tr>
                <td id="label"><label for="resistance">Resistance (Ω):</label></td>
                <td><input bind:value={resistance} type="text" name="resistance" id="resistance" class="input"></td>
            </tr>
        </tbody>
    </table>
    <button onclick={() => { amperageValue = amperage(voltage, resistance); }}>Calculate</button>
    <p>Amperage: {amperageValue} A</p>
</div>
<div class="description">
    <p>The amperage <em>I</em> in amperes (A) is equal to the voltage <em>V</em> in volts (V) divided by the resistance <em>R</em> in ohms (Ω):</p>
    <p><strong>I = V / R</strong></p>
</div>