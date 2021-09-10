const data = [
  {
    name: "Ali",
    age: 24,
    location: "Khilkhat, Dhaka",
    img: "img/male-1.jpg",
  },
  {
    name: "Ahmed",
    age: 25,
    location: "Gulistan, Dhaka",
    img: "img/male-2.jpg",
  },
  {
    name: "Khalid",
    age: 23,
    location: "Dhanmondi, Dhaka",
    img: "img/male-3.jpg",
  },
  {
    name: "Walid",
    age: 26,
    location: "Banani, Dhaka",
    img: "img/male-4.jpg",
  },
  {
    name: "Mohsin",
    age: "24",
    location: "Mohammadpur, Dhaka",
    img: "img/male-5.jpg",
  },
];

let profile = profileGenerator(data);

// initial profile
nextProfile();

function nextProfile() {
  const currentProfile = profile.next().value;
  if (currentProfile !== undefined) {
    const profileDetail = document.querySelector(".profile-detail");
    const profileImg = document.querySelector(".profile-img");
    profileDetail.innerHTML = `
      <p>Name: ${currentProfile.name}</p>
      <p>Age: ${currentProfile.age}</p>
      <p>Location: ${currentProfile.location}</p>
    `;
    profileImg.innerHTML = `<img src="${currentProfile.img}" alt="profile-img">`;
    console.log(currentProfile);
  } else {
    window.location.reload();
  }
}

function profileGenerator(profileData) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profileData.length
        ? { value: profileData[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", nextProfile);
