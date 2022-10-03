<script>
import $ from 'jquery';

import Slider from '@vueform/slider'

import TheAlertBoxOK from "@/components/TheAlertBoxOK.vue";
import TheInfoModal from "@/components/TheInfoModal.vue";

export default {

  components: {
    Slider,
    TheInfoModal,
},
  // Properties returned from data() becomes reactive state
  // and will be exposed on `this`.
  data() {
    return {
      addresses: [],
	  originAddressSuggestions: [],
	  originStreetInput: '',
	  originCityInput: '',
	  originZipInput: '',
	  originAddressSelected: {},
	  destinationAddressSuggestions: [],
	  destinationStreetInput: '',
	  destinationCityInput: '',
	  destinationZipInput: '',
	  destinationAddressSelected: {},
	  
	  originDestinationHaversineDistance: 0,
	  percentages: [20,20,20,20,20],
	  days: 5,

	  resultCommute: 0,
	  //resultOffice: days * 480,

	  gemeindeHubFootprint: 77,

	  shareUrl: 'http://co2work.at',
	  shareDescription: 'co2work - Lass Dir den CO2 Fußabdruck für deinen Arbeitsweg berechnen und ermittle Einsparungspotentiale! ', // base without result info
    }
  },

  // vue simple suggest
  methods: {
	getOriginSuggestionList(street, zip, city) {
		// reset other drop down in case filled
		this.destinationAddressSuggestions = []

		// api (proxied) access
		var apiKey = '7166-631A-5394-4C03-9106-0A93-C433-2613'

		var apiPath = '/1.0/address/find?country=at&zip=' + zip + '&city=' + city + '&street-address=' + street + '&street-number=&offset=1&limit=100'
		var prodMountpoint = '/api' // /api/
		if (import.meta.env.PROD) {
			apiPath = prodMountpoint + apiPath
		}

		// axios call with min lengths for string entry
		if (street.length && street.length > 3 || !street.length) {
			this.axios.get(apiPath, {
				auth: {
					username: apiKey,
					password: ''
				},
				withCredentials: false,
				//baseURL: "http://api.opendata.host/",
			})
				.then(json => this.originAddressSuggestions = json.data.addresses.filter((e, i, a) => 
					i === a.findIndex(t => (t.street===e.street)))
					.slice(0,5))
				.catch(err => console.log(err.message));
		}
	},
	getDestinationSuggestionList(street, zip, city) {
		// reset other drop down in case filled
		this.originAddressSuggestions = []
		
		// api (proxied) access
		var apiKey = '7166-631A-5394-4C03-9106-0A93-C433-2613'

		var apiPath = '/1.0/address/find?country=at&zip=' + zip + '&city=' + city + '&street-address=' + street + '&street-number=&offset=1&limit=100'
		var prodMountpoint = '/api' // /api/
		if (import.meta.env.PROD) {
			apiPath = prodMountpoint + apiPath
		}

		// axios call with min lengths for string entry
		if (street.length && street.length > 3 || !street.length) {
			this.axios.get(apiPath, {
				auth: {
					username: apiKey,
					password: ''
				},
				withCredentials: false,
				//baseURL: "http://api.opendata.host/",
			})
				.then(json => this.destinationAddressSuggestions = json.data.addresses.filter((e, i, a) => 
					i === a.findIndex(t => (t.street===e.street)))
					.slice(0,5))
				.catch(err => console.log(err.message));
		}
        
	},
	selectOrigin(o) {
		// grab address json object inclduing coordinates
		this.originAddressSelected = o
		console.log(this.originAddressSelected)

		// form presentation: complete form inputs
		this.originStreetInput = o.street
		this.originCityInput = o.city
		this.originZipInput = o.postalCode

		// mark with a light greenbackground and logic form next button

		// (data driven) form presentation: reset search results
		this.originAddressSuggestions = []
	},
	selectDestination(o) {
		// grab address json object inclduing coordinates
		this.destinationAddressSelected = o
		console.log(this.destinationAddressSelected)

		// form presentation: complete form inputs
		this.destinationStreetInput = o.street
		this.destinationCityInput = o.city
		this.destinationZipInput = o.postalCode

		// mark with a light greenbackground and logic form next button

		// (data driven) form presentation: reset search results
		this.destinationAddressSuggestions = []
	},
	deg2rad(deg) {
		return deg * (Math.PI/180)
	},
	calculateDistance() {
		var lat1 = this.originAddressSelected.latitude;
		var lon1 = this.originAddressSelected.longitude;
		var lat2 = this.destinationAddressSelected.latitude;
		var lon2 = this.destinationAddressSelected.longitude;

		var R = 6371; // Radius of the earth in km
		var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
		var dLon = this.deg2rad(lon2-lon1); 
		var a = 
			Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
			Math.sin(dLon/2) * Math.sin(dLon/2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
		this.originDestinationHaversineDistance = d;
	},
	sum(arr) {
		return arr.reduce((partialSum, a) => partialSum + a, 0);
	},
	sliderManager(x) {
		var sum = this.sum(this.percentages);
		if (sum > 100) {
			var adjustment = Math.ceil((sum - 100) / 4);
			console.log(adjustment);
			for (let i = 0; i < this.percentages.length; i++) {
				if (i !== x && this.percentages[i] > adjustment) {
					this.percentages[i] = this.percentages[i] - adjustment;
				} else if (i !== x) { // percentage left to subtract from next item
					let carryOver = (adjustment - this.percentages[i]) / 4;
					this.percentages[i] = 0;
					adjustment = adjustment + (carryOver / (this.percentages.length - i)); 
				}

				// check if adjustments still carried over at end of iteration
				if (i == this.percentages.length - 1 && this.sum(this.percentages) > 100) {
					i = 0;
				}
			}	
		} else {
			var adjustment = Math.floor((100 - sum) / 4);
			for (let i = 0; i < this.percentages.length; i++) {
				if (i !== x) {
					this.percentages[i] = this.percentages[i] + adjustment;
				}
			}	
		}

		// distribute remainder top down for even 100 percentage point sum
		//for (let y = 0; y < sum % 4; y++) {
			//if (y !== x) {
				//this.percentages[y] = this.percentages[y] + 1;
			//}
		//}	

		this.profile = '';
	},
	setProfile(arr) {
		this.percentages = arr;
	},
	logCalculationParams() {
		console.log('params were ...');
		console.log('distance Haversine: ', this.originDestinationHaversineDistance);
		console.log('days commuting: ', this.days);
		console.log('mode mix: ', this.percentages);
		console.log(' ... [auto, elektro, öffi, rad, zu fuß]');
		console.log(' ---- formula A/B (1)');
		console.log(' ---> formula A: 2 x Haversine (', this.originDestinationHaversineDistance, ') x days (', this.days, ') x mode (', this.percentages, ') x 0.01 x modeFactor');
		console.log(' ---> formula B: days (', this.days, ') x 480 gCO2 mean');
		console.log(' ++++ formula C (2)');
		console.log(' ---> formula C: (part 1/', this.days, ') - gemeindehub footprint (offset) ', this.gemeindeHubFootprint);
	},
	unsetProfileButton() {
		$("input[name='profile']").prop( "checked", false );
	}
  },
  computed: {
	officeConsumption() {
		return this.days * 480;
	},
	commuteOutput() {
		var coeff = this.days * 2 * this.originDestinationHaversineDistance;

		var weightedCarPercentage = this.percentages[0] * 0.01 * 216.6;
		var weightedEPercentage = this.percentages[1] * 0.01 * 150; // <------- this number is missing, 150 co2e pkm is my best guess
		var weightedPublicPercentage = this.percentages[2] * 0.01 * 59.5;
		var weightedBikePercentage = this.percentages[3] * 0.01 * 0; // !
		var weightedFootPercentage = this.percentages[4] * 0.01 * 0; // consider combining these, and splitting "bahn" and "bus" per miro board

		var sum = weightedCarPercentage + weightedEPercentage + weightedPublicPercentage;

		this.resultCommute = Math.round(Math.floor(coeff * sum) / 500) * 500;
		return this.resultCommute / 1000; // div by 1000 for kg
	},
	savings() {
		return (Math.round((Math.floor(this.resultCommute/this.days) - this.gemeindeHubFootprint) / 500) * 500) / 1000; // div by 1000 for kg
	}
  },
  // jquery for basic form functionality
  mounted() {
	// content population
	//this.getSuggestionList('Wald', '', '');
	//console.log(this.addresses);
	$("input[value='balance']").prop( "checked", true );

	// form structuring
	var $firstButton = $(".first"),
		$secondButton = $(".second"),
		$input = $("input"),
		$name = $(".name"),
		$more = $(".more"),
		$yourname = $(".yourname"),
		$reset = $(".reset"),
		$ctr = $(".container");

	$firstButton.on("click", function(e){
		// comment first three lines to go fast
		var inputOriginOk = $("label.inputOrigin").hasClass("inputSelectionOk")
		var inputDestinationOk = $("label.inputDestination").hasClass("inputSelectionOk")
		
		if(inputOriginOk && inputDestinationOk) {
		// go fast
		//if(true) {
			$(this).text("...").delay(200).queue(function(){
			$ctr.addClass("center slider-two-active").removeClass("full slider-one-active");
			});
		} else {
			$firstButton.html("Eingaben erorderlich");
			$firstButton.addClass("button-response");
		}
		e.preventDefault();
	});

	$secondButton.on("click", function(e){
		$(this).text("...").delay(200).queue(function(){
		$ctr.addClass("full slider-three-active").removeClass("center slider-two-active slider-one-active");
		$name = $name.val();
		if($name == "") {
			$yourname.html("Anonymous!");
		}
		else { $yourname.html($name+"!"); }
		});
		e.preventDefault();
	});

	// go fast
	//$firstButton.click();
	//$secondButton.click();
  }
}

</script> 

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Der co2work <span class="green">CO2-Emissionen-Ersparnis</span> Rechner:</template>

    <h4>Lass Dir den CO2 Fußabdruck für deinen Arbeitsweg berechnen und ermittle Einsparungspotentiale.
	<span class="green"><TheInfoModal/></span></h4>
  </WelcomeItem>

  <WelcomeItem class="main-item">
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading></template>

       <div class="container slider-one-active">
        <div class="steps">
          <div class="step step-one">
            <div class="liner"></div>
            <span>Strecke</span>
          </div>
          <div class="step step-two">
            <div class="liner"></div>
            <span>Parameter</span>
          </div>
          <div class="step step-three">
            <div class="liner"></div>
            <span>Ergebnis</span>
          </div>
        </div>
        <div class="line">
          <div class="dot-move"></div>
          <div class="dot zero"></div>
          <div class="dot center"></div>
          <div class="dot full"></div>
        </div>
        <div class="slider-ctr">
          <div class="slider">
            <form class="slider-form slider-one">
              <h2>Deine Strecke</h2>
			  <h4>Wohnort</h4>
              <label class="input inputOrigin" :class="{ inputSelectionOk: originAddressSelected.longitude }">
				<input type="text" class="originCity" name="originCity" placeholder="Wohnort" v-model="originCityInput" @keyup="getOriginSuggestionList(originStreetInput, originZipInput, originCityInput)">
				<input type="text" class="originZip" name="originZip" placeholder="Postleitzahl" v-model="originZipInput" @keyup="getOriginSuggestionList(originStreetInput, originZipInput, originCityInput)">
                <input type="text" class="originStreet" name="originStreet" placeholder="Straße ohne Nummer" v-model="originStreetInput" @keyup="getOriginSuggestionList(originStreetInput, originZipInput, originCityInput)">	
              </label>
			  <div class="dropdown">
				<div v-if="originAddressSuggestions.length" class="dropdown-ul">
					<div v-for="address in originAddressSuggestions" :key="address.street" class="dropdown-li">
						<a href="#" @click="selectOrigin(address)">{{ address.street }} <span class="light">{{ address.postalCode }} {{ address.city }}</span></a>
					</div>
				</div>
			  </div>
			  <h4>Arbeitsort</h4>
			  <label class="input inputDestination" :class="{ inputSelectionOk: destinationAddressSelected.longitude }">
				<input type="text" class="originCity" name="destinationCity" placeholder="Arbeitsort" v-model="destinationCityInput" @keyup="getDestinationSuggestionList(destinationStreetInput, destinationZipInput, destinationCityInput)">
				<input type="text" class="destinationZip" name="destinationZip" placeholder="Postleitzahl" v-model="destinationZipInput" @keyup="getDestinationSuggestionList(destinationStreetInput, destinationZipInput, destinationCityInput)">
                <input type="text" class="destinationStreet" name="destinationStreet" placeholder="Straße ohne Nummer" v-model="destinationStreetInput" @keyup="getDestinationSuggestionList(destinationStreetInput, destinationZipInput, destinationCityInput)">
              </label>
			  <div class="dropdown">
				<div v-if="destinationAddressSuggestions.length" class="dropdown-ul">
					<div v-for="address in destinationAddressSuggestions" :key="address.street" class="dropdown-li">
						<a href="#" @click="selectDestination(address)">{{ address.street }} <span class="light">{{ address.postalCode }} {{ address.city }}</span></a>
					</div>
				</div>
			  </div>
              <button class="first next" @click="calculateDistance()">Zum zweiten Schritt</button>
			  
			<TheAlertBoxOK />

			<div class="fb-share-button share-button" data-href="http://www.co2work.at" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.co2work.at%2F&amp;quote=THE_CUSTOM_TEXT" class="fb-xfbml-parse-ignore">Share</a></div>
			
			<a class="twitter-share-button share-button"
			href="https://twitter.com/intent/tweet?text=Lass%20Dir%20den%20CO2%20Fußabdruck%20für%20deinen%20Arbeitsweg%20berechnen%20und%20ermittle%20Einsparungspotentiale"
			data-size="large" data-lang="de">
			Tweet</a>

            </form>
            <form class="slider-form slider-two">
			  <div class="slider-item slider-Days">
				<h4>Pendeltage</h4>
				<Slider v-model="days" :max=7 />
			  </div>
              <h4>Pendelverkehrsprofil</h4>
			  <div class="label-ctr">
                <label class="radio">
                  <input type="radio" value="eco" name="profile" @click="setProfile([0, 0, 60, 20, 20])">
                  <div class="fa-icon-container emot">
                    <font-awesome-icon icon="recycle" class="fa-icon"/>
                  </div>
                </label>
				<label class="radio">
                  <input type="radio" value="balance" name="profile" @click="setProfile([20, 20, 20, 20, 20])">
                  <div class="fa-icon-container emot">
                    <font-awesome-icon icon="balance-scale" class="fa-icon"/>
                  </div>
                </label>
				<label class="radio">
                  <input type="radio" value="car" name="profile" @click="setProfile([90, 0, 0, 0, 10])">
                  <div class="fa-icon-container emot">
                    <font-awesome-icon icon="car" class="fa-icon"/>
                  </div>
                </label>
			  </div>
              <div class="label-ctr">
				<div class="slider-item slider-Driving">
					<font-awesome-icon icon="car" class="fa-icon"/>
					<Slider v-model="percentages[0]" @update="sliderManager(0)" @click="unsetProfileButton()"  /> <!-- showTooltip="drag" -->
				</div>
				<div class="slider-item slider-Electric">
					<font-awesome-icon icon="bolt" class="fa-icon"/>
					<Slider v-model="percentages[1]" @update="sliderManager(1)" @click="unsetProfileButton()" />
				</div>
				<div class="slider-item slider-Public">
					<font-awesome-icon icon="subway" class="fa-icon"/>
					<Slider v-model="percentages[2]" @update="sliderManager(2)" @click="unsetProfileButton()" />
				</div>
				<div class="slider-item slider-Biking">
					<font-awesome-icon icon="bicycle" class="fa-icon"/>
					<Slider v-model="percentages[3]" @update="sliderManager(3)" @click="unsetProfileButton()" />
				</div>
				<div class="slider-item slider-Walking">
					<font-awesome-icon icon="walking" class="fa-icon"/>
					<Slider v-model="percentages[4]" @update="sliderManager(4)" @click="unsetProfileButton()" />
				</div>
              </div>
              <button class="second next" @click="logCalculationParams()">Ergebnis ermitteln</button>
            </form>
            <div class="slider-form slider-three">
              <h3>Danke für Deine Eingaben!</h3>
			  <h4><span class="green">Ergebnis</span></h4>
			  <CardSlider :officeConsumption="this.officeConsumption" :commuteOutput="this.commuteOutput" :savings="this.savings" />

			  <!--<h4 class="green"><span class="green">gCO2 Ausstoß pro Arbeitswoche</span></h4>
			  <h1>{{ commuteOutput }} gCO2</h1>
			  <h4 class="green"><span class="green">Energieeinsatz Büro pro Arbeitswoche</span></h4>
			  <h1>{{ officeConsumption }} CO2e</h1>-->

			  
			  <h4 class="green"><a href="" class="green">Neuberechnung</a></h4>
			  
            </div>
          </div>
        </div>
      </div>  

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Teilen</template>

    Teile dein Ergebnis um auf diese Initiative aufmerksam zu machen! Klick Dich im Rechner durch um teilbare Links mit deinem Ergebnis (Verbrauch und Einsparungspotential) zu erhalten.

  
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Am Laufenden Bleiben</template>

    Am Besten <a href="https://zukunft-bildung-salzkammergut.us16.list-manage.com/subscribe?u=3870738811dc9853dddd0694b&id=22ac5d94f4">den Newsletter</a> abonnieren um die wichtigsten Updates direkt zu erhalten.
  </WelcomeItem>
</template>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped>

@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
@import url(https://fonts.googleapis.com/css?family=Pacifico);

* {
	font-size: 16px;
}

button {
  margin: 20px 0;
}

input:focus,
button:focus {
	outline: none;
}

button:hover,
.reset:hover {
	opacity: .8;
}

button:active,
.reset:active {
	opacity: .5;
}

.container {
	width: 300px;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}

.steps {
	margin-bottom: 10px;
	position: relative;
	height: 25px;
}

.steps > div {
	position: absolute;
	top: 0;
	-webkit-transform: translate(-50%);
	-ms-transform: translate(-50%);
	transform: translate(-50%);
	height: 25px;
	padding: 0 5px;;
	display: inline-block;
	width: 80px;
	text-align: center;
	-webkit-transition: .3s all ease;
	transition: .3s all ease;
}

.steps > div > span {
	line-height: 25px;
	height: 25px;
	margin: 0;
	color: #777;
	font-family: 'Roboto', sans-serif;
	font-size: .9rem;
	font-weight: 300;
}

.steps > div > .liner {
	position: absolute;
	height: 2px;
	width: 0%;
	left: 0;
	top: 50%;
	margin-top: -1px;
	background: #999;
	-webkit-transition: .3s all ease;
	transition: .3s all ease;
}

.step-one {
	left: 0;
}

.step-two {
	left: 50%;
	clip: rect(0, 0px, 25px, 0px);
}

.step-three {
	left: 100%;
	clip: rect(0, 0px, 25px, 0px);
}

.line {
	width: 100%;
	height: 5px;
	background: #ddd;
	position: relative;
	border-radius: 10px;
	overflow: visible;
	margin-bottom: 20px;
}

.line .dot-move {
	position: absolute;
	top: 50%;
	left: 0%;
	width: 15px;
	height: 15px;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	background: #ddd;
	border-radius: 50%;
	-webkit-transition: .3s all ease;
	transition: .3s all ease;
}

.line .dot {
	position: absolute;
	top: 50%;
	width: 15px;
	height: 15px;
	left: 0;
	background: #ddd;
	border-radius: 50%;
	-webkit-transition: .3s all ease;
	transition: .3s all ease;
	-webkit-transform: translate(-50%, -50%) scale(.5);
	-ms-transform: translate(-50%, -50%) scale(.5);
	transform: translate(-50%, -50%) scale(.5);
}

.line .dot.zero {
	left: 0%;
	background: #bbb;
}

.container.slider-one-active .dot.zero {
	background: #5892fc;
}

.line .dot.center {
	left: 50%;
	background: #bbb
}

.line .dot.full {
	left: 100%;
	background: #bbb
}

.slider-ctr {
	width: 100%;
	overflow: hidden;
	padding: 25px;
	margin-left: -25px;	
}

.slider {
	/*overflow: hidden;*/
	width: 900px;
	-webkit-transition: .3s all ease;
	transition: .3s all ease;
	-webkit-transform: translate(0px) scale(1);
	-ms-transform: translate(0px) scale(1);
	transform: translate(0px) scale(1);
}

.container.slider-one-active .slider-two,
.container.slider-one-active .slider-three {
	-webkit-transform: scale(.5);
	-ms-transform: scale(.5);
	transform: scale(.5);
}

.container.slider-two-active .slider-one,
.container.slider-two-active .slider-three {
	-webkit-transform: scale(.5);
	-ms-transform: scale(.5);
	transform: scale(.5);
}

.slider-two {
	left: -30px;
}

.container.slider-three-active .slider-one,
.container.slider-three-active .slider-two {
	-webkit-transform: scale(.5);
	-ms-transform: scale(.5);
	transform: scale(.5);
}

.slider-three {
	right: -200px;
}

.slider-one,
.slider-two,
.slider-three {
	-webkit-transition: .3s all ease;
	transition: .3s all ease;
}

.slider-form {
	float: left;
	width: 300px;
	padding: 18px;
	text-align: center;
	z-index: 1;
}

.slider-form h2 {
	font-size: 1.5rem;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	margin-bottom: 30px;
	color: #999;
	position: relative;
}

.slider-form h2 .yourname {
	font-weight: 400;
}

.slider-form h3 {
	font-size: 1.5rem;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	margin-bottom: 20px;
	line-height: 1.5;
	color: #999;
	position: relative;
}

.slider-form h4 {
	font-size: 1.2rem;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	margin: 10px 0 20px;
	line-height: 1.2;
	color: #999;
	position: relative;
}

.slider-form h3 .balapa {
	font-family: 'Pacifico', sans-serif;
	display: inline-block;
	color: #5892fc;
	text-decoration: none
}

.slider-form [type="text"] {
	width: 80%;
	box-sizing: border-box;
	padding: 15px 20px;
	background: #fafafa;
	border: 1px solid transparent;
	color: #777;
	border-radius: 50px;
	margin-bottom: 10px;
	font-size: 1rem;
	font-family: 'Roboto', sans-serif;
	position: relative;
	z-index: 99;
}

.slider-form [type="text"].inputSecondary {
	padding: 7px 20px;
	border-radius: 20px;
	margin: 0 10px 10px 0px;
	width: 70%;
}

.slider-form [type="text"]:focus {
	background: #fcfcfc;
	border: 1px solid #ddd;
}

.slider-form button,
.reset {
  display: inline-block;
  text-decoration: none;
	background: #5892fc;
	border: none;
	color: white;
	padding: 10px 25px;
	font-size: 1rem;
	border-radius: 3px;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	position: relative;
}

/*  emot */

.label-ctr {
	margin-bottom: 20px;
}

label.radio {
	height: 55px;
	width: 55px;
	display: inline-block;
	margin: 0 10px;
	background: transparent;
	position: relative;
	border-radius: 50%;
	cursor: pointer
}

label.radio input {
	visibility: hidden
}

label.radio input:checked + .emot {
	-webkit-transform: scale(1.25);
	-ms-transform: scale(1.25);
	transform: scale(1.25);
}

label.radio input:checked + .emot,
label.radio input:checked + .emot .mouth {
	border-color: #5892fc;
}

label.radio input:checked + .emot:before,
label.radio input:checked + .emot:after {
	background: #5892fc;
}

label.radio .emot {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #fafafa;
	border-radius: 50%;
	border: 2px solid #ddd;
	-webkit-transition: .3s all ease;
	transition: .3s all ease;
}

label.smiley .emot:before {
	content: "";
	position: absolute;
	top: 15px;
	left: 15px;
	width: 5px;
	height: 10px;
	background: #ddd;
}

label.smiley .emot:after {
	content: "";
	position: absolute;
	top: 15px;
	right: 15px;
	width: 5px;
	height: 10px;
	background: #ddd;
}

label.radio .emot .mouth {
	position: absolute;
	bottom: 10px;
	right: 15px;
	left: 15px;
	height: 15px;
	border-radius: 50%;
	border: 3px solid #ddd;
	background: transparent;
	clip: rect(0, 35px, 10px, 0);
}

label.radio .emot .mouth.smile {
	-webkit-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	transform: rotate(180deg);
}

label.radio .emot .mouth.sad {
	-webkit-transform: translateY(50%);
	-ms-transform: translateY(50%);
	transform: translateY(50%);
}

/*	center */

.container.center .line .dot-move {
	left: 50%;
	-webkit-animation: .3s anim 1;
}

.container.center .line .dot.center {
	background: #5892fc;
}

.container.center .slider {
	-webkit-transform: translate(-300px);
	-ms-transform: translate(-300px);
	transform: translate(-300px);
}

.container.center .step-two {
	clip: rect(0, 100px, 25px, 0px);
}

.container.center .step-one .liner {
	width: 100%;
}

/*	full */

.container.full .line .dot-move {
	left: 100%;
	-webkit-animation: .3s anim 1;
}

.container.full .line .dot.full {
	background: #5892fc;
}

.container.full .slider {
	-webkit-transform: translate(-800px);
	-ms-transform: translate(-800px);
	transform: translate(-800px);
}

.container.full .step-two,
.container.full .step-three {
	clip: rect(0, 100px, 25px, 0px);
}

.container.full .step-one .liner,
.container.full .step-two .liner {
	width: 100%;
}

/* icon config of form */
.fa-icon {
	position: relative;
	margin: 8px 0;
	color: gray;
	font-size: 2em;
}

.fa-icon-container {

}

.emot-number {
	position: relative;
	margin: 8px 0;
	color: gray;
	font-size: 2em;
	font-weight: bold;
}

/*responsiveness */

button.button-response {
	background: #f07470;
}

.inputSelectionOk [type="text"] {
	background: #d2ffa6;
	border: 1px solid transparent;
	color: #777;
}
/* api results */

span.light {
	font-weight: 200;
}


/* Dropdown styles */
.dropdown {
  position: relative;
  padding: 0;
  margin-right: 1em;
  
  border: none;
}

.dropdown .dropdown-ul {
  position: absolute;
  margin: 20px 0 0 0;
  padding: 20px 0;
  width: 90%;
  left: 25px;
  box-sizing: border-box;
  z-index: 100;
  
  background: #eee;
  border-radius: 6px;
  list-style: none;
}

.dropdown .dropdown-ul a {
  padding: 0;
  margin: 0;
}

/* Dropdown triangle */
.dropdown .dropdown-ul::before {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  top: -10px;
  left: 50%;
  margin-left: -10px;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #eee transparent;
}

/* slider items */

.slider-item {
	padding: 10px 0;
}

.sliderBlue {
  --slider-connect-bg: #3B82F6;
  --slider-tooltip-bg: #3B82F6;
  --slider-handle-ring-color: #3B82F630;
}

/* result */

.slider-three h1 {
	color: #111; 
	font-family: 'Helvetica Neue', sans-serif; 
	font-size: 3em; 
	font-weight: bold; 
	letter-spacing: -1px; 
	line-height: 1; 
	text-align: center; 
	margin-bottom: 50px;
	background: #fff;
	border-radius: 20px;
	padding: 20px;
} 

/* sharing */

.share-button {
	display: block;
	margin: 10px;
}

</style>