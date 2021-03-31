## 🎧 is-media-playing

determine if an HTML MediaElement is currently playing

There is not a specific attribute that will reveal whether a MediaElement is currently playing.

However, you can deduce this from the state of the other attributes. If all of these are true:
* `currentTime` > 0
* `paused` is false
* `ended` is false
* `readyState` doesn't indicate media stopped due to errors

then the MediaElement is currently playing.

based on this great stackoverflow answer:

https://stackoverflow.com/questions/6877403/how-to-tell-if-a-video-element-is-currently-playing/6877530#6877530


### usage

```javascript
import isPlaying from 'is-media-playing'


const a = new Audio('/audio/elevator.mp3')  // this could also be a video element
a.play()

// wait a while...

const result = isPlaying(a)   // result === true if playing, false otherwise
```
