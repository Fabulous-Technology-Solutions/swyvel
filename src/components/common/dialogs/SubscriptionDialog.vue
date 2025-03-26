<template>
  <q-dialog ref="dialogRef" persistent>
      <q-card style="width: 400px; border-radius: 12px">
        <q-card-section class="q-gutter-y-lg">
          <div class="text-h6">Subscription Plan</div>
          <q-input v-model="formData.name" label="Name" outlined />
          <q-input v-model="formData.price" label="Price" outlined />
          <q-select
            outlined
            v-model="formData.billingPeriod"
            :options="periodOptions"
            dropdown-icon="expand_more"
            label="Billing Period"
          />
          <q-input type="textarea" v-model="formData.features" label="Features" outlined />
          <div class="flex justify-between items-center q-gutter-x-md">
            <q-btn no-caps flat label="Cancel" class="col border rounded-8 q-py-sm" @click="hideDialog" />
            <q-btn type="submit" no-caps flat label="Save" class="col rounded-8 bg-primary text-white q-py-sm" color="primary" />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script setup>
import { ref, reactive, defineExpose } from 'vue';

const formData = reactive({
  name: '',
  price: '',
  billingPeriod: '',
  features: '',
});

const dialogRef = ref(null);

const periodOptions = ref([
  { label: 'Monthly', value: 'monthly' },
  { label: 'Yearly', value: 'yearly' },
]);

const showDialog = (planData) => {
  if (planData) {
    formData.name = planData.plan_name;
    formData.price = planData.price;
    formData.billingPeriod = planData.billingPeriod;
    formData.features = planData.features;
  }
  dialogRef.value.show();
};

const hideDialog = () => {
  dialogRef.value.hide();
};

defineExpose({ showDialog });


</script>
