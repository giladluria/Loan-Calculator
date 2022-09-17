<template>
  <div class="home">

    <p dir="rtl" align="center" style="font-size: larger">
      מחשבון ההלוואות שלפניכם יחשב עבורכם את גובה ההחזרים החודשיים הצפויים לכם על פי סכום הלוואה שתקבעו,
      <br>
       בהתאם לסכום החודשי שביכולתכם להקצות לצורך החזר הלוואה.
    </p>
    <AddItem :tableName="'items'" />

  </div>
</template>

<script>
import AddItem from "../components/AddItem";



export default {
  name: 'Home',
  components: {AddItem},

}

</script>

<style>
body {
  background-color: #eeeeee;
}

</style>
