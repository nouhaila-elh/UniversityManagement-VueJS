<template >
   <div>
     <br/>
      <br/>
       <br/>
       <br>
       <br>
       <br>
       <br><br>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095; </a>
  </div>
</template>

<script>

export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://www-iuem.univ-brest.fr/scolamar/fr/photos/seance-douverture-jesus-gomez.jpg/@@images/e578ed99-bd94-4939-9087-b30f4a3a987a.jpeg",
        "https://www-iuem.univ-brest.fr/scolamar/fr/actualites/sans-titre2.png/@@images/4e0043d6-2a8d-4ae1-8e63-7ffbe1f8d215.png",
        "https://2.bp.blogspot.com/-YRa8NHH7hJI/XES4bvMyTHI/AAAAAAAAFY8/x5dQ6BTHMmgtxzj4BpIPt3z_oIaBSPUKACLcBGAs/s1600/37948097_2311384815568277_8091862361557696512_n.jpg",
        "https://i.ytimg.com/vi/qeKQZOqOoiI/maxresdefault.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style >
    body{
    background-image: url("https://wallpaperaccess.com/full/1567665.png");
  }
   
   .fade-enter-active,
.fade-leave-active {
  transition: all 0s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:20% !important;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:40%;
  opacity: 0;
}

img {
  height:460px;
  width:90%
 
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

</style>