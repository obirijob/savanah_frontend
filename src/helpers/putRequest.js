/** @format */

async function putRequest(url, body, headers) {
  const uri = `${process.env.REACT_APP_BACKEND_URL}${url}`
  try {
    const response = await fetch(uri, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
    })
    if (response.ok) {
      return { success: true, data: response }
    } else {
      return { success: false, response }
    }
  } catch (error) {
    return { success: false, response: error }
  }
}

export default putRequest
