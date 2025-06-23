<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { rhosistence } from '../Ohm.svelte';
    let rho: string = $state('');
    let gauge: string = $state('');
    let length: string = $state('');
    let rhoValue: number = $state(0);
</script>

<Header title="Rhosistence" />

<input bind:value={rho} type="text" name="resistivity" id="resistivity" class="input"> Resistivity (Ω mm²/m)<br>
<input bind:value={gauge} type="text" name="gauge" id="gauge" class="input"> Gauge (mm²)<br>
<input bind:value={length} type="text" name="length" id="length" class="input"> Length (m)<br>
<button onclick={() => { rhoValue = rhosistence(rho, gauge, length); }}>Calculate</button>
<p>Resistance: {rhoValue} Ω</p>
