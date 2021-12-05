const summaryRatingCount = document.getElementsByClassName("summary-rating-count");
const row = document.getElementsByClassName("row");
const starCount = document.getElementById("star__count");
const ratingBar = document.getElementsByClassName("summary-rating")
const fiveStar = 2928;
const fourStar = 229;
const threeStar = 50;
const twoStar = 5;
const oneStar = 7;

//Stamped Summary Ratings
//Setting up star count in DOM
summaryRatingCount[0].innerText = `(${fiveStar})`;
summaryRatingCount[1].innerText = `(${fourStar})`;
summaryRatingCount[2].innerText = `(${threeStar})`;
summaryRatingCount[3].innerText = `(${twoStar})`;
summaryRatingCount[4].innerText = `(${oneStar})`;

//Hover Effect
const hoverEffect = () => {
    for (let i = 0; i < row.length; i++){
        row[i].addEventListener('mouseover', ()=>{
            for(let j = 0; j < row.length; j++){
                if(row[j] === row[i]){
                    row[i].style.opacity = "1"
                } else {
                    row[j].style.opacity = "0.6"
                }
            }
        })

        row[i].addEventListener('mouseleave', ()=>{
            for(let j = 0; j < row.length; j++){
                if(row[j] === row[i]){
                    starCount.style.opacity = "1";
                } else {
                    row[j].style.opacity = "1";
                }
            }
        })
    }
}

//rating bar 
const barMeter = () => {
    const maxWidth = 130;
    let ratingCount = (fiveStar + fourStar + threeStar + twoStar + oneStar)
    let fiveStarPx = ((fiveStar * maxWidth) / ratingCount);
    let fourStarPx = ((fourStar * maxWidth) / ratingCount);
    let threeStarPx = ((threeStar * maxWidth) / ratingCount);
    let twoStarPx = ((twoStar * maxWidth) / ratingCount);
    let oneStarPx = ((oneStar * maxWidth) / ratingCount);
    ratingBar[0].style.width = `${fiveStarPx}px`;
    ratingBar[1].style.width = `${fourStarPx}px`;
    ratingBar[2].style.width = `${threeStarPx}px`;
    ratingBar[3].style.width = `${twoStarPx}px`;
    ratingBar[4].style.width = `${oneStarPx}px`; 
}

hoverEffect();
barMeter();

