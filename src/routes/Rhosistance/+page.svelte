<script lang="ts">
    import type { PageData } from '../Rhosistance/$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { rhosistance } from '../Ohm.svelte';
    import Footer from '../Footer.svelte';
    let rho: string = $state('');
    let gauge: string = $state('');
    let length: string = $state('');
    let rhoValue: number = $state(0);
</script>
<Header title="Rhosistance" />
<div class="fields">
    <table>
        <tbody>
            <tr>
                <td id="label"><label for="resistivity">Resistivity (Ω mm²/m):</label></td>
                <td><input bind:value={rho} type="text" name="resistivity" id="resistivity" class="input"></td>
            </tr>
            <tr>
                <td id="label"><label for="length">Length (m):</label></td>
                <td><input bind:value={length} type="text" name="length" id="length" class="input"></td>
            </tr>
            <tr>
                <td id="label"><label for="gauge">Gauge (mm²):</label></td>
                <td><input bind:value={gauge} type="text" name="gauge" id="gauge" class="input"></td>
            </tr>
        </tbody>
    </table>
    <button onclick={() => { rhoValue = rhosistance(rho, gauge, length); }}>Calculate</button>
    <p>Resistance: {rhoValue} Ω</p>
</div>
<div class="description">
    <p>The resistance <em>R</em> in ohms (Ω) of a conductor is calculated using the formula:</p>
    <p><strong>R = ρ × (L / A)</strong></p>
    <p>Where:</p>
    <ul>
        <li><em>ρ</em> is the resistivity in ohm-millimeter squared per meter (Ω mm²/m)</li>
        <li><em>L</em> is the length of the conductor in meters (m)</li>
        <li><em>A</em> is the cross-sectional area in square millimeters (mm²)</li>
    </ul>
</div>
<Footer />