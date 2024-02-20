let imageSlider =document.querySelector("#imageSlider")
let nextBtn =document.querySelector("#nextButton")
let prevBtn =document.querySelector("#prevButton")

 const images =[
    "https://img.freepik.com/premium-photo/wooden-bridge-leads-lake-with-mountains-background_865967-309397.jpg?size=626&ext=jpg&ga=GA1.1.58277133.1705750887&semt=ais",
    "https://img.freepik.com/free-photo/nice-landscape-with-boat_1048-4711.jpg?size=626&ext=jpg&ga=GA1.1.58277133.1705750887&semt=ais",
   "https://img.freepik.com/free-photo/3d-maple-tree-against-sunset-sky_1048-10169.jpg?size=626&ext=jpg&ga=GA1.1.58277133.1705750887&semt=ais",
   "https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg?size=626&ext=jpg&ga=GA1.1.58277133.1705750887&semt=ais"
    
]

let indexImage = 3
function currentImage(){
    imageSlider.src = images[indexImage]
}
currentImage()


// hande next button
nextBtn.addEventListener("click", function(){
    indexImage++;
    if(indexImage > images.length - 1){
        indexImage = 0
    }
    currentImage()
})
prevBtn.addEventListener("click", function(){
    indexImage--
    if(indexImage < 0)
    indexImage = 0
currentImage()

})