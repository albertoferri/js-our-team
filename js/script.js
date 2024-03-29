// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];


// inizializzo una variabile
let teamInfoHTML = "";

// Ciclo for-in per iterare sugli indici dell'array teamMembers
for (let key in teamMembers) {
    const member = teamMembers[key];
    // BONUS 2:
    // Organizzare i singoli membri in card/schede
    teamInfoHTML += `<div class="col-lg-4 col-md-6 col-12 mb-4">
                        <div class="card">
                            <img src= img/${member.foto} class="card-img-top" alt="${member.nome}">
                            <div class="card-body">
                                <h5 class="card-title">${member.nome}</h5>
                                <p class="card-text">Ruolo: ${member.ruolo}</p>
                            </div>
                        </div>
                    </div>`;
}

// Inserimento della stringa HTML nel contenuto dell'elemento #team-info
document.getElementById("team-info").innerHTML = teamInfoHTML;