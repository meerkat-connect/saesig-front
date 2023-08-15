import React from 'react'
import AdoptionRecordList from '../../components/Lists/AdoptionRecordList';

const AdoptionRecord = () => {
  return (
    <div className="saesig-content-wrap">
        <div className="saesig-title-con">
            <img className="saesig-title-icon" />
            <span className="saesig-title">
                🐶 분양 기록
            </span>
        </div>
        <div className="saesig-filter-con">
            <button className="saesig-round-default-button active">
                전체
            </button>
            <button className="saesig-round-default-button">
                분양중/예약중
            </button>
            <button className="saesig-round-default-button">
                예약완료
            </button>
        </div>
        <div className="saesig-content-con">
            <AdoptionRecordList title={"30개월 여아 래브라도 리트리버"} onClick={() => {return false;}} />
        </div>
    </div>
  )
}

export default AdoptionRecord