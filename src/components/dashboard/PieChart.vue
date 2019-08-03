<script>
import { Pie } from "vue-chartjs";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

export default {
  extends: Pie,
  data() {
    return {
      data: [],
      label: [],
    }
  },
  props: {
    labels: {
      type: Array,
      required: false
    },
    datasets: {
      type: Array,
      required: false
    },
    height:{
      required: false
    }
  },
  watch: {
    datasets: function(newVal, oldVal) {
      console.log('this is new val',newVal);
      this.data = newVal;
      this.drawChart();
    },
    labels: function(newVal, oldVal) {
      this.label = newVal;
      this.drawChart();
    }
  },
  methods: {
    drawChart() {
      console.log('this is called');
      this.renderChart(
        {
          labels: this.label,
          datasets: this.data,
        },
        {
          responsive: true,
          tooltips: {
            enabled: false,
            custom: CustomTooltips
          },
          maintainAspectRatio: true,
          legend: {
            display: true
          }
        }
      );
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>
