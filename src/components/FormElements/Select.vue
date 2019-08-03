<template>
 <div class="form-group">
    <router-link :to="routeLink" v-if="isRouteLink">
      <a class="text-muted float-right">
        <small v-text="routeLinkText"></small>
      </a>
    </router-link>
    <label :for="id">{{ lable }}</label>
    <v-select
      class="form-group text-muted"
      :options="options"
      :placeholder="placeholder"
      :value= "selected"
      @input="e=>$emit('input',e)"
    ></v-select>
 </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import vSelect from 'vue-select';
import ICommonObj from '@/Interface/ILoginParam.ts';

@Component({
  components: {
    vSelect,
  },
})
export default class Select extends Vue {
  @Prop()
  private options!: any[];

  @Prop()
  private selected!: ICommonObj;

  @Prop()
  private placeholder!: string;

  @Prop()
  private lable!: string;

  @Prop()
  private isRouteLink!: boolean;

  @Prop()
  private id!: string;

}
</script>

<style>
.vs__dropdown-toggle{
    padding: 6px 1px 6px !important;
    cursor: pointer !important;
    border: 1px solid rgb(222, 226, 230) !important;

}
.vs__search{
cursor: pointer !important;
  color: rgb(183, 181, 189) !important;
}
</style>
