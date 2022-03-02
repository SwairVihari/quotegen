import React from 'react'
import Styles from "./Quote.module.css"
const Quote = React.forwardRef((props,ref) => (

    <div ref={ref} className={Styles.container}>
      <div className={Styles.QuoteContainer}>
        <h2>Your Quote</h2>
        <p>
        “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
        </p>

        <h6>
        ― Marilyn Monroe
        </h6>

      <div className={Styles.ButtonContainer}>
        <button className={Styles.Button}>
          Generate Quote
        </button>

        <button className={Styles.Button}>
          Download Quote
        </button>
      </div>
        
     </div>
     </div>
));