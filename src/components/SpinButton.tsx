import React, { useState, MouseEvent } from 'react';
import './SpinButton.css';

const MIN_COUNT = 0;
const MAX_COUNT = 3;
const PASSENGER_TYPE = '성인';

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    if (count < MAX_COUNT) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > MIN_COUNT) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className='spinButtonContainer'>
      <div>
        <h1>승객 선택</h1>
        <div className='spinButtonLabel'>
          <label>{PASSENGER_TYPE}</label>
          <div
            className='helpIcon'
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            ?
            {isTooltipVisible && (
              <span className='tooltip'>최대 인원수는 3명까지 가능합니다</span>
            )}
          </div>
        </div>
        <button
          onClick={decrement}
          className='spinButton'
          disabled={count <= MIN_COUNT}
          aria-label={`${PASSENGER_TYPE} 탑승자 한명 줄이기`}
        >
          -
        </button>
        <label
          className='input-label'
          htmlFor={PASSENGER_TYPE}
          aria-live='polite'
        >
          {count > 0 && `성인 승객 추가 ${count}`}
        </label>
        <input
          id={PASSENGER_TYPE}
          type='text'
          role='spinbutton'
          readOnly
          className='spinButtonInput'
          value={count}
          min={MIN_COUNT}
          max={MAX_COUNT}
          aria-label={`${PASSENGER_TYPE} ${count} 텍스트 숫자만 수정`}
        />
        <button
          onClick={increment}
          className='spinButton'
          disabled={count >= MAX_COUNT}
          aria-label={`${PASSENGER_TYPE} 탑승자 한명 늘리기`}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
