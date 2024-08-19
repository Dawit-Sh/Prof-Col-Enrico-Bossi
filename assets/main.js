let data;

async function loadData() {
  const response = await fetch("assets/data.json");
  data = await response.json();
  initializeCards();
}

function initializeCards() {
  const cards = document.querySelectorAll(".card");
  const info = document.querySelector(".info");
  const infoContent = document.querySelector(".info-content");
  const closeBtn = document.querySelector(".close-btn");
  const worksSections = document.getElementById("works-sections");

  cards.forEach((card) => {
    const category = card.dataset.category;
    const content = data[category];
    card.style.setProperty("--bg-image", `url(${content.backgroundImage})`);
    card.style.backgroundImage = `url(${content.backgroundImage})`;

    card.addEventListener("click", () => {
      infoContent.querySelector("h2").textContent = content.title;
      infoContent.querySelector("img").src = content.image;
      infoContent.querySelector("img").alt = content.title;
      infoContent.querySelector("p").textContent = content.description;

      if (category === "works") {
        worksSections.innerHTML = `
                            <div class="gallery-container">
                                <div class="gallery">
                                    <img src="https://64.media.tumblr.com/7329575e2f07e3f43400f6c84e071df5/b0811ed7177b7960-9d/s400x600/ba0faf83a45fc064811628654ff904266ffcc469.jpg" alt="Work 1">
                                    <img src="https://64.media.tumblr.com/d47f8b0a2a319f28445b9437d81e8e5b/b0811ed7177b7960-00/s400x600/7eee97135447d28ac01e71b2238fd18efd53d80a.jpg" alt="Work 2">
                                    <img src="https://64.media.tumblr.com/a5e8063f91e41b5fb24eb627483ffc1b/b0811ed7177b7960-20/s400x600/aed72e4faaf9a1b24469c901cb90f2a664bf0e57.jpg" alt="Work 3">
                                    <img src="https://64.media.tumblr.com/aad4fb65fa65175120ecc34b1fd3b22a/b0811ed7177b7960-74/s400x600/eb7249625d8d2a064b385997e8adef2ba66624a3.jpg" alt="Work 4">
                                    <img src="https://64.media.tumblr.com/90e497e63c5d0cab994bb1b05ca50195/b0811ed7177b7960-7b/s540x810/ff422ceab6f352f92ba29d001fc7043c75d3a67a.jpg" alt="Work 5">
                                    <img src="https://64.media.tumblr.com/e64c3305456a8b3036b92ae31b7b78c4/b0811ed7177b7960-16/s250x400/b06d868597ad4899ccd35c71c506e74889c501d9.jpg" alt="Work 6">
                                    <img src="https://64.media.tumblr.com/a3a65593f610a2440c010837fc118e90/b0811ed7177b7960-b9/s250x400/053f2aab50f288d1cf5140df30d87efb5607c86d.jpg" alt="Work 7">
                                    <img src="https://64.media.tumblr.com/56ac5484aa29a86cacc3f0e2f8ef7846/b0811ed7177b7960-df/s250x400/ee3218385edf0129e333ed49ac671ebe8fff6c34.jpg" alt="Work 8">
                                    <img src="https://64.media.tumblr.com/dfa04f6082dbd068fda50faf4a3e4725/b0811ed7177b7960-83/s400x600/a6a1182333c696699ff28641f2b21e27812a26a6.jpg" alt="Work 9">
                                    <img src="https://64.media.tumblr.com/bf5a9bcd23f6a8a2a5b49a9446c0014f/b0811ed7177b7960-b1/s400x600/5db2772ea3fafdc7732c59cf9190eb20aa3d53da.jpg" alt="Work 10">
                                </div>
                            </div>
                            <div class="works-section">
                                <h3>Medical Contributions</h3>
                                <ul>
                                    <li>Professor Bossi played a pivotal role in establishing the Great Sudanese Hospital, providing vital funding during its inception.</li><br>
                                    <li>In Ethiopia, he founded the Adama General Hospital and served as its first director for a year. He also contributed his expertise at Danu and Abet Hospitals as an orthopedic surgeon.</li><br>
                                    <li>Each year, he returned from Italy to provide surgical services at Woliso Hospital, demonstrating his unwavering commitment to healthcare.</li>
                                </ul>
                            </div>
                            <div class="works-section">
                                <h3>Humanitarian Efforts</h3>
                                <ul>
                                    <li>During the Kosovo War, Professor Bossi selflessly relinquished his salary for an entire year to offer free medical services.</li><br>
                                    <li>During the Ethiopia-Eritrea conflict, he was among five Italians who courageously arrived by helicopter to provide critical medical treatment.</li><br>
                                    <li>He was involved with the "Sergio" International Humanitarian Organization, providing invaluable support to those in need.</li><br>
                                    <li>He was also a key figure in "Alco Valeni," a prominent non-governmental organization in Europe.</li><br>
                                    <li>In Milan, he established the Naga Medical Center, offering free medical assistance to African immigrants and others facing financial hardships or lacking proper immigration documentation.</li>
                                </ul>
                            </div>
                            <div class="works-section">
                                <h3>Literary and Artistic Contributions</h3>
                                <ul>
                                    <li>Professor Bossi was a prolific writer with 46 published works in English and Italian, seven of which focus specifically on Ethiopian history.</li><br>
                                    <li>Notable works include "The History of Imperial Ethiopia Army," "Desta's Years and Life 1892-1937," and "Aethiopia: La Moneta Africana."</li><br>
                                    <li>His scholarship elevated Ethiopia's profile globally, including promoting its status as the origin of coffee in one of his books.</li><br>
                                    <li>He translated "The Little Prince" into 55 languages, donating copies to the Catholic University of Milan.</li><br>
                                    <li>His fine art further showcased his artistic sensibilities and talents.</li>
                            </div>
                            <div class="works-section">
                                <h3>Legacy</h3>
                                <ul>
                                    <li>Professor Colonel Enrico Bossi passed away on June 10, 2024. 
                                        His impact lives on through his work and the ongoing efforts of his wife, Sarmane Kalso, who is committed to continuing his mission.</li><br>
                                    <li>Bossi recognized the essence of humanity transcending ethnicity, and his legacy of humanitarian support, scholarship, and art continues to inspire.</li>
                                </ul>
                            </div>
                        `;
        initializeGallery();
      } else {
        worksSections.innerHTML = "";
      }

      const downloadLinks = infoContent.querySelector(".download-links");
      downloadLinks.innerHTML = "";
      content.downloads.forEach((download) => {
        const link = document.createElement("a");
        link.href = download.url;
        link.textContent = download.name;
        link.className = "download-link";
        downloadLinks.appendChild(link);
      });

      info.classList.add("active");

      card.style.transform = "translateX(-20px)";
      setTimeout(() => {
        card.style.transform = "translateX(0)";
      }, 300);
    });
  });

  closeBtn.addEventListener("click", () => {
    info.classList.remove("active");
  });
}

function initializeGallery() {
  const gallery = document.querySelector(".gallery");
  const images = gallery.querySelectorAll("img");
  const imageWidth = images[0].clientWidth;
  let currentIndex = 0;

  function scrollGallery() {
    currentIndex = (currentIndex + 1) % images.length;
    gallery.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  setInterval(scrollGallery, 2100);
}

loadData();
