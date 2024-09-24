const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchDatas = async (page = 1, perPage = 10) => {
    try {
      const endpoint = '/15101150/v1/uddi:9759a59e-b892-4698-90b5-85e6dd0d99e1'//같은 api일 경우에는, 앤드포인트만 바꾸면된다.
      // 요청 URL을 출력
      console.log(`${BASE_URL}${endpoint}이다${page}페이지이다${perPage}퍼페이지이다`);
      
      const url = `${BASE_URL}${endpoint}?page=${page}&perPage=${perPage}&serviceKey=${API_KEY}`;
      console.log('요청 URL:', url);
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };