const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $detener = document.querySelector("#stop");
$play.addEventListener("click", handlePlay);
$detener.addEventListener("click", handlePause);

//botones de adelantar

const $backward = document.querySelector("#backward");
$backward.addEventListener("click", handleBackward);

//botones de atrasar
const $forward = document.querySelector("#forward");
$forward.addEventListener("click", handleForward);

//dando la funcion de play
function handlePlay() {
  console.log("estas dando click en play");
  $video.play();
  $play.hidden = true;
  $detener.hidden = false;
}

//aplicando la funcion de pause
function handlePause() {
  console.log("estas dando click en pausa");
  $video.pause();
  $detener.hidden = true;
  $play.hidden = false;
}

function handleForward() {
  $video.currentTime = $video.currentTime + 10;
  console.log("hola estoy adelantando ", $video.currentTime);
}
function handleBackward() {
  $video.currentTime = $video.currentTime - 10;
  console.log("hola estoy adelantando ", $video.currentTime);
}

$video.addEventListener("loadedmetadata", handleLoader);
$video.addEventListener("timeupdate", handleTimeUpdate);
const $progress = document.querySelector("#rango");

///////////////////////////////////////////////////////////

function handleLoader() {
  if ($video.duration === Infinity) {
    $video.currentTime = 1e101;
    $video.ontimeupdate = function () {
      this.ontimeupdate = () => {
        return ($progress.max = $video.duration);
      };
      return ($progress.max = $video.duration);
    };
  }
  $progress.max = $video.duration;

  console.log("a cargado mi video de duracion", $video.duration);
}
function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}
/////////////////////////////////////////////////////////////////////////
$progress.addEventListener("input", handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
  console.log($progress.value);
}
