const register = () => {
  let userArray = JSON.parse(localStorage.getItem("@users"));

  const user = document.getElementById("user").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!userArray) {
    userArray = [{ user, email, senha }];
  } else {
    userArray.push({ user, email, senha });
  }

  localStorage.setItem("@users", JSON.stringify(userArray));

  setInfo();
};

const setInfo = () => {
  const user = document.getElementById("user").value;
  localStorage.setItem("@name", user);
  location.href = "index.html";
};

const onLogin = () => {
  let userArray = JSON.parse(localStorage.getItem("@users"));

  const user = document.getElementById("user").value;
  const senha = document.getElementById("senha").value;

  userArray.map((item) => {
    if (item.email == user) {
      if (item.senha == senha) {
        console.log("achou usuario!");
        localStorage.setItem("@name", item.user);
        location.href = "index.html";
      }
    }
  });
};
