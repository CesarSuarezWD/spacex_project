const getAllRockets = async () => {
  try {
    const apiResp = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await apiResp.json();
    return data;
  } catch (error) {
    console.log(error.message)
  }
}

export { getAllRockets };