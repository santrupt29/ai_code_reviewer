import { useEffect, useState } from "react"
import "prismjs/themes/prism-tomorrow.css"
// import "prismjs/components/prism-jsx"
import prism from "prismjs";
import Markdown from "react-markdown"
import Editor from "react-simple-code-editor";
import rehypeHighlight from "rehype-highlight"
import axios from "axios"
import './App.css'

function App() {

  useEffect(() => {
    prism.highlightAll()
  });

  const [review, setReview] = useState(``, )

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', {code});

    setReview(response.data);
  }
  const [code, setCode] = useState(`function sum () {
      return a + b; 
}`)

  return (
    <>
      <main>
        <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code=>setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "python")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize:16,

              border:null,
              borderRadius:"5px",
              height:"100%",
              width:"100%"
            }}
           />
        <div 
          onClick={reviewCode}
         className="review">Review</div>
        </div>
        
        </div>
        
        
        <div className="right">
        <Markdown
rehypePlugins={[ rehypeHighlight ]}
>{review}</Markdown>
        </div>
      </main>
    </>
  )

  
}

export default App
