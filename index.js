const s = ["chicken.jpg","momo.jpg","fast.jpg","dosa.jpg"]
let imgid = 0;
let h = document.getElementById("hover");
h.addEventListener("click",handlechange);
function changeimg(){
    imgid=(imgid == 0) ? 1:0;
    document.getElementById("img").setAttribute("src",s[imgid]);
}
let hid=2;
function handlechange(e){
    hid=(hid == 2) ? 3:2;
    e.target.src= s[hid]
    

}
