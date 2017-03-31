function signup(){
    var stationary = document.getElementById('stationary');
    stationary.style.display = 'none';
    var flying = document.getElementById('flying');
    flying.style.display = 'block';
    flying.style.animationName = 'liftOff';
}