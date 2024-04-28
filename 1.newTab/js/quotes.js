const $quoteText = document.querySelector('.quote-text')
const APIURL = 'https://api.adviceslip.com/advice'

const getRandomQuote = async () => {
  try {
    const APIResponse = await fetch(APIURL)
    const quoteText = await APIResponse.json()
    return quoteText.slip.advice
  } catch (err) {
    console.error(err)
  }
}

const setRandomQuote = async () => {
  try {
    const quoteText = await getRandomQuote()
    $quoteText.innerText = `"${quoteText}"`
  } catch (error) {
    console.error(error)
  }
}

setRandomQuote()
