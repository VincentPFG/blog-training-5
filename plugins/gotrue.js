import GoTrue from 'gotrue-js'

export default (_, inject) => {
  inject(
    'auth',
    new GoTrue({
      APIUrl: 'https://test-phoenix-2.netlify.app/.netlify/identity',
    })
  )
}
