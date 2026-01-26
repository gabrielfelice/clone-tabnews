function status(request, response) {
  response.status(200).json({ chave: "Tudo joia" });
}

export default status;
