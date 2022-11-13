let submitBtn = document.getElementById("Submit");

const info = {
    student_name: '',
    email: '',
    phno: '',
    dob: '',
    gender: '',
	collname:'',
	branch:'',
	url: '',
}

const getData = () => {
    info.student_name = document.getElementById('name').value;
    info.email = document.getElementById('email').value;
    info.phno = document.getElementById('phno').value;
    info.dob = document.getElementById('dob').value;
    info.gender = document.querySelector('input[name="male-female"]:checked').value;
	info.collname = document.getElementById('college').value;
    info.branch = document.querySelector('input[name="branches"]:checked').value;
	info.url = document.getElementById('url').value;
    if (localStorage.getItem("infoSection") === null) 
	{
        infoItem = [];
    } 
	else 
	{
        infoItem = JSON.parse(localStorage.getItem("infoSection"))
    }
    infoItem.push(info);
    localStorage.setItem("infoSection", JSON.stringify(infoItem));
}

const showData = () => 
{
    let cardContainer = document.getElementById("cardContainer");

    let cards = '';

    let getLocalStorage = localStorage.getItem("infoSection");

    if (getLocalStorage === null) {
        console.log("null");
    } else {
        cardDivArr = JSON.parse(getLocalStorage);

        cardDivArr.forEach((item, index) => {

            cards += `<div class="card">
            <img src=${item.url} alt="Profile Picture">
            <div class="info">
                <p><strong>Name</strong> : ${item.student_name}</p>
                <p><strong>Email</strong> : ${item.email}</p>
				<p><strong>Phone Number</strong> : ${item.phno}</p>
                <p><strong>Date of Birth</strong> :${item.dob}</p>
                <p><strong>Gender</strong> : ${item.gender}</p>
				<p><strong>College Name</strong> : ${item.collname}</p>
				<p><strong>Branch</strong> : ${item.branch}</p>
                <button onclick="deleteData(${index})">Delete</button>
            </div>
        </div>`;
        })
    }
    cardContainer.innerHTML = cards;
}

const deleteData = (index) => {
    let getList = JSON.parse(localStorage.getItem("infoSection"));
    getList.splice(index, 1);

    localStorage.setItem("infoSection", JSON.stringify(getList));
    window.location.reload();
}

showData();

submitBtn.addEventListener(('click'), () => {
    getData();
    showData();
})
Footer