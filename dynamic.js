let target = document.getElementById('card'); //getting the targeted element
let images = ["https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/coding_reuters-sixteen_nine.jpg?VersionId=BB7A90pJLxZgcqT5KFCUhs6vkBSI3Dul","https://images.techopedia.com/images/uploads/istock-1173805290.jpeg?w=800&h=0&mode=max&quality=70&scale=both","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-l1Igz1WUFn9qac6ggoJSTk6Nr8PnDfTqGg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqoeMMTMJcmC9CDSdDTk1oWcnKIq-TfDFfw&usqp=CAU"]
let response = fetch('https://kontests.net/api/v1/all'); //fetching the api details 
response.then((value)=>{
    return value.json();
})
.then((value)=>{
    console.log(value);
    // making the card section dynamic 
    console.log(typeof(value));
    let html = ""; 
    value.forEach(element => {
        let image_url = images[Math.floor(Math.random()*images.length)]; 
        html =`<div class="card" style="width: 18rem;">
                  <img src="${image_url}" class="card-img-top" alt="oops">
                  <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">
                        <ul>
                            <li>Start Time : ${element.start_time}</li>
                            <li>End Time : ${element.end_time}</li>
                            <li>Duration : ${element.duration} ms</li>
                        </ul>
                    </p>
                    <a href="${element.url}" class="btn btn-primary">View Contest</a>
                  </div>
            </div>`;
        target.innerHTML += html;
    });
})


