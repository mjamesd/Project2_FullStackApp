// Declare document elements
const thisForm = document.querySelector(`.form`);
const recordType = thisForm.classList[2]; // <form class=`form add-form artist`> --> 0=form, 1=add-form, 2=artist
const recordId = document.getElementById(`${recordType}-id`);
// try {
//     const recordId = document.getElementById(`${recordType}-id`);
// } catch (err) {
//     // do nothing
// }
const recordName = document.getElementById(`${recordType}-name`);
const file = document.getElementById(`${recordType}-img`);
const displayImg = document.getElementById(`imgur-img`);
const formUrl = document.getElementById(`${recordType}-imgur_url`);

// Upload image to Imgur, add new Imgur image link to form as hidden input
const uploadImage = (event) => {
    const formdata = new FormData();
    formdata.append(`image`, event.target.files[0]);
    fetch(`https://api.imgur.com/3/image/`, {
        method: `post`,
        headers: {
            Authorization: `Client-ID 8572f0a99997de2` // process.env.IMGUR_API_CLIENT_ID
        },
        body: formdata
    })
        .then((response) => response.json())
        .then((imgur) => {
            if (thisForm.classList[1] == `edit-form`) {
                document.querySelector(`#displayCurrentImgurUrl`).style.textDecoration = `line-through`;
                document.querySelector(`#displayCurrentImgurUrl`).parentElement.innerHTML += ` <strong>${imgur.data.link}</strong>`;
            }
            displayImg.src = imgur.data.link;
            displayImg.style.display = `block`;
            formUrl.value = imgur.data.link;
    });
};

const addRecord = async (event) => {
    event.preventDefault();

    const newRecord = {
        name: recordName.value.trim(),
        imgur_url: formUrl.value.trim()
    };
    
    if (newRecord.name && newRecord.imgur_url) {
        const response = await fetch(`/api/${recordType}s/add`, {
            method: `POST`,
            headers: { 'Content-Type': `application/json` },
            body: JSON.stringify(newRecord)
        });
        if (response.ok) {
            document.location.replace(`/api/${recordType}s/`);
        } else {
            alert(`Failed to add new record. Check the logs!`);
        }
    }
};

const editRecord = async (event) => {
    event.preventDefault();

    const thisRecord = {
        id: recordId.value.trim(),
        name: recordName.value.trim(),
        imgur_url: formUrl.value.trim()
    };
    
    if (thisRecord.name && thisRecord.imgur_url) {
        const response = await fetch(`/api/${recordType}s/edit/${recordId}`, {
            method: `PUT`,
            headers: { 'Content-Type': `application/json` },
            body: JSON.stringify(thisRecord)
        });
        if (response.ok) {
            document.location.replace(`/api/${recordType}s`);
        } else {
            alert(`Failed to edit ${recordType}. Check the logs!`);
        }
    }
};

// Event listeners
file.addEventListener(`change`, uploadImage);
if (thisForm.classList[1] == `add-form`) {
    thisForm.addEventListener(`submit`, addRecord);
} else if (thisForm.classList[1] == `edit-form`) {
    thisForm.addEventListener(`submit`, editRecord);
}

// eof