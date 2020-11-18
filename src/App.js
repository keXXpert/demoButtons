import { useRef } from "react";

function App() {
  const downloadRef = useRef(null)
  const openRef = useRef(null)
  return (
    <div>
      <h1>Your HTML here</h1>
      <a href='/%PUBLIC_URL%/sample.pdf' ref={downloadRef} target='_blank'>Download pdf</a>
      <a href='https://www.youtube.com/watch?v=Ut4KlWUA5TI' ref={openRef} rel="noreferrer" target='_blank'>Open youtube</a>
      <button onClick={() => downloadRef.current.click()}>Download PDF</button>
      <button onClick={() => openRef.current.click()}>Open Youtube</button>
    </div>
  );
}

export default App;
