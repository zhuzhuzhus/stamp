let paperArr = [1, 2, 3, 4, 5, 6, 7, 8]
let borderArr = [1, 2, 3, 4, 5, 6, 7, 8]
let domArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
let jqArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]


let rightBox = document.getElementsByClassName("rightBox")[0]

let rightBoxHtml = ''

paperArr.forEach(item => {
  rightBoxHtml += '<img class="zhizhang" src="./img/右边排列显示的素材大小/纸张/' + item + '.png" onclick="toPaper(' + item + ')" alt="">'
})

rightBox.innerHTML = rightBoxHtml

var Flag = 1
let paperBox = document.getElementsByClassName("paper")[0]
let borderBox = document.getElementsByClassName("border")[0]
let domBox = document.getElementsByClassName("dom")[0]
let jqBox = document.getElementsByClassName("jq")[0]

function toPaper(url) {
  paperBox.style.background = "url(./img/显示的元素/纸张/纸张" + url + ".png)"
}
function toBorder(url) {
  borderBox.style.background = "url(./img/显示的元素/边框/边框" + url + ".png)"
}
function toDom(url) {
  domBox.style.background = "url(./img/显示的元素/元素/Group" + url + ".png)"
}


function toJq(url) {
  jqBox.style.background = "url(./img/显示的元素/字体1/" + url + ".png)"
}
function toJq2(url) {
  jqBox.style.background = "url(./img/显示的元素/字体2/" + url + ".png)"
}
function toJq3(url) {
  jqBox.style.background = "url(./img/显示的元素/字体3/" + url + ".png)"
}


let Num = document.getElementsByClassName("number")[0]
let tittle2 = document.getElementsByClassName("tittle2")[0]
function next() {

  if (Flag == 1 && paperBox.style.background != "") {
    document.getElementsByClassName("btnL1")[0].style.display = "block"
    rightBox.innerHTML = ""
    rightBoxHtml = ""
    Num.innerHTML = "2"
    tittle2.innerHTML = "The border you like !"

    borderArr.forEach(item => {
      rightBoxHtml += '<img class="zhizhang" src="./img/右边排列显示的素材大小/边框/' + item + '.png" onclick="toBorder(' + item + ')" alt="">'
    })
    rightBox.innerHTML = rightBoxHtml
    Flag++
  }
  if (Flag == 2 && paperBox.style.background != "" && borderBox.style.background != "") {
    Num.innerHTML = "3"
    rightBox.innerHTML = ""
    rightBoxHtml = ""
    tittle2.innerHTML = "Your favorite solar term!"

    jqArr.forEach(item => {
      rightBoxHtml += '<img class="jieqi" src="./img/右边排列显示的素材大小/字体1/' + item + '.png" onclick="toJq(' + item + ')" alt="">'
    })
    jqArr.forEach(item => {
      rightBoxHtml += '<img class="jieqi2" src="./img/右边排列显示的素材大小/字体2/' + item + '.png" onclick="toJq2(' + item + ')" alt="">'
    })
    jqArr.forEach(item => {
      rightBoxHtml += '<img class="jieqi3" src="./img/右边排列显示的素材大小/字体3/' + item + '.png" onclick="toJq3(' + item + ')" alt="">'
    })
    rightBox.innerHTML = rightBoxHtml
    Flag++
  }
  if (Flag == 3 && paperBox.style.background != "" && borderBox.style.background != "" && jqBox.style.background != "") {
    Num.innerHTML = "4"
    rightBox.innerHTML = ""
    rightBoxHtml = ""
    tittle2.innerHTML = "The elements you like!"
    domArr.forEach(item => {
      rightBoxHtml += '<img class="Group" src="./img/右边排列显示的素材大小/元素/Group' + item + '.png" onclick="toDom(' + item + ')" alt="">'
    })
    rightBox.innerHTML = rightBoxHtml
    Flag++
  }
  if (Flag == 4 && paperBox.style.background != "" && borderBox.style.background != "" && jqBox.style.background != "" && domBox.style.background != "") {
    document.getElementsByClassName("rightBox")[0].style.display = "none"
    document.getElementsByClassName("btnR1")[0].style.display = "none"
    document.getElementsByClassName("btnL1")[0].style.display = "none"
    document.getElementsByClassName("btnR2")[0].style.display = "block"
    document.getElementsByClassName("number")[0].style.display = "none"
    document.getElementsByClassName("leftBottom")[0].className = "leftBottom leftBottom2"
    document.getElementsByClassName("paper")[0].className = "paper paper2"
    document.getElementsByClassName("jq")[0].className = "jq jq2"
    document.getElementsByClassName("dom")[0].className = "dom dom2"
    document.getElementsByClassName("border")[0].className = "border border2"
    document.getElementsByClassName("tittle")[0].className = "tittle tittles"
    document.getElementsByClassName("canvas")[0].className = "canvas canvas2"
    document.getElementsByClassName("tittle1")[0].innerHTML = "Just for you"
    document.getElementsByClassName("tittle2")[0].innerHTML = "Solar term stamps are generated!"
    Flag++
  }

}

