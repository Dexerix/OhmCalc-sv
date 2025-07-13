<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Header from '../Header.svelte';
    import { section } from '../Ohm.svelte';
    let raw_diameter: string = $state('');
    let gaugeValue: number = $state(0);
</script>

<Header title="Section" />

<div class="fields">
    <label for="diameter">Diameter (mm):</label>
    <input bind:value={raw_diameter} type="text" name="diameter" id="diameter" class="input">
    <button onclick={() => { gaugeValue = section(raw_diameter); }}>Calculate</button>
    <p>Gauge: {gaugeValue} mm2</p>
</div>

<div class="description">
    <p>The cross-sectional area <em>A</em> in square millimeters (mm²) of a conductor is calculated using the formula:</p>
    <p><strong>A = π × (d/2)²</strong></p>
    <p>Where:</p>
    <ul>
        <li><em>d</em> is the diameter in millimeters (mm)</li>
    </ul>
</div>