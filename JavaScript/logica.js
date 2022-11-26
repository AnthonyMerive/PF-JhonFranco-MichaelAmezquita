function obtenerInfo() {
  let nombre = document.getElementById("Usuario").value;
  let email = document.getElementById("Recopilacion");
  if (Recopilacion.length < 10) {
    Swal.fire({
      title: "Error!",
      text: "El email debe contar con un número superior a 10 caractere",
      icon: "error",
      confirmButtonText: "Volver",
    });
  } else {
    Swal.fire({
      title: "¡MARAVILLOSO!",
      icon: "success",
      confirmButtonText: "Ahora recibirás nuestras notificaciones",
    }).then(() => {
      location.href = "https://sweetalert2.github.io/#download";
    });
  }
}
