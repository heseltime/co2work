<script>

export default {
  data() {
    return {
      thisYear: new Date().getFullYear(),
    }
  }
}

</script>

<template>
<footer id="contact">
  <ul>
    <div id="icon-container">
      <a href="https://www.facebook.com/zukunftbildungsalzkammergut">
        <div class="icon">
          <li><span class="fb-icon">f</span></li>
        </div>
      </a>
      <a href="https://zukunft-bildung-salzkammergut.us16.list-manage.com/subscribe?u=3870738811dc9853dddd0694b&id=22ac5d94f4">
        <div class="icon">
          <li><font-awesome-icon icon="envelope" class="fa-icon"/></li>        
        </div>
      </a>
      <a href="https://www.zukunft-bildung-salzkammergut.at">
        <div class="icon">
          <li><font-awesome-icon icon="home" class="fa-icon"/></li>        
        </div>
      </a>
      <a href="https://www.zukunft-bildung-salzkammergut.at/warum/">
        <div class="icon">
          <li><font-awesome-icon icon="info-circle" class="fa-icon"/></li>
        </div>
      </a>
      <a href="https://www.zukunft-bildung-salzkammergut.at/team/">
        <div class="icon">
          <li><font-awesome-icon icon="users" class="fa-icon"/></li>
        </div>
      </a>
    </div>
  </ul>
  <ul class="secondary">
    <a href="https://www.zukunft-bildung-salzkammergut.at/impressum/">Impressum</a>
    <a href="https://www.zukunft-bildung-salzkammergut.at/datenschutz/">Datenschutz</a>
  </ul>
  <p class="green">&copy; {{ thisYear }} co2work @Zukunft Bildung Salzkammergut</p>
</footer>
</template>


<style>

.fb-icon {
  font-weight: 800;
}

.secondary {
  padding: 10px;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  list-style: none;
}

#contact a {
  color: #a683e3;
  margin: 10px;
}

#contact {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.icon {
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1s, box-shadow 0.5s;
  box-shadow: 0 2px 3px rgb(0 0 0 / 12%), 0 2px 2px rgb(0 0 0 / 24%);
}

#icon-container {
  display: flex;
  justify-content: center;
}

.icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 3px 5px 5px rgb(0 0 0 / 12%), 0 3px 5px rgb(0 0 0 / 24%);
}

#contact p {
    font-size: 14px;
    padding: 20px;
}

@media screen and (max-width: 426px) {
 #icon {
   width: 30px;
   height: 30px;
  }
  
  ul li {
    font-size: 12px;
  }
  
  #contact p {
    font-size: 10px;
  }
}

@media screen and (min-width: 2560px) {
 #icon {
   width: 50px;
   height: 50px;
  }
  
  ul li {
    font-size: 20px;
  }
  
  #contact p {
    font-size: 16px;
  }
}

</style>
