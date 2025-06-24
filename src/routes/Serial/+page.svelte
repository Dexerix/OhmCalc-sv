<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { serial_resistor } from '../Ohm.svelte';
    let resistor_list: string = $state('');
    let totalValue: number = $state(0);
</script>

<Header title="Serial Resistor" />

<div class="fields">
    <table>
        <tbody>
            <tr>
                <td id="label"><label for="resistor_list">Resistor List (Ω, separated by commas):</label></td>
                <td><input bind:value={resistor_list} type="text" name="resistor_list" id="resistor_list" class="input"></td>
            </tr>
        </tbody>
    </table>
    <button onclick={() => { totalValue = serial_resistor(resistor_list.split(',')); }}>Calculate</button>
    <p>Total Resistance: {totalValue} Ω</p>
</div>