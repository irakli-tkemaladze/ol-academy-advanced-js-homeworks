console.log("Start");


function displayError(errorMessage) {
    console.error(new Error(errorMessage));
}
const usersDB = {
    "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
    "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
    "user3@hw.js": [],
};

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        if (usersDB[email]) {
            setTimeout(() => {
                console.log("Now we have the data of user:", email)
                resolve({ userEmail: email })
            }, 3000);
        } else {
            setTimeout(() => {
                reject("User not found!")
            }, 3000);

        }
    });






};


function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        if (usersDB[email].length) {
            setTimeout(() => {
                console.log(usersDB[email])
                resolve(usersDB[email])
            }, 2000);
        } else {
            setTimeout(() => {
                reject("Videos not found!")
            }, 2000);

        }
    })




}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        if (video.title) {
            setTimeout(() => {
                resolve(video.title)
            }, 2000);
        } else {
            setTimeout(() => {
                reject("Video Title not found!")
            }, 2000);

        }
    })



}

const getPassedUsersFirstVideoTitle = (user) => {

    loginUser(user, 1234)
        .then(objectOfUserName => getUserVideos(objectOfUserName.userEmail))
        .then(videos => videoDetails(videos[0]))
        .then(title => console.log(title))
        .catch((error) => displayError(error));
}


// getPassedUsersFirstVideoTitle("user4@hw.js");
// getPassedUsersFirstVideoTitle("user3@hw.js");
// getPassedUsersFirstVideoTitle("user2@hw.js");
// getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");
