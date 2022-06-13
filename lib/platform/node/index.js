'use strict';

export default {
  isNode: true,
  classes: {
    URLSearchParams: require('./classes/URLSearchParams'),
    FormData: require('./classes/FormData'),
    Blob: typeof Blob !== 'undefined' && Blob || null
  },
  protocols: [ 'http', 'https', 'file', 'data' ]
};
