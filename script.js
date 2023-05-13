let lastli=document.querySelector(".container .container-nav .links li:last-child")


let allnesteda=document.querySelectorAll(".container .container-nav .links .sp .con a")
let li7=document.querySelector(".container .container-nav .links li:nth-child(7)")
let nestedli=document.querySelector(".container .container-nav .links li:nth-child(7) ul li")
let a=document.querySelector(".container .container-nav .links .sp .con")
let contact=document.querySelector(".contactele")
let abo=document.querySelector(".abo")
let ser=document.querySelector(".ser")
let pri=document.querySelector(".pri")
let te=document.querySelector(".te")
let bl=document.querySelector(".bl")
let port=document.querySelector(".port")
const sticky = window.pageYOffset;
console.log(sticky)
contact.addEventListener("click",()=>{
            window.scrollTo({
                        top: 12300.400390625,
                        behavior:"smooth"
            });
            a.style.visibility="hidden"
            a.style.opacity="0"
            a.style.width="0"
            allnesteda.forEach((element)=>{
                        element.classList.remove("active")
                        contact.classList.add("active")
            })
})
abo.addEventListener("click",()=>{
            window.scrollTo({
                        top: 658.7999877929688,
                        behavior:"smooth"
            });
            a.style.visibility="hidden"
            a.style.opacity="0"
            a.style.width="0"
            allnesteda.forEach((element)=>{
                        element.classList.remove("active")
                        abo.classList.add("active")
            })
})
ser.addEventListener("click",()=>{
            window.scrollTo({
                        top: 5474,
                        behavior:"smooth"
            });
            a.style.visibility="hidden"
            a.style.opacity="0"
            a.style.width="0"
            allnesteda.forEach((element)=>{
                        element.classList.remove("active")
                        ser.classList.add("active")
            })
})
port.addEventListener("click",()=>{
            window.scrollTo({
                        top: 4026,
                        behavior:"smooth"
            });
            a.style.visibility="hidden"
            a.style.opacity="0"
            a.style.width="0"
            allnesteda.forEach((element)=>{
                        element.classList.remove("active")
                        port.classList.add("active")
            })
})
te.addEventListener("click",()=>{
            window.scrollTo({
                        top: 9200,
                        behavior:"smooth"
            });
            a.style.visibility="hidden"
            a.style.opacity="0"
            a.style.width="0"
            allnesteda.forEach((element)=>{
                        element.classList.remove("active")
                        te.classList.add("active")
            })
})
pri.addEventListener("click",()=>{
            window.scrollTo({
                        top: 6950,
                        behavior:"smooth"
            });
            a.style.visibility="hidden"
            a.style.opacity="0"
            a.style.width="0"
            allnesteda.forEach((element)=>{
                        element.classList.remove("active")
                        pri.classList.add("active")
            })
})
bl.addEventListener("click",()=>{
            window.scrollTo({
                        top: 10750,
                        behavior:"smooth"
            });
            a.style.visibility="hidden"
            a.style.opacity="0"
            a.style.width="0"
            allnesteda.forEach((element)=>{
                        element.classList.remove("active")
                        bl.classList.add("active")
            })
})
li7.addEventListener("click",()=>{
            nestedli.classList.toggle("active")
})

lastli.addEventListener("click",()=>{
            a.classList.add("active")
})

let ax=document.querySelector(".container .container-nav .links .sp > i")
let q=1
ax.addEventListener("click",()=>{
            q++
            if(q%2==0){
            a.style.visibility="visible"
            a.style.opacity="1"
            a.style.width="80vw"
            }else{
            a.style.visibility="hidden"
            a.style.opacity="0"
            a.style.width="0"
            }
})

/* section fearure starts  */
let allimages=document.querySelector(".allimages")
let nxtbtn=document.querySelector(".next-btn")
let imageone=document.createElement("img")
let imagetwo=document.createElement("img")
let imagethree=document.createElement("img")

imageone.setAttribute("src","./images (1)/images/about/about1.webp")
imagetwo.setAttribute("src","./images (1)/images/about/about2.webp")
imagethree.setAttribute("src","./images (1)/images/OIP.jfif")
let arrayimgs=[imageone,imagetwo,imagethree]
let imgindex=0
allimages.appendChild(arrayimgs[imgindex])

let spans=document.querySelectorAll(".dots span")
let arrayspans=Array.from(spans)
let dotindex=0
arrayspans[dotindex].classList.add("active")

nxtbtn.addEventListener("click",()=>{
            allimages.innerHTML=""
            arrayspans[dotindex].classList.remove("active")
            imgindex++
            dotindex++
            if(imgindex==3){
            imgindex=0
            }
            if(dotindex==4){
            dotindex=0
            }
            allimages.appendChild(arrayimgs[imgindex])
            arrayspans[dotindex].classList.add("active")
})
