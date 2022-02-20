<template>

<div class="p-5">

            <vue-cal class="border-info" ref="vuecal"
         small
     
         hide-view-selector
         hide-title-bar
         editable-events
         :events="events"
         

         :time-from="8 * 60" 
         :time-to="19 * 60" 
          :time-step="60" 
          :hide-weekdays="[7]"
          active-view="week"
          :disable-views="['years', 'year','month','day']"
          style="height: 100%"
>
</vue-cal>
</div>


</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'



export default{
    
    name : 'EmploiEtudiant',

  components: { VueCal },
   
  data(){
    return {
      events: [
    {
      start: '2021-06-28 08:30',
      end: '2021-06-28 12:00',
      title: 'Statistique',

    },
    {
      start: '2021-06-28 13:00',
      end: '2021-06-28 16:00',
      title: 'Dev Web',

    },
    {
      start: '2021-06-29 08:30',
      end: '2021-06-29 12:00',
      title: 'UML',
    
    },
    {
      start: '2021-06-30 08:30',
      end: '2021-06-30 12:00',
      title: 'comptabilité',
    
    },
    {
      start: '2021-06-30 13:30',
      end: '2021-06-30 16:00',
      title: 'Théorie des graphes',
    
    },

     {
      start: '2021-07-1 15:30',
      end: '2021-07-1 17:30',
      title: 'ASP.net',
    
    },

     {
      start: '2021-07-02 08:30',
      end: '2021-07-02 12:00',
      title: 'Poo Java',
    
    },
     {
      start: '2021-07-02 15:00',
      end: '2021-07-02 17:00',
      title: 'Dev Mobile',
    
    },
      ]
    }
    
  
  },
 
  }

</script>