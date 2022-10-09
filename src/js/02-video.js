// import {Player} from '@vimeo/player';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
var STOREGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimedUpdate, 1000));

function onTimedUpdate(e) {
    
    localStorage.setItem(STOREGE_KEY, e.seconds);
};

const getTimeSum = (localStorage.getItem(STOREGE_KEY));
if (getTimeSum !== null) {
    player.setCurrentTime(getTimeSum)

}