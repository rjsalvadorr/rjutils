'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    fastboot: {
      hostWhitelist: [/^localhost:\d+$/]
    }
  };
};
