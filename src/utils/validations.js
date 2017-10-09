const isEmpty = value => value == null || !value.length

export const withMsg = msg => rule => value => rule(value) && msg

export const required = value => isEmpty(value)
  && 'Required'

export const minLength = length => value => !isEmpty(value)
  && value.length <= length
  && `Length must be greater than ${length}`

export const maxLength = length => value => !isEmpty(value)
  && value.length > length
  && `Exceeded max length of ${length}`

export const regexInclude = regex => value => !isEmpty(value)
  && !regex.test(value)
  && 'Regex failed'

export const regexExclude = regex => value => !isEmpty(value)
  && regex.test(value)
  && 'Regex failed'

const usernameRegex = /^[a-z0-9_\-.]{3,20}$/i
export const username = withMsg('Invalid name')(regexInclude(usernameRegex))

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export const email = withMsg('Invalid email')(regexInclude(emailRegex))
