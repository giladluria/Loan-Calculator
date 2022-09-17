<template>
  <div class="q-pa-md" align="center">
    <div class="q-gutter-y-md column" style="max-width: 700px">

      <div style="font-size: larger">אנא הזן את הפרטים הבאים:</div>

      <q-badge color="blue-grey" label="הכנסות קבועות (ממוצע חודשי למשק הבית)" style="padding: 10px">
        Model: {{ localEditedItem.income }}
      </q-badge>
      <q-item>
        <q-item-section avatar>

          <q-icon color="primary" name="mdi-cash-multiple"/>
        </q-item-section>
        <q-item-section>
          <q-slider
              v-model="localEditedItem.income"
              :min="0"
              :max="50000"
              :step="500"
              label
              label-always
              color="orange-7"
          />
        </q-item-section>
      </q-item>


      <q-badge color="blue-grey" label="הוצאות קבועות (ממוצע חודשי למשק הבית)" style="padding: 10px">
        Model: {{ localEditedItem.expense }}
      </q-badge>
      <q-item>
        <q-item-section avatar>

          <q-icon color="primary" name="mdi-cart-minus"/>
        </q-item-section>
        <q-item-section>
          <q-slider
              v-model="localEditedItem.expense"
              :min="0"
              :max="15000"
              :step="500"
              label
              label-always
              color="orange-7"
          />
        </q-item-section>
      </q-item>


      <q-badge color="blue-grey" label="מספר נפשות במשפחה (לא כולל ילדים מעל גיל 18)" style="padding: 10px">
        Model: {{ localEditedItem.familyMembers }}
      </q-badge>
      <q-item>
        <q-item-section avatar>

          <q-icon color="primary" name="mdi-human-male-female"/>
        </q-item-section>
        <q-item-section>
          <q-slider
              v-model="localEditedItem.familyMembers"
              :min="1"
              :max="15"
              :step="1"
              label
              label-always
              color="orange-7"
          />
        </q-item-section>
      </q-item>

      <q-badge color="blue-grey" label="סכום ההלוואה המבוקש" style="padding: 10px">
        Model: {{ localEditedItem.loan }}
      </q-badge>
      <q-item>
        <q-item-section avatar>

          <q-icon color="primary" name="mdi-briefcase"/>
        </q-item-section>
        <q-item-section>
          <q-slider
              v-model="localEditedItem.loan"
              :min="1000"
              :max="150000"
              :step="1000"
              label
              label-always
              color="orange-7"
          />
        </q-item-section>
      </q-item>


      <q-badge color="blue-grey" label="תקופת ההלוואה (בחודשים)" style="padding: 10px">
        Model: {{ localEditedItem.loanDuration }}
      </q-badge>
      <q-item>
        <q-item-section avatar>

          <q-icon color="primary" name="mdi-calendar-today"/>
        </q-item-section>
        <q-item-section>
          <q-slider
              v-model="localEditedItem.loanDuration"
              :min="6"
              :max="72"
              :step="6"
              label
              label-always
              color="orange-7"
          />
        </q-item-section>
      </q-item>

      <q-badge color="blue-grey" label="ריבית שנתית באחוזים" style="padding: 10px">
        Model: {{ localEditedItem.interest }}
      </q-badge>
      <q-item>
        <q-item-section avatar>

          <q-icon color="primary" name="mdi-chart-line"/>
        </q-item-section>
        <q-item-section>
          <q-slider
              v-model="localEditedItem.interest"
              :min="0.25"
              :max="15"
              :step="0.25"
              label
              label-always
              color="orange-7"
          />
        </q-item-section>
      </q-item>
    </div>

      <div class="q-pa-md q-gutter-sm">
        <q-btn label="הצג" color="primary" @click="card = true; disposableIncome()" />
        <template v-if="resultMessage">
        <q-dialog v-model="card" >
          <q-card class="my-card" >
            <q-img src="moneyInAJar.jpg" />

            <q-card-section class="q-pt-none" dir="rtl">

              <div class="text-caption text-black" style="font-size: larger; width: 90%">
                <br>
                 ההכנסה הפנויה החודשית היא: {{ disResult }}
                <br>
                תשלום ההלוואה החודשי המשוערך: {{pmtResult}}
                <br>
                <br>
                כדאי לבדוק את תנאי ההלוואה במספר מקומות
                על מנת לקבל את ההצעה הטובה ביותר עבורך.

              </div>
            </q-card-section>

          </q-card>
        </q-dialog>
        </template>
        <template v-else>
        <q-dialog v-model="card">
          <q-card class="my-card" >
            <q-img src="stop-loan.jpg" />

            <q-card-section class="q-pt-none" dir="rtl">

              <div class="text-caption text-black" style="font-size: larger; width: 90%">
                <br>
                ההכנסה הפנויה החודשית היא: {{ disResult }}
                <br>
                תשלום ההלוואה החודשי המשוערך: {{pmtResult}}
                <h5 style="color: red">שימו לב!</h5>
                העלות החודשית של ההלוואה גדולה מהרווח החודשי,
                מה שעלול להוביל לפיגורים בהלוואה והוצאות נוספות.
                בכדי להימנע מכך, כדאי לבדוק את תנאי ההלוואה במספר מקומות
                או במידת הצורך לפרוס את ההלוואה לתקופה ארוכה יותר.
              </div>
            </q-card-section>
<!--            <q-separator />-->
<!--            <q-card-actions align="right">-->
<!--              <q-btn v-close-popup flat color="primary" label="תקופת ההלוואה"   />-->
<!--              <q-icon color="primary" name="school"/>-->
<!--            </q-card-actions>-->
          </q-card>
        </q-dialog>

        </template>
      </div>
  </div>
</template>

<script>
import firestoreDb from '../middleware/firebase/firestore'
// import firebaseInstance from '../middleware/firebase';
import { ResponsiveDirective } from "vue-responsive-components"

export default {
  name: "AddItem",
  directives: {
    responsive: ResponsiveDirective
  },
  data() {
    return {
      text: '',
      card: false,
      disResult: '',
      pmtResult: '',
      resultMessage: true,
      localEditedItem: {
        income: 0,
        expense: 0,
        familyMembers: 1,
        loan: 1000,
        loanDuration: 6,
        interest: 0.25
      },
    }
  },
  methods: {
    async disposableIncome() {
      let result = Math.floor(((this.localEditedItem.income) - (this.localEditedItem.expense)) / (this.localEditedItem.familyMembers));
      this.disResult = result;
      const pmt = firestoreDb.PMT((this.localEditedItem.interest)/100, this.localEditedItem.loanDuration, this.localEditedItem.loan);
      this.pmtResult = pmt;
      if (result >= pmt) {
        this.resultMessage = true
      } else {
        this.resultMessage = false
      }
      await firestoreDb.insertCal({item: {result}, cal: this.localEditedItem})
    },
    // goToTerms() {
    //
    // },
  },
}

</script>

<style scoped>

</style>
