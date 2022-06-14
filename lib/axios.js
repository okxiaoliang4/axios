import * as utils from './utils'
import bind from './helpers/bind'
import Axios from './core/Axios'
import mergeConfig from './core/mergeConfig'
import defaults from './defaults'
import formDataToJSON from './helpers/formDataToJSON'

import CanceledError from './cancel/CanceledError'
import CancelToken from './cancel/CancelToken'
import isCancel from './cancel/isCancel'
import { version } from './env/data'
import toFormData from './helpers/toFormData'
import AxiosError from '../lib/core/AxiosError'
import spread from './helpers/spread'
import isAxiosError from './helpers/isAxiosError'

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig)
  var instance = bind(Axios.prototype.request, context)

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context)

  // Copy context to instance
  utils.extend(instance, context)

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig))
  }

  return instance
}

// Create the default instance to be exported
export const axios = createInstance(defaults)

// Expose Axios class to allow class inheritance
axios.Axios = Axios

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError
axios.CancelToken = CancelToken
axios.isCancel = isCancel
axios.VERSION = version
axios.toFormData = toFormData

// Expose AxiosError class
axios.AxiosError = AxiosError

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises)
}
axios.spread = spread

// Expose isAxiosError
axios.isAxiosError = isAxiosError

axios.formToJSON = function (thing) {
  return formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing)
}