import MentorMessage from "./MentorMessage.jsx";
import UserMessage from "./UserMessage.jsx";
import Send from "../../assets/icons/Send.svg";
export default function Chat() {
    return (
        <div className="border-4 border-neutral-200 rounded-3xl w-full h-full py-4 flex flex-col">
            <div className="flex flex-col gap-2 flex-grow overflow-y-auto px-5 pb-2 overscroll-none">
                <MentorMessage message="Bok! Ja sam Karijerko, tvoj virtualni asistent za karijeru. Tu sam da ti pomognem razvijati vještine, postaviti i ostvariti profesionalne ciljeve te naći put do posla koji ti najviše odgovara. Ako imaš bilo kakva pitanja ili trebaš savjet vezan za svoju karijeru, slobodno se obrati! 😊" />
                <UserMessage message={"Bok, zovem se Ivan Mikodanić i student sam 2. godine informatičkog dizajna na TVZ-u. Možeš li mi pomoći?"} />
                <MentorMessage message="Bok Ivan! Drago mi je što si se javio. Super je čuti da studiraš informatički dizajn na TVZ-u. Možemo zajedno istražiti kako najbolje iskoristiti tvoje trenutne vještine i planirati tvoje buduće korake. Reci mi, imaš li već neko konkretno područje unutar informatičkog dizajna koje te posebno zanima ili neka specifična pitanja na koja želiš odgovor?" />
                <UserMessage message={"Trenutno se dosta bavim web programiranjem, konkretnije NodeJs. Ali nisam siguran sta da radim kako bih sto prije pronasao posao. Imas li neke savijete?"} />
                <MentorMessage message="Super je što si već usmjeren na Node.js, to je odličan izbor s obzirom na popularnost i primjenu u web razvoju! Evo nekoliko savjeta kako možeš brže pronaći posao u tom području:
Portfolio projekti: Ako već nemaš, svakako bi bilo dobro da napraviš nekoliko projekata koji će pokazati tvoje vještine u Node.js-u. To može biti nešto poput web aplikacije ili API-ja koji rješava neki stvarni problem.
GitHub profil: Ako već nemaš, postavi svoje projekte na GitHub. To je odlična prilika da pokažeš svoj rad potencijalnim poslodavcima, ali i da se povežeš s drugim programerima.
Networking: Poveži se s drugim programerima i stručnjacima u industriji. Možeš se pridružiti lokalnim meetup grupama, webinarima ili konferencijama koje se tiču Node.js-a ili web razvoja općenito.
Učenje i certifikati: Iako praktično iskustvo najviše vrijedi, certifikati mogu biti korisni za pokazivanje tvoje predanosti i formalnog znanja. Možeš istražiti certifikate poput Node.js Certified Developer.
Praktično iskustvo: Razmisli o volontiranju ili freelancingu kako bi stekao više iskustva i možda čak i neke reference koje će ti koristiti pri traženju stalnog posla.
Aktivno traženje posla: Redovito provjeravaj portale za zapošljavanje, prati firme koje te zanimaju na LinkedInu i ne ustručavaj se direktno im se obratiti s upitom za praksu ili posao.
Što misliš o ovim koracima? Jesu li ti jasni ili bi volio dodatno pojasniti nešto?" />
            </div>
            <div className="pt-3 px-5">
                <div className="w-full border-2 border-neutral-200 rounded-xl px-5 py-3 flex gap-2">
                    <input type="text" placeholder="Napiši poruku..." className="w-full focus:outline-none" />
                    <img src={Send} alt="Send" className="w-6 h-6 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}
