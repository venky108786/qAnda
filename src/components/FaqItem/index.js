// Write your code here.
import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const FaqItem = props => {
  const {qAnda, isClicked, onclickButton} = props
  // eslint-disable-next-line no-unused-vars
  const {id, questionText, answerText} = qAnda
  const clicking = () => {
    onclickButton(id)
  }
  return (
    <li className="li">
      <p>{questionText}</p>
      <button type="button" onClick={clicking} className="button">
        <img
          src={isClicked ? plusImg : minusImg}
          alt={isClicked ? 'plus' : 'minus'}
        />
      </button>
    </li>
  )
}
export default FaqItem
