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
            const searchCustomerData = {
                ACCOUNT_NO: this.customerDetails.ACCOUNT_NO,
                ACCOUNT_POID: this.customerDetails.ACCOUNT_POID,
                SERVICE_OBJ: this.customerDetails.SERVICE_OBJ,
                CUSTOMER_NAME: this.customerDetails.CUSTOMER_NAME
            };
            this.$store.dispatch('auth/customer', searchCustomerData);
            const active: any[] = this.customerDetails.PLAN_LIST;
            this.PLAN_DETAIL = active[0].PLANS;
            this.isLoading = false;
            this.isPlanDetails = true;
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
            text: 'You won't be able to revert this!',
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