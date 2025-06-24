<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { voltage } from '../Ohm.svelte';
    // import '../../styles/global.css'

    let resistance: string = $state('');
    let intensity: string = $state('');
    let voltageValue: number = $state(0)
</script>

<style>
    
</style>

<Header title="Voltage"/>

<div class="fields">
    <table>
        <tbody>
            <tr>
                <td id="label"><label for="resistance">Resistance (Ω):</label></td>
                <td><input bind:value={resistance} type="text" name="resistance" id="resistance" class="input"></td>
            </tr>
            <tr>
                <td id="label"><label for="intensity">Intensity (A):</label></td>
                <td><input bind:value={intensity} type="text" name="intensity" id="intensity" class="input"></td>
            </tr>
        </tbody>
    </table>
    <button onclick={() => { voltageValue = voltage(resistance, intensity); }}>Calculate</button>
    <p>Voltage: {voltageValue} V</p>
    
</div>