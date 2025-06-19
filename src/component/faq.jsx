import '../css/faq.css';
import { CommonAccordionContainer } from './common-accordion';
function Faq({data}) {
  return (
    <div className='faq-container'>
      <div><img src="/faq.svg" alt="" /></div>
      <div className='faq-body'>
        <h1><span>Our</span> Faq</h1>
        <CommonAccordionContainer data={data}/>
      </div>
    </div>
  );
}

export default Faq;