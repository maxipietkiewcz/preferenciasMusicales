tf.tidy(() => {
  const usuario = document.getElementById("usuario");
  const bandas = [
    "Metallica",
    "The Beatles",
    "Draft Punk",
    "Beyonce",
    "Nirvana",
    " N.W.A.",
  ];
  const generos = ["Metal", "Rock", "Electronic", "Pop", "Grunge", "Rap"];

  const votacionUsuario = [document.getElementById("calificacion")];
  const votacionUsuarioTensor = tf.tensor(votacionUsuario);

  const generosBandas = tf.tensor([
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1],
  ]);

  //datos del usuario
  const rasultadoMultiplicacion = generosBandas.matMul(votacionUsuarioTensor);
  rasultadoMultiplicacion.print();

  //Bandas favoritas del usuario
});
