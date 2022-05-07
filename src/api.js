var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const baseUrl = "https://api.spacexdata.com/v3/history";

const fetchHistory = async (filters) => {

  let url = baseUrl;

  if(filters.start && filters.end){
    url += `?start=${filters.start}&end=${filters.end}`
  }

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;   
  } catch (error) {
    console.log('error', error)
  }
}

export {fetchHistory};