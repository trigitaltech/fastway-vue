<template>
    <b-card
          header="Customer Details"
          border-variant="info"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <b-row>
            <b-col>
              <eb-input
                lable="Account No"
                id="AccountNo"
                v-model="customerDetails.ACCOUNT_NO"
                :disabled="isInputdDisabled"
              ></eb-input>
            </b-col>
            <b-col>
              <eb-input
                lable="Customer Name"
                id="CusName"
                v-model="customerDetails.CUSTOMER_NAME"
                :disabled="isInputdDisabled"
              ></eb-input>
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <eb-input
                lable="Customer Type"
                id="customerType"
                v-model="customerDetails.CUSTOMER_TYPE"
                :disabled="isInputdDisabled"
              ></eb-input>
            </b-col>
            <b-col>
              <eb-input
                lable="Email Address"
                id="emailId"
                v-model="customerDetails.EMAIL_ID"
                :disabled="isInputdDisabled"
              ></eb-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <eb-input
                lable="Mobile Number"
                id="MobileNO"
                :disabled="isInputdDisabled"
                v-model="customerDetails.MOBILE_NO"
              ></eb-input>
            </b-col>
            <b-col>
              <eb-input
                lable="Service Status"
                id="serviceStatus"
                :disabled="isInputdDisabled"
                v-model="customerDetails.SERVICE_STATUS"
              ></eb-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <eb-input
                lable="City"
                id="city"
                v-model="customerDetails.CITY"
                :disabled="isInputdDisabled"
              ></eb-input>
            </b-col>
            <b-col>
              <eb-input
                lable="State"
                id="state"
                :disabled="isInputdDisabled"
                v-model="customerDetails.STATE"
              ></eb-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <eb-input
                lable="Due Date"
                id="dueDate"
                v-model="customerDetails.DUE_DATE"
                :disabled="isInputdDisabled"
              ></eb-input>
            </b-col>
            <b-col>
              <eb-input
                lable="Total Due Amount"
                id="tDueAmount"
                :disabled="isInputdDisabled"
                v-model="customerDetails.CURRENT_BALANCE_INC_PENDING_CHARGES"
              ></eb-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <eb-input
                lable="Address"
                id="address"
                v-model="customerDetails.ADDRESS"
                :disabled="isInputdDisabled"
              ></eb-input>
            </b-col>
          </b-row>
        </b-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ebInput from '@/components/FormElements/Input.vue';
import iCustomer from "@/Interface/ICustomer.ts";

 @Component({
  components: {
    ebInput,
  }
})
export default class CustomerDetailsCard extends Vue {
    private isInputdDisabled: boolean = true;
    
    @Prop()
    private customerDetails!: iCustomer;
}
</script>

