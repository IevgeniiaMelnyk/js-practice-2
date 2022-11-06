const form = document.querySelector("#form");

const formContent = `<label>
Login<input type="text" name="login" placeholder="Enter email" />
</label>
<label>
Password<input type="text" name="password" placeholder="Enter password"
/></label>
<button type="submit" disabled>Submit</button>`;

form.insertAdjacentHTML("afterbegin", formContent);

const refs = {
  login: form.querySelector('[name="login"]'),
    password: form.querySelector('[name="password"]'),
  button: form.querySelector('button'),
  
};
// console.log(refs.login);

const validateEmail = (event) => {
    const email = event.target.value;
  const check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
    );
    validateForm(check ? email : "", refs.password.value);

//   if (!check) {
//       refs.login.style.outline = "1px solid red";
//       refs.button.disabled = true;
//     // setTimeout(() => {
//     //   alert("Введено некоректний email");
//     // }, 400);
//       return; 
//     };
//     if (refs.password.value) {refs.button.disabled = false} 
};
const validatePassword = (event) => {
    const password = event.target.value;
    validateForm(refs.login.value, password.length === 6 ? password : "");

    // console.log(password)

//   if (event.target.value.length < 6) {
//       refs.password.style.outline = "1px solid red";
//       refs.button.disabled = true;
//   } else {
//       refs.password.style.outline = "none";
//       if (refs.login.value) {refs.button.disabled = false}
//     };
};

const validateForm = (email, password) => {
// console.log(email)
// console.log(password)

    console.log(true && password)

    
    switch (true) {
        case !!(email && password): refs.button.disabled = false; refs.password.style.outline = 'none'; refs.login.style.outline = 'none';
            console.log(email && password)
            break;
        case !!(!email && !password): refs.button.disabled = true; refs.password.style.outline = "1px solid red"; refs.login.style.outline = "1px solid red";
            console.log(!email && !password)
            break;
        case !!(email && !password): refs.button.disabled = true; refs.password.style.outline = "1px solid red"; refs.login.style.outline = 'none';
            console.log(email && !password)
            break;
        case !!(!email && password): refs.button.disabled = true; refs.login.style.outline = "1px solid red"; refs.password.style.outline = 'none';
            console.log(!email && password)
            break;
        default:
            break;
        
    }
    // switch (key) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
}


const onSubmitObjectForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const isObjectFormFull = Object.values(Object.fromEntries(formData)).every(element => element);
    console.log(isObjectFormFull);
    if (!isObjectFormFull) {
        return alert('Error!!!')
    } else { return}
        
    
}

refs.login.addEventListener("change", validateEmail);
refs.password.addEventListener("change", validatePassword);
form.addEventListener('submit', onSubmitObjectForm);
