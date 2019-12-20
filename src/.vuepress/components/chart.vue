<template>
  <div class="chart-index">
      <div id="container" style="width: 100%;height:100%;">{{options.title || ''}}</div>
  </div>
</template>

<script>
import * as OrgChart from './orgchart';
import {OptionsTwo} from './index';
export default {
    data(){
        return{
            options: OptionsTwo
        }
    },
    mounted(){
        var chart = new OrgChart(document.getElementById("tree"), OptionsTwo);
    }
}
</script>

<style>

</style>