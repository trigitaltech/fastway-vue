<template>
  <div class="form-group">
    <router-link :to="routeLink" v-if="isRouteLink">
      <a class="text-muted float-right">
        <small v-text="routeLinkText"></small>
      </a>
    </router-link>
    <label :for="id">{{ lable }}</label>
    <input
      class="form-control"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      required
      :class="classic"
      :value="value"
      :disabled="disabled"
      @input="e=>$emit('input',e.target.value)"
    >
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Input extends Vue {
  @Prop({ default: '' })
  private value!: string;

  @Prop({ default: 'text' })
  private type!: string;

  @Prop({ default: 'textbox', required: true })
  private id!: string;

  @Prop({ default: 'Enter your text here' })
  private placeholder!: string;

  @Prop({ default: 'Lable', required: true })
  private lable!: string;

  @Prop({ default: false })
  private isRouteLink!: boolean;

  @Prop({ default: '#' })
  private routeLink!: string;

  @Prop({ default: 'click' })
  private routeLinkText!: string;

  @Prop()
  private classic!: string;

  @Prop()
  private disabled!: boolean;
}
</script>
