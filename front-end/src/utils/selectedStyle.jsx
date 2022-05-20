import { useRef, useCallback } from 'react';

const HandleSelected = () => {
  const result = useRef(null);

  const handleClickStyle = useCallback(() => {
    result.current.addEventListener('click', (e) => {
      const request = e.target;
      const spanClassName = result.current.querySelectorAll('a');
      if (request.tagName === 'A') {
        const classTargetArray = Object.values(spanClassName);
        classTargetArray.forEach((item) => {
          item.classList.remove('selected');
        });
        request.classList.add('selected');
      }
    });
  }, []);
  return { handleClickStyle, result };
};

export default HandleSelected;
