<template>
  <div class="container-fluid">
    <b-row>
      <b-col sm="12" lg="6">
        <b-card
          header="Subscriber Details"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <pie-chart />
        </b-card>
      </b-col>

      <b-col sm="12" lg="6">
        <b-card
          header="Complaint Details"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <pie-chart />
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="12" lg="12">
        <b-card
          header="Collection Report"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <eb-table :fields="collectionReportFields" :data="collectionReportData"></eb-table>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="12" lg="12">
        <b-card
          header="Package Count Data"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <eb-table :fields="packageCountFileds" :data="packageCountData"></eb-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PieChart from "@/components/dashboard/PieChart.vue";
import ebTable from "@/components/FormElements/TableList.vue";
@Component({
  components: {
    PieChart,
    ebTable
  }
})
export default class Home extends Vue {
  private collectionReportFields: any = [
    {
      key: "PAYMENT_DATE",
      label: "Payment Date",
      sortable: true
    },
    {
      key: "NO_OF_PAYMENTS",
      label: "No of Payments",
      sortable: true
    },
    {
      key: "TOTAL_AMOUNT",
      label: "Total Amount",
      sortable: true
    },
    {
      key: "action",
      label: "Action"
    }
  ];

  private collectionReportData: any[] = [];

  private packageCountFileds: any = [
    {
      key: "BASE_PLAN_NAME",
      label: "Plan Name",
      sortable: true
    },
    {
      key: "PACKAGE_COUNT",
      label: "Package Count",
      sortable: true
    }
  ];

  private packageCountData: any[] = [];
}
</script>

