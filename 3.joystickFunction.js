function joystickCode(){
//put your joystick code here... use the joyy and joyx variables

if (joyy>=70){
console.log("backward");
robotSocket.send('motorMove,1,0,900,0,0');
}

if (joyy<=-70){
console.log("forward");
robotSocket.send('motorMove,0,1,900,0,0');
}

if (joyy==0){
console.log("forward");
robotSocket.send('brake,0,1,900,0,0');
}
if (joyx>=70){
console.log("backward");
robotSocket.send('motorMove,1,1,900,0,0');
}

if (joyx<=-70){
console.log("forward");
robotSocket.send('motorMove,0,0,900,0,0');
}
}