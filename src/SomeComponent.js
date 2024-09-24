// SomeComponent.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './requests';
import './App.css';

const SomeComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetchData(1, 10, 'json');
      if (result && result.data) {
        setData(result.data);
      } else {
        setData([]); // 응답이 없을 때 빈 배열 설정
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!data.length) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div>
      <div className='header'>
      <h1>API 데이터 - 전라북도 익산시_식품제조가공업체_리스트</h1>
      </div>
      <ol>
        {data.map((item, index) => (
          <li key={index}>
            {item['업종명']} - {item['업소명']} - {item['소재지(도로명)']} - {item['소재지전화']}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SomeComponent;