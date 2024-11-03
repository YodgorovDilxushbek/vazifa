const form = document.getElementById("registrationForm");
const cardContainer = document.getElementById("cardContainer");
const loader = document.getElementById("loader");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  loader.style.display = "flex";

  setTimeout(() => {
    const ism = document.getElementById("ism").value;
    const familiya = document.getElementById("familiya").value;
    const telefon = document.getElementById("telefon").value;
    const email = document.getElementById("email").value;
    const rasmUrl = document.getElementById("rasm_url").value;

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
       <div class="image">
       <img src="${rasmUrl}" alt="Profil rasmi" />
       </div>
       <div class="title">
       <h2>Ism: ${ism}</h2>
       <p>Familiya: ${familiya}</p>
       <p>Telefon: ${telefon}</p>
       <p>Email: ${email}</p>
     </div>
    `;

    cardContainer.appendChild(card);

    form.reset();

    loader.style.display = "none";
  }, 3000);
});
