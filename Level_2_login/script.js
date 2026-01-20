// 🔹 LOGIN API (Fake backend simulation)
function loginAPI(username, password) {

  // Promise create pannrom (async operation)
  return new Promise((resolve, reject) => {

    // setTimeout → server response madhiri delay
    setTimeout(() => {

      // Username & password correct-aa irundhaa
      if (username === "galaxy" && password === "1234") {

        // SUCCESS → token return pannum
        resolve("TOKEN_ABC_123");

      } else {

        // FAILURE → error message
        reject("Invalid login");

      }
    }, 1000); // 1 second delay
  });
}


// 🔹 PROFILE API (Token based authentication)
function profileAPI(token) {

  // Promise again (async profile fetch)
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      // Token correct-aa irundhaa
      if (token === "TOKEN_ABC_123") {

        // Profile data send pannum (JSON object)
        resolve({
          name: "Galaxy",
          role: "CSBS Student"
        });

      } else {

        // Token wrong na access denied
        reject("Unauthorized");

      }
    }, 1000); // 1 second delay
  });
}


// 🔹 FRONTEND LOGIN FUNCTION
async function login() {

  // Username input field value edukkrom
  const username = document.getElementById("username").value;

  // Password input field value edukkrom
  const password = document.getElementById("password").value;

  // Result display panna element
  const result = document.getElementById("result");

  try {
    // UI message
    result.innerText = "Logging in...";

    // 🔹 loginAPI call
    // await → response varra vara wait pannum
    const token = await loginAPI(username, password);

    // Login success message
    result.innerText = "Login success. Fetching profile...";

    // 🔹 profileAPI call using token
    const profile = await profileAPI(token);

    // Profile details UI-la display
    result.innerText =
      `Name: ${profile.name}, Role: ${profile.role}`;

  } catch (err) {

    // login / profile error varumbodhu
    result.innerText = err;

  }
}
