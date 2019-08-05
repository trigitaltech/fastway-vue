<template>
  <div>
    <b-row>
      <b-col md="6">
        <b-card
          header="Plan List"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white"
        >
        <div>
            <div class="input-group">
              <input type="text" class="form-control" v-model="searchPlanList">
              <span class="mdi mdi-magnify"></span>
              <div class="input-group-append">
                <b-button class="mb-3 btn-brand" variant="primary">Search</b-button>
              </div>
            </div>
          </div>
          <eb-table
            :fields="addPlanFields"
            :data="addPlanFieldsData"
            cssClass="w-50"
            @row-selected="planSelected"
            :filter="searchPlanList"
          >
            <template v-slot:process>
              <b-button class="mb-3 btn-brand" variant="primary" @click="planListProcee">Process</b-button>
            </template>
          </eb-table>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          header="Select Plan"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white"
          v-show="isCallAPI"
        >
        <div v-if="!isLoding">
            <div class="input-group">
              <input type="text" class="form-control" v-model="searchPlan">
              <span class="mdi mdi-magnify"></span>
              <div class="input-group-append">
                <b-button class="mb-3 btn-brand" variant="primary">Search</b-button>
              </div>
            </div>
          </div>
          <eb-table
            :fields="planFields"
            :data="plans"
            selectMode="multi"
            @row-selected="setSelectPlan"
            cssClass="w-50"
            v-if="!isLoding"
            :filter="searchPlan"
          >
            <template v-slot:process>
              <b-button
                class="mb-3 btn-brand"
                variant="primary"
                @click="addPlan"
              >View Selected Plans</b-button>
            </template>
          </eb-table>

          <b-row class="mt-5 mb-5" v-else>
            <b-col align="center">
              <semipolar-spinner :animation-duration="2000" :size="65" color="#727cf5"/>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ebTable from "@/components/FormElements/TableList.vue";
import { getPlanList, getPlanListById } from "@/services";
import { SemipolarSpinner } from "epic-spinners";

@Component({
  components: {
    ebTable,
    SemipolarSpinner
  }
})
export default class AddPlan extends Vue {
  private searchPlanList: string = '';
  private searchPlan: string = '';

  private addPlanFields: any = [
    {
      key: "SERVICE_TYPE",
      label: "Service Type",
      sortable: true
    },
    {
      key: "PLAN_LIST_NAME",
      label: "Plan List Name",
      sortable: true
    },
    {
      key: "CITY",
      label: "City",
      sortable: true
    }
  ];

  private planFields: any = [
    {
      key: "CODE",
      label: "Plan Code",
      sortable: true
    },
    {
      key: "DESCRIPTION",
      label: "Description",
      sortable: true
    },
    {
      key: "PLAN_TYPE",
      label: "Plan Type",
      sortable: true
    }
  ];

  private addPlanFieldsData: any = ([] = []);

  private planListId: string = "";

  private selectPlanList: any = ([] = []);

  private plans: any[] = [];

  private selectedPlans: any = ([] = []);

  private isLoding: boolean = false;
  private isCallAPI: boolean = false;

  private async getAddPlanFieldsData() {
    const result = await getPlanList(this.CREDS);
    this.addPlanFieldsData = result.data.PLAN_LIST;
  }

  private planSelected(items: any[]) {
    if (items.length > 0) {
      this.planListId = items[0].PLAN_LIST_ID;
      this.selectPlanList = items;
    }
  }

  private setSelectPlan(item: any) {
    this.selectedPlans = item;
  }

  private async planListProcee() {
    this.isLoding = true;
    this.isCallAPI = true;
    const result = await getPlanListById(this.CREDS, this.planListId);
    this.plans = result.data.ID_BASED_PLAN_LIST;
    this.isLoding = false;
  }

  private addPlan() {
    this.$router.push({
      name: "plan-details",
      params: {
        plans: this.selectedPlans,
        planList: this.selectPlanList
      }
    });
  }

  public mounted() {
    this.getAddPlanFieldsData();
  }

  get CREDS() {
    return this.$store.getters["auth/getloginUser"];
  }
}
</script>

