console.log("Start");


function displayError(errorMessage) {
    console.error(new Error(errorMessage));
}
const usersDB = {
    "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
    "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
    "user3@hw.js": [],
};



function loginUser(email, password, callback, errorCallback) {
    if (usersDB[email]) {
        setTimeout(() => {
            console.log("Now we have the data of user:", email)
            callback({ userEmail: email })
        }, 3000);
    } else {
        setTimeout(() => {
            errorCallback("User not found!")
        }, 3000);
    }
};



function getUserVideos(email, callback, errorCallback) {
    if (usersDB[email].length) {
        setTimeout(() => {
            callback(usersDB[email])
        }, 2000);
    } else {
        setTimeout(() => {
            errorCallback("Videos not found!")
        }, 2000);
    }
}

function videoDetails(video, callback, errorCallback) {
    if (video.title) {
        setTimeout(() => {
            callback(video.title)
        }, 2000);
    } else {
        setTimeout(() => {
            errorCallback("Video Title not found!")
        }, 2000);
    }
}

const getPassedUsersFirstVideoTitle = (userEmail) => {
    loginUser(userEmail, 1234, (user) => {
        console.log("user:", user);
        getUserVideos(user.userEmail, (videos) => {
            console.log("videos:", videos);
            videoDetails(videos[0], (title) => {
                console.log("title:", title)
            }, displayError)
        }, displayError)
    }, displayError)
}
// getPassedUsersFirstVideoTitle("user4@hw.js");
// getPassedUsersFirstVideoTitle("user3@hw.js");
// getPassedUsersFirstVideoTitle("user2@hw.js");
// getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");


