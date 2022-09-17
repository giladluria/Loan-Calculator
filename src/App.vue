<template>
  <q-layout view="hHh Lpr lFf" dir="rtl">
    <q-header>
      <q-toolbar>
        <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
        />

        <q-toolbar-title align="center">
          מחשבון הלוואה
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer :width="250"
              v-model="leftDrawerOpen"
              bordered
              content-class="bg-grey-2"
              side="right"

    >
      <q-list>
        <q-item-label header>
          <q-icon name="school"/>
          מושגים
        </q-item-label>

        <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px; margin-left: 15px"
            icon="explore"
            label="ריבית קבועה"
            header-class="bg-blue-grey text-white"
            expand-icon-class="text-white"
            group="terms"
        >
          <q-card>
            <q-card-section>
              שיעור הריבית נקבע בעת לקיחת ההלוואה ונשאר קבוע כל העת עד סיום החזרתה.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <br>
        <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px; margin-left: 15px"
            icon="explore"
            label="ריבית משתנה"
            header-class="bg-orange-7 text-white"
            expand-icon-class="text-white"
            group="terms"
        >
          <q-card>
            <q-card-section>
              שיעור הריבית משתנה מעת לעת ממועד לקיחת ההלוואה ועד סיום החזרתה.
              <br>
              בהלוואה פרטית בדרך כלל יתבצע השינוי בדרך של הצמדת הריבית לריבית הנקבעת על ידי בנק ישראל.

            </q-card-section>
          </q-card>
        </q-expansion-item>
        <br>
        <q-expansion-item
            class="shadow-1 overflow-hidden"
            id="loanTerm"
            style="border-radius: 30px; margin-left: 15px"
            icon="explore"
            label="תקופת ההלוואה"
            header-class="bg-blue-grey text-white"
            expand-icon-class="text-white"
            group="terms"
        >
          <q-card>
            <q-card-section>
              בקצרה - ככל שתקופת ההלוואה ארוכה יותר, נשלם יותר כסף.
              ולכן, ברוב המקרים עדיף לפרוס את תקופת ההלוואה לכמה שפחות שנים.
              <br>
              <br>
              לדוגמה: בהלוואה של 100,000 ש"ח לשלוש שנים בריבית קבועה של 5% סך הריבית לכל התקופה יהיה 7,825 שקלים.
              <br>
              לעומת זאת, אותה הלוואה בפריסה לחמש שנים סך הריבית יהיה 13,227 שקלים.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <br>
        <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px; margin-left: 15px"
            icon="explore"
            label="לוח סילוקין"
            header-class="bg-orange-7 text-white"
            expand-icon-class="text-white"
            group="terms"
        >
          <q-card>
            <q-card-section>
              טבלה המציגה את תשלומי ההלוואה בפירוק למרכיב הקרן ומרכיב הריבית, על פי הסכם ההלוואה.
              לוח סילוקין מאפשר ללווה לראות מה גובה ההחזר החודשי וממה הוא מורכב.
              שינוי בתנאי ההלוואה (שינוי בריבית, תקופה או בסכום) יגרום לשינוי בלוח הסילוקין.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <br>
        <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px; margin-left: 15px"
            icon="explore"
            label="דירוג אשראי אישי"
            header-class="bg-blue-grey text-white"
            expand-icon-class="text-white"
            group="terms"
        >
          <q-card>
            <q-card-section>
              סוג של ציון הניתן ללווה על ידי הגוף המלווה ומשקף מספר קריטריונים כלכליים,
              כמו: היקף נכסים, מצב חשבון בנק, היסטוריית תשלומים,
              מידת היציבות הכלכלית ומהווה הערכה למידת הסיכון שיש בהלוואה.
              ככל שמבקש ההלוואה ייתפס כיציב יותר, כך גם הריבית קטנה.
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <br>
        <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px; margin-left: 15px"
            icon="explore"
            label="הכנסה נטו"
            header-class="bg-orange-7 text-white"
            expand-icon-class="text-white"
            group="terms"
        >
          <q-card>
            <q-card-section>
              סך הכסף שאנחנו מכניסים בחודש באופן קבוע פחות ההוצאות החודשיות הקבועות, ביחס למספר האנשים הגרים באותו משק
              בית

            </q-card-section>
          </q-card>
        </q-expansion-item>
        <br>
        <q-separator color="black" inset />
        <br>
        <q-expansion-item
            class="shadow-1 overflow-hidden"
            style="border-radius: 30px; margin-left: 15px"
            icon="logout"
            label="התנתק"
            header-class="bg-red-8 text-white"
            expand-icon-class="text-red-8"
            @click="logOut()"
        >
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import Home from "./views/Home";
import firebaseInstance from "./middleware/firebase";

export default {
  name: 'LayoutDefault',

  components: {
    Home
  },

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    }
  },
  methods: {
    logOut(){
      firebaseInstance.firebase.auth().signOut()
          .then(()=>{
            this.$router.push('/')
            console.log('logged out successfully')
          }).catch(error => {
        console.error(error)
      })
    },
  }
}
</script>

<style>
</style>
