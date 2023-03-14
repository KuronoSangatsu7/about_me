<script>
  import gameLogo from "../assets/game.svg";
</script>

<nav class="nav-bar">
  <div class="nav-item nav-logo">
    <img src={gameLogo} alt="Game Icon" class="icon" />
  </div>
  <div class="nav-item">Projects</div>
  <div class="nav-item">Something else</div>
</nav>

<style>
  .icon {
    height: 60px;
    width: 60px;
  }

  .nav-bar {
    height: 50px;
    display: flex;
    background-color: burlywood;
    gap: 1em;
    padding: 5px;
    box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.23);
    z-index: 10;
    position: relative;
  }

  .nav-item {
    display: flex;
    align-items: center;
  }

  .nav-logo {
    margin-bottom: 10px;
  }
</style>
