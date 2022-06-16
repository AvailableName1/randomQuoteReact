import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const twitterIcon = <FontAwesomeIcon icon={faTwitter} border className='twitterIcon' size='3x' />

const QUOTES_DATA = [
  {
    quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
    author: 'Christopher Columbus'
  },
  {
    quote: 'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.',
    author: 'Jesse Owens'
  },
  {
    quote: 'Believe you can and you’re halfway there.',
    author: 'Theodore Roosevelt'
  },
  {
    quote: 'Fall seven times and stand up eight.',
    author: 'Japanese Proverb'
  },
  {
    quote: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
    author: 'Benjamin Franklin'
  },
  {
    quote: 'Dream big and dare to fail.',
    author: 'Norman Vaughan'
  },
  {
    quote: 'An unexamined life is not worth living.',
    author: 'Socrates'
  },
  {
    quote: 'I attribute my success to this: I never gave or took any excuse.',
    author: 'Florence Nightingale'
  },
  {
    quote: 'Dream big and dare to fail.',
    author: 'Norman Vaughan'
  },
  {
    quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
    author: 'Joshua J. Marine'
  },
]

const randomQuote = () => {
  let randomIndex;
  randomIndex = Math.floor(Math.random() * (QUOTES_DATA.length - 1));
  return randomIndex;
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
    this.handleRequest = this.handleRequest.bind(this)
  }
  componentDidMount() {
    let indexNeeded = randomQuote();
    console.log("you've clicked")
    this.setState({
      quote: QUOTES_DATA[indexNeeded].quote,
      author: QUOTES_DATA[indexNeeded].author
    })
  }
  handleRequest() {
    let indexNeeded = randomQuote();
    console.log(`you've clicked, index is ${indexNeeded}`)
    if (QUOTES_DATA[indexNeeded].quote !== this.state.quote) {
      this.setState({
        quote: QUOTES_DATA[indexNeeded].quote,
        author: QUOTES_DATA[indexNeeded].author
      })
    } else if (indexNeeded == QUOTES_DATA.length - 1) {
      indexNeeded -= 1;
      this.setState({
        quote: QUOTES_DATA[indexNeeded].quote,
        author: QUOTES_DATA[indexNeeded].author
      })
    } else {
      indexNeeded += 1;
      this.setState({
        quote: QUOTES_DATA[indexNeeded].quote,
        author: QUOTES_DATA[indexNeeded].author
      })
    }
  }
  render() {
    // сделать для твиттера
    const hrefForTwitterShare = `https://twitter.com/intent/tweet?hashtags=quote&related=freecodecamp&text=${encodeURIComponent(this.state.quote)}%20${encodeURIComponent(this.state.author)}`
    return (
      <div id='quote-box'>
        <QuoteAuthor quote={this.state.quote} author={this.state.author} />
        <Buttons handler={this.handleRequest} twitterShareLink={hrefForTwitterShare} />
      </div>
    )
  }
}

class QuoteAuthor extends React.Component {
  render() {
    return (
      <div>
        <p id='text'>{this.props.quote}</p>
        <p id='author'>{this.props.author}</p>
      </div>
    )
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <div className='Buttons'>
        <button type='submit' id='new-quote' onClick={this.props.handler}>New quote</button>
        <a href={this.props.twitterShareLink} target='_blank' rel='noreferrer' id='tweet-quote'>{twitterIcon}</a>
      </div>
    )
  }
}

export default App;