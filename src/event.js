import EventEmitter from "events";

const CustomEmitter = new EventEmitter();

CustomEmitter.on("response", (data) => {
  console.log("recibido");
  console.log(data);
});

CustomEmitter.emit("response", "Hola");
