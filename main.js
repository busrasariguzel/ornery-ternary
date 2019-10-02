function isHot(num) {
  return num >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.'
}


function helloThere(str) {
  return str.length>5 ? 'Hi' + ', ' + str : 'Hello' + ', ' +  str ;
}


function goodbyeYou() {

}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}