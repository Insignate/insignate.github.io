const jFetch = async (url, method = 'GET', data = {}) => {
  try {
    const svrResp = await fetch(window.location.origin + '/web250/phpcom/' + url + '.php', { 
      method: method,
      credentials: 'same-origin',
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(data)
    })
    if (svrResp.status !== 200) return {error: "Could not retrieve information from the server"}
    return svrResp.json()
  } catch (error) {
    return {error}
  }
}

const getFetch = async (url, method = 'GET') => {
  try {
    const svrResp = await fetch(window.location.origin + '/web250/phpcom/' + url + '.php', { 
      method: method,
      credentials: 'same-origin',
      headers: {
        "Content-Type" : "application/json",
      }
    })
    if (svrResp.status !== 200) return {error: "Could not retrieve information from the server"}
    return svrResp.text()
  } catch (error) {
    return {error}
  }
}
const getJFetch = async (url, method = 'GET') => {
  try {
    const svrResp = await fetch(window.location.origin + '/web250/phpcom/' + url + '.php', { 
      method: method,
      credentials: 'same-origin',
      headers: {
        "Content-Type" : "application/json",
      }
    })
    if (svrResp.status !== 200) return {error: "Could not retrieve information from the server"}
    return svrResp.json()
  } catch (error) {
    return {error}
  }
}
const getTextFetch = async (url, method = 'GET') => {
  try {
    const svrResp = await fetch(window.location.origin + '/web250/phpcom/' + url + '.php', { 
      method: method,
      credentials: 'same-origin',
      headers: {
        "Content-Type" : "application/json",
      }
    })
    if (svrResp.status !== 200) return svrResp;
    //{error: "Could not retrieve information from the server"}
    return svrResp.text()
  } catch (error) {
    return {error}
  }
}

const textFetch = async (url, method = 'POST', data = {}) => {
  try {
    const svrResp = await fetch(window.location.origin + '/web250/phpcom/' + url + '.php', { 
      method: method,
      credentials: 'same-origin',
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(data)
    })
    
    if (svrResp.status !== 200) return {error: "Could not retrieve information from the server"}
    return await svrResp.text()
    
  } catch (error) {
    return {error}
  }
}