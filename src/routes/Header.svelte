<svelte:options runes={true}></svelte:options>

<script lang="ts">
    const {title} = $props();
</script>

<h1>{title}</h1>
