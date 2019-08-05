import {
    Module,
    VuexModule,
    Mutation,
    Action,
} from 'vuex-module-decorators';
import iLogin from '@/Interface/ILogin';

@Module({
    namespaced: true,
})
export default class Auth extends VuexModule {

    public loginUserData: iLogin = {
        USERID: '',
        DEVICEIMEI: '',
        PASSWORD: '',
    };

    public searchCustomer: any = {
        ACCOUNT_NO: '',
        ACCOUNT_POID: '',
        SERVICE_OBJ: '',
    }

    @Mutation
    public setLoginUser(data: any) {
        this.loginUserData = data;
    }

    @Action({ commit: 'setLoginUser' })
    public loginUser(data: any) {
        return data;
    }

    get getloginUser() {
        return this.loginUserData;
    }

    get getUserID() {
        return this.loginUserData.USERID;
    }

    @Mutation
    public setSearchCustomer(data: any) {
        this.searchCustomer = data;
    }

    @Action({ commit: 'setSearchCustomer' })
    public customer(data: any) {
        return data;
    }

    get getSearchCustomer() {
        return this.searchCustomer;
    }
}
