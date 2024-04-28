import { unSplash } from './API_KEY.js'

const $background = document.querySelector('.background')

const tempImgUrl =
  'https://images.unsplash.com/photo-1711779321822-18c979a2362b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTU0MTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQzMDM3NDJ8&ixlib=rb-4.0.3&q=80&w=1080'

const getRandomImage = async (AccessKey) => {
  const url = `https://api.unsplash.com/photos/random/?orientation=landscape&client_id=${AccessKey}`
  try {
    const APIResponse = await fetch(url)
    const data = await APIResponse.json()
    return data.urls.regular
  } catch (err) {
    return data.urls.regular
  }
}

const setBackgroundImage = async () => {
  await getRandomImage(unSplash.AccessKey)
    .then((url) => ($background.style.backgroundImage = `url(${url})`))
    .catch((err) => {
      console.error(err)
      $background.style.backgroundImage = `url(${tempImgUrl})`
    })
}

setBackgroundImage()
