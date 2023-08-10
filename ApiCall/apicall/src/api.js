import axios from 'axios'

const searchImages= async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers:{
        Authorization:'Client-ID ClKWrChYCZoLDHwwnPkN_mvgg1P5YdLA2-f7xF9bjGs'
      },
      params:{
        query:term
      }
    })
    return response.data.results;
  }


  export default searchImages;