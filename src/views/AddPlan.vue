<template>
  <div>
    <b-row>
      <b-col md="6">
        <b-card
          header="Plan List"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white">
          <eb-table :fields="addPlanFields" :data="addPlanFieldsData" cssClass="w-50"></eb-table>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          header="Select Plan"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white">
          <eb-table :fields="addPlanFields" :data="addPlanFieldsData" cssClass="w-50"></eb-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ebTable from "@/components/FormElements/TableList.vue";
import { getPlanList, getPlanListById } from "@/services";

@Component({
  components: {
    ebTable
  }
})
export default class AddPlan extends Vue {
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
  private addPlanFieldsData: any = ([] = []);

  private async getAddPlanFieldsData() {
    const result = await getPlanList(this.CREDS)
    this.addPlanFieldsData = result.data.PLAN_LIST;
  }
  
  private async planListByID() {
    const result = await getPlanListById(this.CREDS,6);
    console.log('this is result ', result);
  }

  public mounted() {
    this.getAddPlanFieldsData();
  }

  get CREDS() {
    return this.$store.getters['auth/getloginUser'];
  }
}
</script>

