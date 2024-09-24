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
      </div>
      <h2 className='text'>[ 지역별 판정현황 ]</h2>


{data.map((item, index) => (
 <h5 key={index}>
    <table className='table-header' >
      <tr className='table-header'>
        <th className='table-color'>{item['구분1']}</th>
        <th >{item['구분2']}</th>
      </tr>
      <tr className='table-header'>
        <td className='table-header'>전체 </td>
        <td>{item['전체']}</td>
      </tr>
      <tr className='table-header'>
        <td className='table-header'>서울남부 </td>
        <td>{item['서울남부']}</td>
      </tr>
      <tr className='table-header'>
        <td className='table-header'>서울북부 </td>
        <td>{item['서울북부']}</td>
      </tr>
      <tr className='table-header'>
        <td className='table-header'>부산 </td>
        <td>{item['부산']}</td>
      </tr>
      <tr className='table-header'>
        <td className='table-header'>경남 </td>
        <td>{item['경남']}</td>
      </tr>
      <tr className='table-header'>
        <td className='table-header'>대구 </td>
        <td>{item['대구']}</td>
      </tr>
      <tr className='table-header'>
        <td className='table-header'>경인 </td>
        <td>{item['경인']}</td>
      </tr>
      <tr className='table-header'>
        <td className='table-header'>광주 </td>
        <td>{item['광주']}</td>
      </tr>
      <tr className='table-header'>
        <td className='table-header'>대전 </td>
        <td>{item['대전']}</td>
      </tr>
    </table>
 </h5>

      ))}
      </div>
  );
};

export default SomeComponent;