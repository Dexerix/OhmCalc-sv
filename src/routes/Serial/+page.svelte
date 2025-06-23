<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { serial_resistor } from '../Ohm.svelte';
    let resistor_list: string = $state('');
    let totalValue: number = $state(0);
</script>

<Header title="Serial Resistor" />

<input bind:value={resistor_list} type="text" name="resistor_list" id="resistor_list" class="input"> Resistor List (Ω, separated by commas)<br>
<button onclick={() => { totalValue = serial_resistor(resistor_list.split(',')); }}>Calculate</button>
<p>Total Resistance: {totalValue} Ω</p>