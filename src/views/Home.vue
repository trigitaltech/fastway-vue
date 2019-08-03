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
          <pie-chart :datasets="subscriberDetailsDatasets" :labels="subscriberlabels"/>
        </b-card>
      </b-col>

      <b-col sm="12" lg="6">
        <b-card
          header="Complaint Details"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <pie-chart :datasets="complaintDetailsDatasets" :labels="complaintlabels"/>
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
          <eb-table :fields="collectionReportFields" :data="collectionReport"></eb-table>
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
          <eb-table :fields="packageCountFileds" :data="packageCount"></eb-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PieChart from '@/components/dashboard/PieChart.vue';
import ebTable from '@/components/FormElements/TableList.vue';
import { SemipolarSpinner } from "epic-spinners";
import { API } from '@/config';
import axios from 'axios';

@Component({
  components: {
    PieChart,
    ebTable,
  },
})
export default class Home extends Vue {
  private collectionReportFields: any = [
    {
      key: 'PAYMENT_DATE',
      label: 'Payment Date',
      sortable: true,
    },
    {
      key: 'NO_OF_PAYMENTS',
      label: 'No of Payments',
      sortable: true,
    },
    {
      key: 'TOTAL_AMOUNT',
      label: 'Total Amount',
      sortable: true,
    },
    {
      key: 'action',
      label: 'Action',
    },
  ];
  private collectionReportData: any[] = [];

  private packageCountFileds: any = [
    {
      key: 'BASE_PLAN_NAME',
      label: 'Plan Name',
      sortable: true,
    },
    {
      key: 'PACKAGE_COUNT',
      label: 'Package Count',
      sortable: true,
    },
  ];
  private packageCountData: any[] = [];

  private subscriberDetailsDatasets: any[] = [];
  private complaintDetailsDatasets: any[] = [];
  
  private subscriberlabels: any[] = [ "Active", "Suspended", "Terminated"];
  private complaintlabels: any[] = [ "Open", "Closed"];

  private async getCollectionReport() {
    const data = {
      USERID: 'NARINDER1',
      PASSWORD: 'Fastway@123',
      DEVICEIMEI: '352356079376711',
    };
    const result = await axios({
      method: 'POST',
      url: API + '/dailyAndWeeklyCollectionReport/',
      headers: {
        CREDS: JSON.stringify(data),
      },
    });
    this.collectionReportData = result.data;
  }

  private async getPackageCount() {
    const data = {
      USERID: 'NARINDER1',
      PASSWORD: 'Fastway@123',
      DEVICEIMEI: '352356079376711',
    };
    const result = await axios({
      method: 'POST',
      url: API + '/subscriberWiseActivePkgCount/',
      headers: {
        CREDS: JSON.stringify(data),
      },
    });
    this.packageCountData = result.data;
  }
  
  private subscriberDetailChart() {
    const datasets = [
      {
        backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
          ],
        data: [15, 25, 35],
      },
    ];
    this.subscriberDetailsDatasets = datasets;
  } 

  private complaintDetailsChart(){
    const datasets = [
      {
        backgroundColor: [
            '#41B883',
            '#E46651',
          ],
        data: [75, 25],
      },
    ];
    this.complaintDetailsDatasets = datasets;
  }

  private mounted() {
    this.subscriberDetailChart();
    this.complaintDetailsChart();
    this.getCollectionReport();
    this.getPackageCount();
  }

  get packageCount() {
    return this.packageCountData;
  }

  get collectionReport() {
    return this.collectionReportData;
  }
}
</script>

