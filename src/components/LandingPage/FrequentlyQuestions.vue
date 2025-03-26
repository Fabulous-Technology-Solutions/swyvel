<template>
  <div class="layout-flow q-gutter-y-xl">
    <div class="row justify-center">
      <div class="col-md-6 q-gutter-y-md">
        <div class="font-36 text-bold text-center">Frequently Asked Questions</div>
        <div class="all-paragraphs text-center">
          Everything you need to know about the product and billing.
        </div>
      </div>
    </div>

    <div class="row flex-center">
      <div class="col-md-6  b-rounded">
        <q-list>
          <q-expansion-item
            v-for="(faq, index) in faqs"
            :key="index"
            group="somegroup"
            :label="faq.question"
            :default-opened="index === 0"
            header-class="text-dark"
            class="text-weight-medium"
             expand-icon="none"
            expanded-icon="none"
          >
            <template v-slot:header='{expanded}'>
              <q-item-section>
                {{ faq.question }}
              </q-item-section>
              <q-item-section side>
                <IconComp
                  :icon="expanded ? 'lsicon:minus-outline' : 'formkit:add'"
                  width="24"
                  class="text-primary"
                  height="24"
                />
              </q-item-section>
            </template>
            <q-card class="bg-transparent text-weight-regular text-grey-8">
              <q-card-section>
                {{ faq.answer }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'How does the AI-powered misinformation detection work?',
    answer:
      'Our advanced AI algorithms analyze content across social media platforms to detect potential misinformation. It cross-checks sources, flags suspicious content, and provides risk-level assessments.',
  },
  {
    question: 'Can I customize my social media analytics dashboard?',
    answer: 'No! it will allow you to track the informations about threds and spams',
  },
  {
    question: 'What platforms does this tool support?',
    answer:
      'Great question! there are different  platforms are supported by Swyvel like facebook, twitter, instagram etc',
  },
  {
    question: 'How does threat detection help in social media management?',
    answer:
      'Well, it will allow the user to track the spams through with he/she will make there new and next decisions',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'We are planning for that and trying to give you a free trial ASAP!',
  },
  {
    question: 'How do I manage my subscription and billing?',
    answer:
      'We have a subscription and a billing section which will be helpful for you there is total guidience for you!',
  },
  {
    question: 'Can I add team members to my account?',
    answer:
      'Good question, well we have  seperate dashboards for both admin and the super admin to manage team members',
  },
  {
    question: ' How do I contact customer support?',
    answer: 'You can visit our contact us area where you can contact',
  },
])
</script>

<style scoped></style>
