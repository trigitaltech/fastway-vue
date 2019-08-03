<script>
import { Pie } from 'vue-chartjs';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

export default {
  extends: Pie,
  props: ['height'],
  data() {
    return {
      labels: [],
      datasets : [],
    };
  },
  mounted() {
    this.labels = ['Active', 'Sudpended', 'Terminated'];
    this.datasets = [
      {
        backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
          ],
        data: [15, 25, 35],
      },
    ],
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets,
      },
      {
        responsive: true,
        tooltips: {
          enabled: false,
          custom: CustomTooltips,
        },
        maintainAspectRatio: true,
        legend: {
          display: true,
        },
      },
    );
  },
};
</script>
