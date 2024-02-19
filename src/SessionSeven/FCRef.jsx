import { useState, useRef, useEffect } from 'react';

const FCRef = () => {
  const [name, setName] = useState('');
  const inputRef = useRef();
  console.log('Input Ref::', inputRef);

  useEffect(() => {
    // console.log('Input Ref on Mount::', inputRef);
    inputRef.current.focus();
  }, []);
  return (
    <section>
      <p>Input Box</p>
      <input
        ref={inputRef}
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </section>
  );
};

export default FCRef;
