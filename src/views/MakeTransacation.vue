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
      <b-col md="10" class="mt-1">
        <div class="app-search">
          <div>
            <div class="input-group">
              <input
                type="text"
                v-model="searchText"
                class="form-control"
                :placeholder="searchPlaceholder"
              />
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
        <semipolar-spinner :animation-duration="2000" :size="65" color="#727cf5" />
      </b-col>
    </b-row>
    <b-row v-show="isPlanDetails && !isLoading">
      <b-col>
        <customer-details-card :customerDetails="customerDetails"></customer-details-card>
      </b-col>
    </b-row>
    <b-row v-show="isPlanDetails && !isLoading">
      <b-col>
        <b-card 
          header="Plan Details"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white">
        <eb-table :fields="planDetailsFields" :data="customerDetails.PLAN_DETAIL" :dark="dark" ></eb-table>
        </b-card>    
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { getCustomerInfo } from '@/services';
import { API } from '@/config';
import axios from 'axios';
import { SemipolarSpinner } from 'epic-spinners';
import iCustomer from '@/Interface/ICustomer.ts';
import ebInput from '@/components/FormElements/Input.vue';
import CustomerDetailsCard from '@/components/Customer/CustomerDetailsCard.vue';
import ebTable from '@/components/FormElements/TableList.vue';

@Component({
  components: {
    SemipolarSpinner,
    ebInput,
    CustomerDetailsCard,
    ebTable,
  },
})
export default class MakeTransacation extends Vue {
  private customerDetails: iCustomer = {};
  private searchText: string = '';
  private searchPlaceholder = 'Enter Account Number';
  private accountType = null;
  private searchOption = [
    { value: null, text: 'Select Account Type', disabled: true },
    { value: 'ACC', text: 'Account No' },
    { value: 'VC', text: 'VC' },
    { value: 'STB', text: 'STB' },
    { value: 'RMN', text: 'RMN' },
  ];
  private isPlanDetails: boolean = false;
  private isLoading: boolean = false;
  private planDetailsFields: any = [
    {
      key: 'PLAN_NAME',
      label: 'Plan Name',
      sortable: true,
    },
    {
      key: 'PLAN_STATUS',
      label: 'Plan Status',
      sortable: true,
    },
    {
      key: 'PLAN_OBJ',
      label: 'Plan Obj',
      sortable: true,
    },
    {
      key: 'DEAL_OBJ',
      label: 'Deal Obj ',
    },
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
      const cred = {
        USERID: 'NARINDER1',
        PASSWORD: 'Fastway@123',
        DEVICEIMEI: '352356079376711',
      };
      const data = {
        CREDS: JSON.stringify(cred),
        PARAMS: this.searchText,
        TYPE: this.accountType,
      };
      this.isLoading = true;
      const result = await getCustomerInfo(data);
      this.customerDetails = result.data;
      this.isLoading = false;
      this.isPlanDetails = true;
    } catch (e) {
      this.isLoading = false;
      this.isPlanDetails = false;
      this.$toasted.error(e.response.data);
    }
  }
}
</script>
