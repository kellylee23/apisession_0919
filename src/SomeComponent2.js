// SomeComponent2.js
import React, { useEffect, useState } from 'react';
import { fetchDatas } from './requests2';
import './App.css';

const SomeComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetchDatas(1, 10, 'json');
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
      <h1>API 데이터 - 전라북도 익산시_의료기기판매업소</h1>
      </div>
      <ol>
        {data.map((item, index) => (
          <li key={index}>
            {item['영업소명']} - {item['소재지(도로명)']}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SomeComponent;