import React from "react";
import "./ItemCard.css";
import sczg from "../assets/sczg.png";
import maps from "../assets/maps.png";
import { CiBookmark } from "react-icons/ci";
import { GiCancel } from "react-icons/gi";
import { CiWallet } from "react-icons/ci";
import { PiCertificateLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function ItemCardInfo() {
  return (
    <div className="job-post p-10 border-b border-solid sm:w-[600px] md:w-[300px] lg:w-[470px]">
      <div>
        {/*GLavni div koji sadzi  quick info*/}
        <div className="flex flex-row">
          <div>
            Agent/ica za video identifikaciju na njemačkom jeziku (min. B1
            razina)
          </div>
          <div>
            <img src={sczg} alt="sczg" className="w-[60px]" />
          </div>
        </div>
        <div>Media one d.o.o</div>
        <div>Radnička cesta 1A, 10000, Zagreb</div>
        <div>7€ po satu</div>
        <div>Prijave do 28.03.2024</div>

        <div className="flex flex-row">
          <div>Otvori</div>
          <CiBookmark className="bookmark-icon" />
          <GiCancel className="cancel-icon" />
        </div>
      </div>

      <div>
        {" "}
        {/*Pojedinosti posla (placa, vrsta posla, radno vrijeme)*/}
        <div> Pojedinosti o poslu: </div>
        <div className="flex flex-row">
          <CiWallet />
          <div>
            <div>Plaća</div>
            <div>7€ po satu</div>
          </div>
        </div>
        <div className="flex flex-row">
          <PiCertificateLight />
          <div>
            <div>Vrsta posla</div>
            <div>Studentski posao</div>
          </div>
        </div>
        <div className="flex flex-row">
          <FaRegClock />

          <div>
            <div>Radno vrijeme</div>
            <div>Fleksibilno</div>
          </div>
        </div>
      </div>

      <div>
        {" "}
        {/*Lokacija */}
        <div>Lokacija</div>
        <div className="flex flex-row">
          <IoLocationOutline />
          <div>Radnička cesta 1A, 10000 Zagreb</div>
          <img src={maps} alt="maps" className="w-[25px]" />
        </div>
      </div>



      <div> {/*Pogodnosti */}
                <div> Dodatne pogodnosti</div>
                <div>
                -Bonus dobrodošlice: 300 €
-Mogućnost ostvarivanja bonusa na temelju rezultata
-Bonusi za preporuke
                </div>
      </div>





      <div>
          <div>Opis posla</div>
          <div>Uloga: Agent/ica za video identifikaciju na njemačkom jeziku je odgovoran za provjeru identiteta korisnika putem video poziva. Ova uloga je ključna za osiguravanje sigurnosti i autentičnosti korisnika u online okruženju.
Odgovornosti:
Provjera identifikacijskih dokumenata korisnika (osobna iskaznica, putovnica, vozačka dozvola) putem video poziva.
Usporedba lica korisnika s likom na identifikacijskom dokumentu.
Postavljanje pitanja korisniku u svrhu provjere identiteta.
Upisivanje podataka o korisniku u sustav.
Rješavanje problema s kojima se korisnici susreću tijekom video identifikacije.
Odgovaranje na upite korisnika o procesu video identifikacije.
Održavanje visokih standarda kvalitete i točnosti u radu.
Poštivanje svih relevantnih propisa i procedura.
Potrebna znanja i vještine:
Tečno poznavanje njemačkog jezika (govorno i pismeno) na razini B1 ili višoj.
Izvrsne komunikacijske i interpersonalne vještine.
Sposobnost brzog i efikasnog rješavanja problema.
Sposobnost rada s više zadataka istovremeno.
Poznavanje rada s računalom.
Paznja na detalje i točnost.
Fleksibilnost i sposobnost prilagodbe promjenjivim radnim uvjetima.
Prednosti:
Fleksibilno radno vrijeme (mogućnost rada 20 - 40 sati tjedno).
Ugodna radna atmosfera.
Mogućnost napredovanja.
Plaćena edukacija.
Bonus dobrodošlice: 300 €.
Mogućnost ostvarivanja bonusa na temelju rezultata.
Bonusi za preporuke.
Ovo je idealan posao za ljude koji:
Su zainteresirani za rad u dinamičnoj i interaktivnoj okolini.
Uživaju u radu s ljudima.
Su precizni i pouzdani.
Žele graditi karijeru u međunarodnom okruženju.</div>
      </div>
    </div>
  );
}

export default ItemCardInfo;
