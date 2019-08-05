<template>
  <div>
    <b-row>
      <b-table
        hover
        selectable
        :select-mode="selectMode"
        head-variant="light"
        table-class="table-events-list"
        :responsive="true"
        :items="data"
        :fields="fields"
        :filter="filter"
        :per-page="perPage"
        :current-page="currentPage"
        outlined
        @row-selected="e => this.$emit('row-selected',e)">

        <template slot="selected" slot-scope="{ rowSelected }">
          <span v-if="rowSelected">✔</span>
        </template>

      </b-table>
    </b-row>

    <b-row>
      <div class="col-md d-flex align-items-center">
        <span class="mr-2">Show</span>
        <select-component
          class="select-per-page"
          :class="cssClass"
          :options="perPageList"
          v-model="perPage"
        ></select-component>
        <span class="ml-2">per page</span>
      </div>
      <div class="col-md mt-2">
        <b-pagination
          class="paginate-events"
          :total-rows="data.length"
          :per-page="perPage"
          v-model="currentPage"
          prev-text="<"
          next-text=">"
          align="center"
          hide-goto-end-buttons
        />
      </div>
      <div class="col-md mt-2 text-right">
        <slot name="process">
        </slot>
      </div>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SelectComponent from './SelectComponent.vue';

@Component({
  components: {
    SelectComponent,
  },
})
export default class TableListComponent extends Vue {

  @Prop(Array)
  public readonly fields!: any[];

  @Prop(Array)
  public readonly data!: any[];

  @Prop(String)
  public readonly filter!: string;

  @Prop({ default: 'single' })
  public readonly selectMode!: string;

  @Prop({ default: 'w-25' })
  public readonly cssClass!: string;

  private currentPage: number = 1;
  private perPage: string = '10';
  private perPageList = [
        {
            text: '10',
            value: '10',
        },
        {
            text: '50',
            value: '50',
        },
        {
            text: '100',
            value: '100',
        },
        {
            text: '150',
            value: '150',
        },
        {
            text: '200',
            value: '200',
        },
    ];
}
</script>

<style lang="scss" scoped>
.table-events-list {
  margin-bottom: 0;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 40px;
  overflow: hidden;
}
</style>
