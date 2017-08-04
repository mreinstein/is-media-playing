'use strict'

module.exports = function isMediaPlaying(media) {
  return media.currentTime > 0 && !media.paused && !media.ended && media.readyState > 2
}
