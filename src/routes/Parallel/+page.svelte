<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { parallel_resistor } from '../Ohm.svelte';
    let resistor_list: string = $state('');
    let totalValue: number = $state(0);
</script>
<Header title="Parallel Resistor" />
<div class="fields">
    <label for="resistor_list">Resistor List (Ω, separated by commas):</label>
    <input bind:value={resistor_list} type="text" name="resistor_list" id="resistor_list" class="input">
    <button onclick={() => { totalValue = parallel_resistor(resistor_list.split(',')); }}>Calculate</button>
    <p>Total Resistance: {totalValue} Ω</p>
</div>
<div class="description">
    <p>The total resistance <em>R<sub>total</sub></em> in ohms (Ω) of resistors connected in parallel is given by the formula:</p>
    <p><strong>1 / R<sub>total</sub> = 1 / R<sub>1</sub> + 1 / R<sub>2</sub> + ... + 1 / R<sub>n</sub></strong></p>
    <p>Where:</p>
    <ul>
        <li><em>R<sub>1</sub>, R<sub>2</sub>, ..., R<sub>n</sub></em> are the resistances of each resistor in ohms (Ω)</li>
    </ul>
</div>