<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { resistivity } from '../Ohm.svelte';
    let resistance:string = $state('');
    let gauge:string = $state('');
    let length:string = $state('');
    let rhoValue:number = $state(0);
</script>

<Header title="Resistivity" />

<div class="fields">
    <table>
        <tbody>
            <tr>
                <td id="label"><label for="resistance">Resistance (Ω):</label></td>
                <td><input bind:value={resistance} type="text" name="resistance" id="resistance" class="input"></td>
            </tr>
            <tr>
                <td id="label"><label for="gauge">Gauge (mm²):</label></td>
                <td><input bind:value={gauge} type="text" name="gauge" id="gauge" class="input"></td>
            </tr>
            <tr>
                <td id="label"><label for="length">Length (m):</label></td>
                <td><input bind:value={length} type="text" name="length" id="length" class="input"></td>
            </tr>
        </tbody>
    </table>
    <button onclick={() => { rhoValue = resistivity(resistance, gauge, length); }}>Calculate</button>
    <p>Resistivity: {rhoValue} Ω mm2/m</p>
</div>

<div class="description">
    <p>The resistivity <em>ρ</em> in ohm-millimeter squared per meter (Ω mm²/m) is calculated using the formula:</p>
    <p><strong>ρ = R × (A / L)</strong></p>
    <p>Where:</p>
    <ul>
        <li><em>R</em> is the resistance in ohms (Ω)</li>
        <li><em>A</em> is the cross-sectional area in square millimeters (mm²)</li>
        <li><em>L</em> is the length in meters (m)</li>
    </ul>

</div>