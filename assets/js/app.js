const userName = document.querySelector("#user_name")
const date = document.querySelector("#date")
const mainPic = document.querySelector(".main_pic")
const contentHead = document.querySelector(".content_head")
const profileImg = document.querySelector(".profile_img")
const contentText = document.querySelector(".content_text")

const animatedBg = document.querySelectorAll(".animated_bg")
const animatedBgText = document.querySelectorAll(".animated_bg_text")

const getData = () => {
    mainPic.innerHTML = ` <img src="https://picsum.photos/id/2/300/200" alt="laptop">`
    profileImg.innerHTML = `<img class="animated_bg" src="https://randomuser.me/api/portraits/men/34.jpg" alt="John Doe">`
    contentHead.innerHTML = "Lorem ipsum dolor sit"
    userName.innerHTML = "John Doe"
    date.innerHTML = "Oct 08, 2021"
    contentText.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt"

    animatedBg.forEach(bg => bg.classList.remove("animated_bg"))
    animatedBgText.forEach(text => text.classList.remove("animated_bg_text"))
}

setTimeout(getData, 3000)