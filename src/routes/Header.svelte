<script lang="ts">
    const {title} = $props();
</script>
<style>
    a {
        text-decoration: none;
        text-align: center;
        h1 {
            color: var(--title-color);
        }
    }
</style>

<a href="."><h1>{title}</h1></a>
