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
      const result = await fetchData(1, 46, 'json');
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
      <div className='header' />
      <h2 className='text'>[ 질병별 판정현황 ]</h2>

      {data.map((item, index) => (
      
        <h5 key={index}>
          <h5 className='text-color'>구분 : {item['구분']} </h5>
          <h5 className='text-center'>판정(건) : {item['판정(건)']}</h5>
          <h5 className='text-center'>인정(건) : {item['인정(건)']}</h5>
          <h5 className='text-center'>인정률(퍼센트) : {item['인정률(퍼센트)']}</h5>
        </h5> 
      ))} 
    </div>
  );
};

export default SomeComponent;