import React from 'react';
import {public_path} from '../../utils/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getFaq } from '../../redux/actions/faqAction';
import parse from 'html-react-parser';


function Faq(props) {
  const dispatch = useDispatch()
  React.useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getFaq())
  }, []);
  const faq = useSelector(state => state.faqReducer.data)
  console.log(faq)
  return (
    <div>
      <div className="blog-section mb-5 pb-5">
        <div className="">
            <img src={public_path('/assets/img/faq-1.png')} alt=""/>
          <h1 className="faq-text">FAQ</h1>

          <div className="accordion" id="accordionExample">
            {
              faq.map((e, i) => {
                return (
                  <div className="card ">
                    <div className="card-header bg-white" id={"heading" + i}>
                      <h2 className="mb-0">
                        <button className="btn  btn-block text-left" type="button" data-toggle="collapse" data-target={"#collapseOne" + i} aria-expanded="true" aria-controls={"collapseOne" + i}>

                          <h4 className="title-accordion">{e.sequence + '. ' + e.question}</h4>
                        </button>
                      </h2>
                    </div>

                    <div id={"collapseOne" + i} className="collapse" aria-labelledby={"heading" + i} data-parent="#accordionExample">
                      <div className="card-body" style={{ wordWrap: 'break-word' }}>
                        {parse(e.answer)}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq;