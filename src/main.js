import { createApp } from "vue";
import App from "./App.vue";

import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App);

app.use(VueAxios, axios)

import router from "./router";

app.use(router);

import { StoryblokVue, apiPlugin } from "@storyblok/vue";

app.use(StoryblokVue, {
    accessToken: "w8rK2TgoeXLqxD377Se8fAtt",
    use: [apiPlugin],
});


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCar, faBolt, faSubway, faBicycle, faWalking, faBalanceScale, faRecycle, faInfoCircle, faHome, faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCar, faBolt, faSubway, faBicycle, faWalking, faBalanceScale, faRecycle, faInfoCircle, faHome, faEnvelope, faUsers );

app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = false;

import Grid from "./components/storybloks/Grid.vue";
import Page from "./components/storybloks/Page.vue";
import Teaser from "./components/storybloks/Teaser.vue";
import Feature from "./components/storybloks/Feature.vue";
import Blurb from "./components/storybloks/Blurb.vue";

app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);
app.component("Blurb", Blurb);

import ResultFootprintCard from "./components/storybloks/ResultFootprintCard.vue";
import ResultOfficeCard from "./components/storybloks/ResultOfficeCard.vue";
import ResultFinalCard from "./components/storybloks/ResultFinalCard.vue";

app.component("ResultFootprintCard", ResultFootprintCard);
app.component("ResultOfficeCard", ResultOfficeCard);
app.component("ResultFinalCard", ResultFinalCard);

import WelcomeItem from "./components/WelcomeItem.vue"
import CardSlider from "./components/CardSlider.vue"
import DocumentationIcon from "./components/icons/IconDocumentation.vue"
import ToolingIcon from "./components/icons/IconTooling.vue"
import EcosystemIcon from "./components/icons/IconEcosystem.vue"
import CommunityIcon from "./components/icons/IconCommunity.vue"
import SupportIcon from "./components/icons/IconSupport.vue"

app.component("WelcomeItem", WelcomeItem);
app.component("CardSlider", CardSlider);
app.component("DocumentationIcon", DocumentationIcon);
app.component("ToolingIcon", ToolingIcon);
app.component("EcosystemIcon", EcosystemIcon);
app.component("CommunityIcon", CommunityIcon);
app.component("SupportIcon", SupportIcon);

import TheInfoModal from "./components/TheInfoModal.vue"

app.component("TheInfoModal", TheInfoModal);

import TheFooter from "./components/TheFooter.vue"

app.component("TheFooter", TheFooter);

import TheAlertBoxOK from "./components/TheAlertBoxOK.vue"

app.component("TheAlertBoxOK", TheAlertBoxOK);

app.mount("#app");
