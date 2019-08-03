import {
    Module,
    VuexModule,
    Mutation,
    Action,
} from 'vuex-module-decorators';

@Module({
    namespaced: true,
})
export default class Auth extends VuexModule {

    public data = {
        _id: null,
    };

    @Mutation
    public setLoginUser(data: any) {
        this.data = { ...data };
    }

    @Action({ commit: 'setLoginUser' })
    public loginUser(data: any) {
        return data;
    }

    get isAuthed() {
        return this.data && this.data._id != null;
    }

    get getloginUser() {
        return this.data;
    }

    get getUserID() {
        return this.data._id;
    }

}
