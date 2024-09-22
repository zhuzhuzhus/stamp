var artifacts = [
  "img2/5/1.png",
  "img2/5/2.png",
  "img2/5/3.png",
  "img2/5/4.png",
];

var stamps = {
  "All": [
    "img2/4/1.png",
    "img2/4/2.png",
    "img2/4/3.png",
    "img2/4/4.png",
    "img2/2/1.png",
    "img2/2/2.png",
    "img2/2/3.png",
    "img2/2/4.png",
    "img2/2/5.png",
    "img2/2/6.png",
    "img2/2/7.png",
    "img2/2/8.png",
    "img2/2/9.png",
    "img2/2/10.png",
    "img2/2/11.png",
    "img2/2/12.png",
    "img2/2/13.png",
    "img2/2/14.png",
    "img2/2/15.png",
    "img2/2/16.png",
    "img2/3/1.png",
    "img2/3/2.png",
    "img2/3/3.png",
    "img2/3/4.png",
    "img2/3/5.png",
    "img2/3/6.png",
    "img2/3/7.png",
    "img2/3/8.png",

  ],
  "Historical": [
    "img2/4/1.png",
    "img2/4/2.png",
    "img2/4/3.png",
    "img2/4/4.png"
  ],
  "Liberated": [
    "img2/2/1.png",
    "img2/2/2.png",
    "img2/2/3.png",
    "img2/2/4.png",
    "img2/2/5.png",
    "img2/2/6.png",
    "img2/2/7.png",
    "img2/2/8.png",
    "img2/2/9.png",
    "img2/2/10.png",
    "img2/2/11.png",
    "img2/2/12.png",
    "img2/2/13.png",
    "img2/2/14.png",
    "img2/2/15.png",
    "img2/2/16.png"
  ],
  "New": [
    "img2/3/1.png",
    "img2/3/2.png",
    "img2/3/3.png",
    "img2/3/4.png",
    "img2/3/5.png",
    "img2/3/6.png",
    "img2/3/7.png",
    "img2/3/8.png"
  ],
  "Foreign": [
    "img2/1/1.png",
    "img2/1/2.png",
    "img2/1/3.png",
    "img2/1/4.png",
    "img2/1/5.png",
    "img2/1/6.png"
  ]
};
var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

function createPhotoFrame(src, alt) {
  var photoFrame = document.createElement("div");
  photoFrame.className = "photo-frame";
  photoFrame.style.backgroundImage = "url(img2/background.png)";
  photoFrame.style.backgroundSize = "240px 325px";
  var img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  photoFrame.appendChild(img);
  return photoFrame;
}

function showSection(section) {
  var artifactGrid = document.getElementById("artifact-grid");
  var stampGrid = document.getElementById("stamp-grid");
  var categoryBoxes = document.getElementsByClassName("category-box");

  if (section === "artifact") {
    artifactGrid.style.display = "flex";
    stampGrid.style.display = "none";
    for (var i = 0; i < categoryBoxes.length; i++) {
      categoryBoxes[i].style.display = "none";
    }
  } else if (section === "stamp") {
    artifactGrid.style.display = "none";
    stampGrid.style.display = "flex";
    for (var i = 0; i < categoryBoxes.length; i++) {
      categoryBoxes[i].style.display = "inline-block";
    }
  }
}

function showArtifacts() {
  var artifactGrid = document.getElementById("artifact-grid");
  artifactGrid.innerHTML = "";
  for (var i = 0; i < artifacts.length; i++) {
    var photoFrame = createPhotoFrame(artifacts[i], "artifacts" + (i + 1));
    artifactGrid.appendChild(photoFrame);
  }
}

function showStamps(category) {
  var artifactGrid = document.getElementById("artifact-grid");
  var stampGrid = document.getElementById("stamp-grid");
  var categoryBoxes = document.getElementsByClassName("category-box");

  artifactGrid.style.display = "none";
  stampGrid.style.display = "flex";
  stampGrid.innerHTML = "";

  var stampsToShow = stamps[category];
  for (var i = 0; i < stampsToShow.length; i++) {
    var photoFrame = createPhotoFrame(stampsToShow[i], category + "All" + (i + 1));
    photoFrame.classList.add("fade-in");
    stampGrid.appendChild(photoFrame);
  }

  for (var i = 0; i < categoryBoxes.length; i++) {
    categoryBoxes[i].classList.remove("selected");
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  var selectedCategory = "category-" + category.toLowerCase().replace(" ", "-");
  var selectedCategoryBox = document.getElementById(selectedCategory);
  selectedCategoryBox.classList.add("selected");
}


showArtifacts();
showStamps("All");