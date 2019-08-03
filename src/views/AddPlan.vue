<template>
   <div>
  <b-card
  header="Add Plan"
              border-variant="info"
              header-bg-variant="primary"
              header-text-variant="white">
              
<eb-table :fields="addPlanFields" :data="addPlanFieldsData" ></eb-table>
      </b-card>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ebTable from '@/components/FormElements/TableList.vue';
import { API } from '@/config';
import axios from 'axios';
@Component({
    components: {
    ebTable,
  },
})
export default class AddPlan extends Vue {
    
    private addPlanFields: any = [
    {
      key: 'PLAN_LIST_ID',
      label: 'Plan Id',
      sortable: true,
    },
    {
      key: 'PLAN_LIST_NAME',
      label: 'Plan List Name',
      sortable: true,
    },
    {
      key: 'SERVICE_TYPE',
      label: 'Service Type',
      sortable: true,
    },
    {
      key: 'CITY',
      label: 'City',
      sortable: true,
    },
  ];
  private addPlanFieldsData: any=[]=[];
  
   private async getAddPlanFieldsData() {
    const data = {
      USERID: 'NARINDER1',
        PASSWORD: 'Fastway@123',
        DEVICEIMEI: '352356079376711',
      };
    const result = await axios({
      method: "POST",
      url: API + "/getPlanList/",
      headers: {
        CREDS: JSON.stringify(data)
      }
    });
    this.addPlanFieldsData = result.data.PLAN_LIST;
  }

  public mounted(){
      this.getAddPlanFieldsData();
  }
}
</script>

