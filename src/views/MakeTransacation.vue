<template>
  <div class="container-fluid">
    <b-row class="mb-4">
      <b-col md="2">
        <b-form-select
          v-model="accountType"
          :options="searchOption"
          placeholder="Select Account Type"
          @change="accountTypeChange"
        ></b-form-select>
      </b-col>
      <b-col md="10">
        <div>
          <div>
            <div class="input-group">
              <input
                type="text"
                v-model="searchText"
                class="form-control"
                :placeholder="searchPlaceholder"
              >
              <span class="mdi mdi-magnify"></span>
              <div class="input-group-append">
                <button class="btn btn-primary" @click="searchCustomer">Search</button>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-5" v-if="isLoading">
      <b-col align="center">
        <semipolar-spinner :animation-duration="2000" :size="65" color="#727cf5"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-row v-show="isPlanDetails && !isLoading">
          <b-col>
            <customer-details-card :customerDetails="customerDetails"></customer-details-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row v-show="isPlanDetails && !isLoading">
          <b-col>
            <b-card
              header="Plan Details"
              border-variant="info"
              header-bg-variant="primary"
              header-text-variant="white"
            >
              <div>
                <div class="input-group">
                  <input type="text" class="form-control" v-model="searchPlan">
                  <span class="mdi mdi-magnify"></span>
                  <div class="input-group-append">
                    <b-button class="mb-3 btn-brand" variant="primary">Search</b-button>
                    <b-button
                      class="ml-5 mb-3 btn-brand"
                      variant="primary"
                      @click="addplan"
                    >Add Plan</b-button>
                  </div>
                </div>
              </div>
              <eb-table
                :filter="searchPlan"
                :fields="planDetailsFields"
                :data="PLAN_DETAIL"
                selectMode="multi"
                cssClass="w-50"
                @row-selected="plansSelect"
              >
                <template v-slot:process>
                  <b-button class="mb-3 btn-brand" variant="primary" @click="cancelPlan">Cancel Plan</b-button>
                </template>
              </eb-table>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getCustomerInfo, cancelPlan as cancelPlanAPI } from "@/services";
import { SemipolarSpinner } from "epic-spinners";
import iCustomer from "@/Interface/ICustomer.ts";
import ebInput from "@/components/FormElements/Input.vue";
import CustomerDetailsCard from "@/components/Customer/CustomerDetailsCard.vue";
import ebTable from "@/components/FormElements/TableList.vue";
import Swal from "sweetalert2";

@Component({
  components: {
    SemipolarSpinner,
    ebInput,
    CustomerDetailsCard,
    ebTable
  }
})
export default class MakeTransacation extends Vue {
    private selectedPlans: any[] = [];
    private customerDetails: iCustomer = {};
    private PLAN_DETAIL: any[] = [];
    private searchPlan: string = '';
    private searchText: string = '';
    private searchPlaceholder = 'Enter Account Number';
    private accountType = null;
    private searchOption = [
        { value: null, text: 'Select Account Type', disabled: true },
        { value: 'ACC', text: 'Account No' },
        { value: 'VC', text: 'VC' },
        { value: 'STB', text: 'STB' },
        { value: 'RMN', text: 'RMN' }
    ];
    private isPlanDetails: boolean = false;
    private isLoading: boolean = false;
    private planDetailsFields: any = [
        {
            key: 'PLAN_NAME',
            label: 'Plan Name',
            sortable: true
        },
        {
            key: 'PRODUCT_COUNT',
            label: 'Product Count',
            sortable: true
        }
    ];

    private accountTypeChange(payload: any) {
        switch (payload) {
            case 'ACC':
                this.searchText = 'CR-1053091263';
                break;
            case 'VC':
                this.searchText = '';
                this.searchPlaceholder = 'Enter VC Number';
                break;
            case 'STB':
                this.searchText = '';
                this.searchPlaceholder = 'Enter STB Number';
                break;
            case 'RMN':
                this.searchText = '';
                this.searchPlaceholder = 'Enter RMN Number';
                break;
            default:
                break;
        }
    }

    private async searchCustomer() {
        try {
            const data = {
                CREDS: JSON.stringify(this.CREDS),
                PARAMS: this.searchText,
                TYPE: this.accountType
            };
            this.isLoading = true;
            const result = await getCustomerInfo(data);
            this.customerDetails = result.data;
            this.isLoading = false;
            this.isPlanDetails = true;
            
            const searchCustomerData = {
                ACCOUNT_NO: this.customerDetails.ACCOUNT_NO,
                ACCOUNT_POID: this.customerDetails.ACCOUNT_POID,
                SERVICE_OBJ: this.customerDetails.SERVICE_OBJ,
                CUSTOMER_NAME: this.customerDetails.CUSTOMER_NAME
            };
            this.$store.dispatch('auth/customer', searchCustomerData);
            const active: any[] = this.customerDetails.PLAN_LIST;
            this.PLAN_DETAIL = active[0].PLANS;
        } catch (e) {
            this.isLoading = false;
            this.isPlanDetails = false;
            this.$toasted.error(e);
        }
    }

    private addplan() {
        this.$router.push({ path: '/customer/add-plan' });
    }

    private plansSelect(data: any) {
        this.selectedPlans = data;
    }

    private cancelPlan() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                this.cancelPlanApiCall();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your imaginary plans is safe :)', 'error');
            }
        });
    }

    private async cancelPlanApiCall() {
        try {
            let data = {
                ...this.gePlanDetails,
                CANCEL_PLAN_LIST: []
            }
            const process = this.selectedPlans.map((e: any, idx) => {
                let obj = {
                    PLAN_OBJ: e.PLAN_OBJ,
                    DEALS: e.PRODUCTS
                }
                data.CANCEL_PLAN_LIST.push(obj)
            })
            await Promise.all(process);
            const result = await cancelPlanAPI(this.CREDS, data);
            Swal.fire('Deleted!', 'Your plan has been deleted.', 'success');
            console.log(result);
        } catch (error) {
            this.$toasted.error(error.ERROR_DESCR);
        }
    }
    get CREDS() {
        return this.$store.getters['auth/getloginUser'];
    }

    get gePlanDetails() {
        return this.$store.getters['auth/getSearchCustomer'];
    }
}
</script>