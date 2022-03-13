if ("serviceProjectser" in navigator) {
  navigator.serviceProjectser
    .register("/Portfolio/sw.js")
    .then((reg) => console.log("service Projectser registered"))
    .catch((err) => console.log("service Projectser not registered", err));
}
