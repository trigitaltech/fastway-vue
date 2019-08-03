import {
    Module,
    VuexModule,
    Mutation,
    Action,
} from 'vuex-module-decorators';
import iProduct from '@/Interface/IProduct';

@Module({
    namespaced: true,
})
export default class Product extends VuexModule {

    public item: iProduct[]= [];
    public searchProductText = '';

    @Mutation
    public setProducts(data: any) {
        this.item = data;
    }

    @Mutation
    public setSearchProduct(data: any) {
        this.searchProductText = data;
    }

    @Action({ commit: 'setProducts' })
    public products(data: any) {
        return data;
    }

    @Action({ commit: 'setSearchProduct' })
    public search(data: any) {
        return data;
    }

    get productList() {
        return this.item;
    }

    get searchText() {
        return this.searchProductText;
    }

    public productById(id: string) {
        return this.item.filter((eb, idx) => eb.id === id );
    }
}
