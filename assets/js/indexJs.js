"use strict";

const roomInfo = [
  {
    imgPath: `assets/images/hotel_images/DeluxeRoom.jpg`,
    roomName: "Deluxe Room",
    roomDetails: `Step into comfort and elegance with the Deluxe Room at Hotel Seraphine—our thoughtfully designed entry-level retreat. Perfectly appointed with all essential amenities, this serene space offers a harmonious blend of style and simplicity. Soft lighting, plush bedding, and modern conveniences ensure a restful stay, whether you're here for business or leisure. Experience refined comfort at its finest, where every detail is crafted to welcome you warmly. The Deluxe Room is your ideal sanctuary in the heart of timeless hospitality.`,
  },
  {
    imgPath: `assets/images/hotel_images/PremiumRoom.jpg`,
    roomName: "Premium Room",
    roomDetails: `Elevate your stay in the Premium Room at Hotel Seraphine—where added space meets sophisticated design. This upgraded haven offers enhanced comfort with refined décor, elegant furnishings, and modern amenities tailored for relaxation. Enjoy a tranquil atmosphere, soft textures, and thoughtful touches that create a sense of understated luxury. Whether unwinding after a busy day or simply indulging in peaceful moments, the Premium Room delivers an elevated experience that balances comfort and charm effortlessly. Discover more with every stay.`,
  },
  {
    imgPath: `assets/images/hotel_images/LuxuryRoom.jpg`,
    roomName: "Luxury Room",
    roomDetails: `Indulge in the exceptional elegance of the Luxury Room at Hotel Seraphine—where sophistication and serenity meet. Designed for discerning guests, this spacious sanctuary features upscale décor, premium furnishings, and an inviting ambiance that exudes refined comfort. From plush bedding to elevated amenities, every detail is thoughtfully curated to enhance your stay. Bask in the quiet charm and elevated style that define the Seraphine experience. The Luxury Room promises a stay that is as graceful as it is unforgettable.`,
  },
  {
    imgPath: `assets/images/hotel_images/SuiteRoom.jpg`,
    roomName: "Suite Room",
    roomDetails: `Experience the pinnacle of comfort in the Suite at Hotel Seraphine—an exclusive retreat crafted for those who desire space, style, and sophistication. Featuring a separate living area, elegant bedroom, and luxurious amenities, the Suite offers a seamless blend of functionality and indulgence. Rich textures, modern finishes, and thoughtful details create an atmosphere of quiet opulence. Whether for a special occasion or a lavish escape, the Suite invites you to unwind in unmatched serenity and timeless elegance.`,
  },
];

const dRoom = document.getElementById("d-room");
const pRoom = document.getElementById("p-room");
const lRoom = document.getElementById("l-room");
const sRoom = document.getElementById("s-room");

dRoom.addEventListener("click", () => {
  document.getElementById("room-img").innerHTML = `
  <img src="${roomInfo[0].imgPath}" alt="" />
          <div class="room-caption">
            <h1>${roomInfo[0].roomName}</h1>
            <p>
              ${roomInfo[0].roomDetails}
            </p>
          </div>`;
});

pRoom.addEventListener("click", () => {
  document.getElementById("room-img").innerHTML = `
  <img src="${roomInfo[1].imgPath}" alt="" />
          <div class="room-caption">
            <h1>${roomInfo[1].roomName}</h1>
            <p>
              ${roomInfo[1].roomDetails}
            </p>
          </div>`;
});

lRoom.addEventListener("click", () => {
  document.getElementById("room-img").innerHTML = `
  <img src="${roomInfo[2].imgPath}" alt="" />
          <div class="room-caption">
            <h1>${roomInfo[2].roomName}</h1>
            <p>
              ${roomInfo[2].roomDetails}
            </p>
          </div>`;
});

sRoom.addEventListener("click", () => {
  document.getElementById("room-img").innerHTML = `
  <img src="${roomInfo[3].imgPath}" alt="" />
          <div class="room-caption">
            <h1>${roomInfo[3].roomName}</h1>
            <p>
              ${roomInfo[3].roomDetails}
            </p>
          </div>`;
});
// Code copy pasted here

const wrapper = document.getElementById("cardWrapper");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const scrollAmount = 220;

nextBtn.addEventListener("click", () => {
  wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
