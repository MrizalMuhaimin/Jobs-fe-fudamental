const makeCallApi = async ({
    url = '', method = 'GET', params = {}, data = {}, headers = {}, responseType = null, timeout = 20000,
  }) => {
    let options = {
      method,
      headers,
      timeout
    };
    if(Object.keys(data).length){
      options.body = JSON.stringify(data);
    }

    let URL = `${process.env.SERVICE_URL}${url}`;
    if(Object.keys(params).length){
      URL += '?';
      let index =0;
      Object.keys(params).forEach(key => {
        URL += `${key}=${params[key]}`;
        if(index < Object.keys(params).length-1){
          URL += '&';
        };
        index += 1;

      });
    }

    try {
      const response = await fetch(URL,options);
      const responseJson = await response.json();
      return {error: false, data: responseJson};
    } catch (error) {
      return {error: true, message:error.message};
    }
  };
  
  export { makeCallApi };