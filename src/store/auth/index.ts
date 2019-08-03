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
        PASSWORD: ''
    };

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
}
