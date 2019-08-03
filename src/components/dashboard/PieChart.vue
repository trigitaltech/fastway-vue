<script>
import { Pie } from "vue-chartjs";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

export default {
  extends: Pie,
  props: {
    labels: {
      type: Array,
      required: false
    },
    datasets: {
      type: Array,
      required: false
    },
    height: {
      required: false
    }
  },
  watch: {
    datasets: function() {
      this.drawChart();
    },
    labels: function() {
      this.drawChart();
    }
  },
  methods: {
    drawChart() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: this.datasets
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
