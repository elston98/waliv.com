firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        window.location = "report.html";
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function() {

            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            })


    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});


function login() {



    document.getElementById("lds-ring").style.display = "inline-block";

    var database = firebase.database();
    var ref = database.ref('admin');
    ref.on('value', gotData, errData);
}

function gotData(data)

{
    var errorText = "";
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    var value = data.val();
    if (value.Email == userEmail && value.Password == userPass) {
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            if (errorCode == "auth/user-not-found") {
                errorText = "This user does not exist in our database. Please check the email-id";
            } else if (errorCode == "auth/wrong-password") {
                errorText = "Incorrect Password Entered";
            } else {
                errorText = error.message;
            }
            document.getElementById("lds-ring").style.display = "none";
            window.alert("Login Failed : " + errorText);

            // ...
        });
    } else {
        window.alert("Login Failed: Please check the email and password entered");
        document.getElementById("lds-ring").style.display = "none";

    }
}

function errData(err) {
    window.alert(err);
}

function logout() {
    firebase.auth().signOut();
    window.location = "master.html";
    console.log("Signed out");

}


function func() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.

            window.location = "report.html";
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(function() {

                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                })


        } else {
            // No user is signed in.

            window.location = "master.html";

        }
    });

}

function check() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.

            // window.alert("Welcome " + user.email);
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(function() {

                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                })


        } else {
            // No user is signed in.

            window.location = "../master.html";

        }
    });

}