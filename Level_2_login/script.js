// Fake backend APIs (same logic)
//login api for login 
function loginAPI(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "galaxy" && password === "1234") {
        resolve("TOKEN_ABC_123");
      } else {
        reject("Invalid login");
      }
    }, 1000);
  });
}

function profileAPI(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "TOKEN_ABC_123") {
        resolve({
          name: "Galaxy",
          role: "CSBS Student"
        });
      } else {
        reject("Unauthorized");
      }
    }, 1000);
  });
}

// Frontend logic
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const result = document.getElementById("result");

  try {
    result.innerText = "Logging in...";

    const token = await loginAPI(username, password);

    result.innerText = "Login success. Fetching profile...";

    const profile = await profileAPI(token);

    result.innerText =
      `Name: ${profile.name}, Role: ${profile.role}`;

  } catch (err) {
    result.innerText = err;
  }
}
