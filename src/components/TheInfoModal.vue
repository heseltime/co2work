<template>
<a class="btn" href="#open-modal">👉<font-awesome-icon icon="info-circle" class="fa-icon"/> Berechnungsgrundlagen</a>
<div id="open-modal" class="modal-window">
  <div class="black">
    <a href="#" title="Close" class="modal-close">zurück</a>
    <h1>Berechnungsgrundlagen</h1>
    <h3>Distanz-Grundlage + Parameter</h3>
    <p>Die Adressabfrage dient der minimalen Distanzermittlung (nach Haversine): diese wird  mit den CO2-Kennzahlen pro Verkehrsmittel per <a href="https://www.umweltbundesamt.at/fileadmin/site/themen/mobilitaet/daten/ekz_pkm_tkm_verkehrsmittel.pdf">Umweltbundesamt-Datensheet</a> multipliziert (mal Zahl der Pendeltage) um den ersten Teil der Gesamtsumme zu bekommen.</p>
    <h3>Zuzüglich Büroverbrauch: Vergleich mit dem Gemeindehub</h3>
    <p>Das Endresultat besteht aber auch aus der Einberechnung vom mittleren Verbrauch (1) im Homeoffice und (2) im vergleich zum Gemeindehub. Aus (2) lässt sich eine Einsparung bei einem Tag Gemeindehub-Nutzung pro Woche ableiten.</p>
    <p>Quellen für (1) und (2) sind folgende Firmenerhebung von Vodafone bzw ÖGUT (Österreichische Gesellschaft für Umwelt und Technik) Kenndatenblatt.</p>
    <ul>
        <li><a href="https://www.vodafone-institut.de/wp-content/uploads/2021/06/CT_Homeworking-report-June-2021.pdf">Vodafone Institute Homeworking Report Juni 2021</a></li>
        <li><a href="https://www.oegut.at/downloads/pdf/e_kennzahlen-ev-dlg_zb.pdf">ÖGUT Kennzahlen Energieverbrauch Dienstleistungsgebäude</a></li>
    </ul>
  </div>
</div>
</template>

<style scoped lang="scss">
.black p {
    margin: 10px 0;
    color: #000;
}
.modal-window {
  position: fixed;
  background-color: rgba(000, 000, 000, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: white;
  }
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  &:hover {
    color: black;
  }
}

.modal-window {
  & > div {
    border-radius: 1rem;
  }
}

.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}


</style>
