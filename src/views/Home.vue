<template>
  <div class="container-fluid">
    <b-row>
      <b-col sm="12" lg="6">
        <b-card
          header="Subscriber Details"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white">
          <div v-if="isSubscriberDetails">
            <pie-chart :datasets="subscriberDetailsDatasets" :labels="subscriberlabels" id="b"></pie-chart>
          </div>
          <b-row class="mt-5 mb-5 pt-4 pb-3" v-else>
            <b-col align="center">
              <semipolar-spinner :animation-duration="2000" :size="65" color="#727cf5" />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card
          header="Complaint Details"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white">
          <div v-if="isComplaintDetails">
            <pie-chart :datasets="complaintDetailsDatasets" :labels="complaintlabels" id="a"></pie-chart>
          </div>
          <b-row class="mt-5 mb-5 pt-4 pb-3" v-else>
            <b-col align="center">
              <semipolar-spinner :animation-duration="2000" :size="65" color="#727cf5" />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" lg="12">
        <b-card
          header="Collection Report"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white">
          <div v-if="isCollectionReport">
            <eb-table :fields="collectionReportFields" :data="collectionReport" v-if="collectionReport.length > 0"></eb-table>
            <div class="text-center font-weight-bold">No Data Available.</div>
          </div>
          <b-row class="mt-5 mb-5" v-else>
            <b-col align="center">
              <semipolar-spinner :animation-duration="2000" :size="65" color="#727cf5" />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" lg="12">
        <b-card
          header="Package Count Data"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white">
          <div v-if="isPackageCountData">
            <eb-table :fields="packageCountFileds" :data="packageCount" v-if="packageCount.length > 0"></eb-table>
            <div class="text-center font-weight-bold">No Data Available.</div>
          </div>
          <b-row class="mt-5 mb-5" v-else>
            <b-col align="center">
              <semipolar-spinner :animation-duration="2000" :size="65" color="#727cf5" />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PieChart from "@/components/dashboard/PieChart.vue";
import ebTable from "@/components/FormElements/TableList.vue";
import { SemipolarSpinner } from "epic-spinners";
import { openAndClosedComplaintsCount,totalSubscriberCount } from "@/services";
import { API } from "@/config";
import axios from "axios";

@Component({
  components: {
    PieChart,
    ebTable,
    SemipolarSpinner
  }
})
export default class Home extends Vue {
  private isSubscriberDetails: boolean = false;
  private isComplaintDetails: boolean = false;
  private isPackageCountData: boolean = false;
  private isCollectionReport: boolean = false;

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

  private subscriberDetailsDatasets: any[] = [];
  private complaintDetailsDatasets: any[] = [];

  private subscriberlabels: any[] = [];
  private complaintlabels: any[] = ["Open", "Closed"];
  private colors: any[] = ["#41B883", "#E46651", "#00D8FF"];

  private async getCollectionReport() {
    const data = {
      USERID: "NARINDER1",
      PASSWORD: "Fastway@123",
      DEVICEIMEI: "352356079376711"
    };
    const result = await axios({
      method: "POST",
      url: API + "/dailyAndWeeklyCollectionReport/",
      headers: {
        CREDS: JSON.stringify(data)
      }
    });
    this.collectionReportData = result.data;
    this.isCollectionReport = true;
  }

  private async getPackageCount() {
    const data = {
      USERID: "NARINDER1",
      PASSWORD: "Fastway@123",
      DEVICEIMEI: "352356079376711"
    };
    const result = await axios({
      method: "POST",
      url: API + "/subscriberWiseActivePkgCount/",
      headers: {
        CREDS: JSON.stringify(data)
      }
    });
    this.packageCountData = result.data;
    this.isPackageCountData = true;
  }

  private async subscriberDetailChart() {
    try {
       const cred = {
        USERID: "NARINDER1",
        PASSWORD: "Fastway@123",
        DEVICEIMEI: "352356079376711"
      };
      const data = {
        CREDS: JSON.stringify(cred),
      };
      const result = await totalSubscriberCount(data);
      const output = result.data;
      

      let lbl: any[] = [];
      let count: any[] = [];
      let color: any[] = [];

      output.map((e: any,idx: any)=>{
        lbl.push(e.STATUS);
        count.push(e.COUNT_OF_CUSTOMER);
        color.push(this.colors[idx]);
      })
      
      let datasets = [{
        backgroundColor:color,
        data: count
      }];

    this.subscriberDetailsDatasets = datasets;
    this.subscriberlabels = lbl;
    this.isSubscriberDetails = true;
    } catch (error) {
      console.log('error',error)
    }
  }

  private async complaintDetailsChart() {
    try {
      const cred = {
        USERID: "cableadmin",
        PASSWORD: "Fastway@Live",
        DEVICEIMEI: "352356079376711"
      };
      const data = {
        CREDS: JSON.stringify(cred),
        PARAMS: 7
      };
      const result = await openAndClosedComplaintsCount(data);
      console.log('this is log',result);
      const datasets = [
        {
          backgroundColor: ["#41B883", "#E46651"],
          data: [75, 25]
        }
      ];
      this.complaintDetailsDatasets = datasets;
      this.isComplaintDetails = true;
    } catch (error) {
      console.log("error", error);
    }
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

