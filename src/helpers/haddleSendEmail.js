import emailjs from "@emailjs/browser";

export const sendEmail = (mensaje_error, setButtonMsg, setButtonMsgEng, form) => {

  mensaje_error.classList.remove("show");
  setButtonMsg("Enviando");
  setButtonMsgEng("Sending");
  
  emailjs
    .sendForm(
      "service_zpz8jos",
      "template_0zsqu7a",
      form.current,
      "gM84CoCv2nEFAxwVz"
    )
    .then(
      (result) => {
        if (result.text === "OK") {
          const formularios = document.querySelectorAll(".formulario");
          for (let i = 0; i < formularios.length; i++) {
            formularios[i].classList.add("hide");
          }
        }

        document.querySelector(".mensaje_exito").classList.add("show");
        setTimeout(() => {
          mensaje_error.classList.remove("show");
        }, 3000);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
