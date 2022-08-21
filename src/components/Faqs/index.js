// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {isClicked: false}

  // eslint-disable-next-line no-unused-vars
  onclickButton = id => {
    this.setState(prv => ({isClicked: !prv.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {faqsList} = this.props

    return (
      <div className="bg">
        <div className="bg1">
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                qAnda={each}
                key={each.id}
                isClicked={isClicked}
                onclickButton={this.onclickButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
