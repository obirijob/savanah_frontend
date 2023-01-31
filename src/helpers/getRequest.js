/** @format */

async function getRequest(url, headers, fake = false) {
  const uri = `${
    fake ? process.env.REACT_APP_FAKE_URL : process.env.REACT_APP_BACKEND_URL
  }${url}`
  try {
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
    })
    if (response.ok) {
      const r = await response.json()
      return { success: true, data: r }
    } else {
      const r = await response.text()
      return { success: false, data: r }
    }
  } catch (error) {
    return { success: false, response: error }
  }
}

export default getRequest
