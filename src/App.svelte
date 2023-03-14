<script>
  import NavBar from "./components/NavBar.svelte";
  import Comic from "./components/Comic.svelte";
  import Content from "./Content.svelte";
</script>

<NavBar />
<div class="main-contents">
  <Content />
  <Comic />
</div>

<style>
  .main-contents {
    background-color: #784b91;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 1em;
    color: black;
  }
</style>
