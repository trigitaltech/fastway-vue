<template>
  <div>
    <b-row>
      <b-col md="12">
        <b-card
          header="Selected Plan List"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <eb-table :fields="planFields" :data="plans" cssClass="w-50">
            <template v-slot:process>
              <b-button class="mb-3 btn-brand" variant="primary" @click="save">Saved</b-button>
            </template>
          </eb-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ebTable from "@/components/FormElements/TableList.vue";
import { AddNewPlan } from "@/services";
import { SemipolarSpinner } from "epic-spinners";

@Component({
  components: {
    ebTable,
    SemipolarSpinner
  }
})
export default class PlanDetails extends Vue {
  private planFields: any = [
    {
      key: 'CODE',
      label: 'Plan Code',
      sortable: true
    },
    {
      key: 'DESCRIPTION',
      label: 'Description',
      sortable: true
    },
    {
      key: 'PLAN_TYPE',
      label: 'Plan Type',
      sortable: true
    }
  ];

  private plans: any = ([] = []);

  private planList: any = ([] = []);

  private async save() {
    try {
      let data = {
        ...this.gePlanDetails,
        PLAN_LIST: [
          {
            ...this.planList[0],
            PLANS: this.plans
          }
        ]
      };
      const result = await AddNewPlan(this.CREDS, data);
      this.$toasted.success('plan added successfully');
      this.$router.push({ path: '/customer' });
    } catch (error) {
      this.$toasted.error(error.ERROR_DESCR);
    }
  }

  public mounted() {
    this.plans = this.$route.params.plans;
    this.planList = this.$route.params.planList;
  }

  get CREDS() {
    return this.$store.getters['auth/getloginUser'];
  }

  get gePlanDetails() {
    return this.$store.getters['auth/getSearchCustomer'];
  }
}
</script>

