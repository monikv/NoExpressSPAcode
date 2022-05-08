<template>
 
    <div
      class="card"
      
    >
    
    <img :src= "properti.Image" class="card-img-top" alt="Chicago Skyscrapers" >
      <div class="card-header"> {{properti.Type }}</div>
      <div class="card-body" style="text-align: intial">
        <h5 class="card-text">Year built: {{ properti.Year }}</h5>
        <h5 class="card-text">Number of Rooms: {{ properti.Rooms }}</h5>
        <h5 class="card-text">Price: ${{ properti.Price }}</h5>
        <h5 class="card-text">Area: {{ properti.Area }} Sq ft</h5>
      </div>
    </div>

</template>

<script>
export default {
  name: "house",
  props: {
    properti: Array,
  },
};
</script>

<style scoped>
.card-text {
  text-align: left;
  font-size: 15px;
}
.card{
        position: relative;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    color: white;
    background-color :rgb(13, 110, 253);
    margin-bottom: 1rem;
    width: calc(90% - 20px);
    display: inline-flex; 
    padding: 0.5em

}
.card-header{
    font-weight:700;
}

h4 {
  margin: 2px;
}

div {
  background-color: #ffb89e;
  color: black;
  padding: 1em;
}

.red {
  background-color: orangered !important;
}

</style>