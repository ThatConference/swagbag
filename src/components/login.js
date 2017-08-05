import React from 'react'
import Header from './header'
import firebase from 'firebase'
import base from '../base'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.renderLogin = this.renderLogin.bind(this)
    this.authenticateWithGithub = this.authenticateWithGithub.bind(this)
    this.state = {
      redirectToReferrer: false
    }
  }

  authenticateWithGithub () {
    console.log(`Trying to log in with github`)

    let provider = new firebase.auth.GithubAuthProvider()
    provider.addScope('repo')
    firebase.auth().signInWithPopup(provider).then((result) => {
      console.log(`uid returned: ${result.user.uid}`)

      base.fetch(`users`, {context: this, asArray: true})
        .then((data) => {
          console.log('users', data)
          var usersFound = data.filter((user) => {
            if (user.userId === result.user.uid) return user
          })

          if (usersFound.length === 0) {
            base.push(`users`, {
              data: {
                userId: result.user.uid,
                allowed: false
              }
            }).then(newLocation => {
              console.log('User Added...')
            }).catch(err => {
              console.log(err)
            })
          }

          if (usersFound.length === 1) {
            if (usersFound[0].allowed) {
              console.log('found user.')
              this.setState({redirectToReferrer: true})
              // this.state.redirectToReferrer = true
            } else {
              console.log(' user is NOT allowed ')
              // context.state.redirectToReferrer = false
            }
          }
        }).catch((error) => {
          console.log(error)
        })
    }).catch((error) => {
      console.log(error)
    })
  }

  renderLogin () {
    return (
      <div>
        <Header />
        <button className='btn btn-lg' onClick={() => this.authenticateWithGithub()}>Login with Github</button>
      </div>
    )
  }

  render () {
    const { from } = { from: { pathname: '/swagbag' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      console.log(`redirect to referrer ${redirectToReferrer}`)
      return (
        <Redirect to={from} />
      )
    } else {
      console.log(`redirect to referrer was ${redirectToReferrer}`)
      return <div>{this.renderLogin()}</div>
    }
  }
}

export default Login
