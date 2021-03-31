/*
  There is not a specific attribute that will reveal whether a MediaElement is currently playing.

  However, you can deduce this from the state of the other attributes. If all of these are true:
  * `currentTime` > 0
  * `paused` is false
  * `ended` is false
  * `readyState` doesn't indicate media stopped due to errors

  then the MediaElement is currently playing.
*/
export default function isMediaPlaying (media) {
  return media && media.currentTime > 0 && !media.paused && !media.ended && media.readyState > 2
}
