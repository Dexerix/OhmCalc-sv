<script lang="ts">
    const {title} = $props();
</script>
<style>
    * {
        box-sizing: border-box;
        display: block;
    }
    h1 {
        padding-top: 10px;
        color: var(--title-color);
        text-align: center;
    }
    nav {
        text-align: center;
        border-bottom: 1px solid var(--border);
        padding: 0 0.5rem 2rem 0.5rem;
        a {
            text-decoration: none;
            text-align: center;
            border: 1px solid;
            border-radius: 5px;
            color: var(--text);
            display: inline-block;
            padding: 0.1rem 1rem;
            text-decoration: none;
            &:hover {
                color: var(--primary-color);
            }
        }
    }
</style>

<h1>{title}</h1>
<nav>
    <a href=".">Home</a>
    <a href="https://github.com/Dexerix/OhmCalc-sv">Github Repo</a>
    <a href="https://ko-fi.com/L3L11A3Z1N">Buy me a cofee</a>
</nav>
