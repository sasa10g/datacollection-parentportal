export const ordinalSuffix = (number: number) => {
  const j = number % 10
  const k = number % 100

  if (j === 1 && k !== 11) {
    return `${number}st`
  }
  if (j === 2 && k !== 12) {
    return `${number}nd`
  }
  if (j === 3 && k !== 13) {
    return `${number}rd`
  }
  return `${number}th`
}

export const penColorMode = (mode: string): string => {
  if (mode === 'dark' || mode === 'light') {
    return mode === 'dark' ? '#fff' : '#000'
  } else {
    throw new Error(`Invalid mode: ${mode}. Expected 'dark' or 'light'.`)
  }
}

export function percentageDimensionSumObject(value: number | { [key: string]: number } | null | undefined) {
  // Check if the value is a number
  if (typeof value === 'number') {
    return value
  }

  // Check if the value is an object with specific keys
  if (typeof value === 'object' && value !== null) {
    let sum = 0
    // Sum all numeric values in the object
    for (const key in value) {
      if (typeof value[key] === 'number') {
        sum += value[key]
      }
    }
    return sum
  }

  // Return 0 if value is not a number or the expected object
  return 0
}

// Utility to set a cookie with an expiration date
export const setCookie = (name: string, value: string, hours: number) => {
  const date = new Date()
  date.setTime(date.getTime() + hours * 60 * 60 * 1000) // Cookie expiration in hours
  const expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

// Utility to retrieve a cookie value
export const getCookie = (name: string) => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export const isParent = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const parentFlag = searchParams.get('parent') === 'true'

  // Store the parent flag in a cookie with a 3-day expiration
  if (parentFlag) {
    if (!getCookie('isParent')) setCookie('isParent', 'true', 2)
    return parentFlag
  } else {
    return getCookie('isParent') === 'true' || false
  }
}

export const promptBeforeClosingTab = (ENV_NODE_ENV: string) => {
  if (ENV_NODE_ENV !== 'development') {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = '' // This line is necessary for most browsers to show the confirmation dialog.
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }

  return
}