function ret() {
  if (Flag == 2) {
    document.getElementsByClassName("btnL1")[0].style.display = "none"
    document.getElementsByClassName("number")[0].innerHTML = "1"
    document.getElementsByClassName("tittle2")[0].innerHTML = "The paper you like!"
    borderBox.style.background = ""
    rightBoxHtml = ""
    paperArr.forEach(item => {
      rightBoxHtml += '<img class="zhizhang" src="./img/右边排列显示的素材大小/纸张/' + item + '.png" onclick="toPaper(' + item + ')" alt="">'
    })
    rightBox.innerHTML = rightBoxHtml
    Flag--
  }
  if (Flag == 3) {
    jqBox.style.background = ""
    document.getElementsByClassName("number")[0].innerHTML = "2"
    document.getElementsByClassName("tittle2")[0].innerHTML = "The border you like !"
    rightBoxHtml = ""
    borderArr.forEach(item => {
      rightBoxHtml += '<img class="zhizhang" src="./img/右边排列显示的素材大小/边框/' + item + '.png" onclick="toBorder(' + item + ')" alt="">'
    })
    rightBox.innerHTML = rightBoxHtml
    Flag--
  }
  if (Flag == 4) {
    tittle2.innerHTML = "The elements you like!"
    rightBoxHtml = ""
    jqArr.forEach(item => {
      rightBoxHtml += '<img class="jieqi" src="./img/右边排列显示的素材大小/字体1/' + item + '.png" onclick="toJq(' + item + ')" alt="">'
    })
    jqArr.forEach(item => {
      rightBoxHtml += '<img class="jieqi2" src="./img/右边排列显示的素材大小/字体2/' + item + '.png" onclick="toJq2(' + item + ')" alt="">'
    })
    jqArr.forEach(item => {
      rightBoxHtml += '<img class="jieqi3" src="./img/右边排列显示的素材大小/字体3/' + item + '.png" onclick="toJq3(' + item + ')" alt="">'
    })
    rightBox.innerHTML = rightBoxHtml
    Flag--
    domBox.style.background = ""
  }
}

function react() {
  paperBox.style.background = ""
  borderBox.style.background = ""
  jqBox.style.background = ""
  domBox.style.background = ""
  document.getElementsByClassName("number")[0].innerHTML = "1"
  document.getElementsByClassName("rightBox")[0].style.display = "block"
  document.getElementsByClassName("btnR1")[0].style.display = "block"
  // document.getElementsByClassName("btn1")[0].style.display = "block"
  document.getElementsByClassName("btnR2")[0].style.display = "none"
  document.getElementsByClassName("number")[0].style.display = "flex"
  document.getElementsByClassName("leftBottom")[0].className = "leftBottom "
  document.getElementsByClassName("paper")[0].className = "paper "
  document.getElementsByClassName("jq")[0].className = "jq"
  document.getElementsByClassName("dom")[0].className = "dom"
  document.getElementsByClassName("border")[0].className = "border"
  document.getElementsByClassName("tittle")[0].className = "tittle"
  document.getElementsByClassName("canvas")[0].className = "canvas"
  document.getElementsByClassName("tittle1")[0].innerHTML = "Click and select"
  document.getElementsByClassName("tittle2")[0].innerHTML = "The paper you like!"
  rightBoxHtml = ""
  paperArr.forEach(item => {
    rightBoxHtml += '<img class="zhizhang" src="./img/右边排列显示的素材大小/纸张/' + item + '.png" onclick="toPaper(' + item + ')" alt="">'
  })

  rightBox.innerHTML = rightBoxHtml
  Flag = 1
}
