import React from 'react'

import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children } = this.props

    return (
      <>
        <Helmet>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-44489810-6"></script>
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-44489810-6');
        `}</script>
        </Helmet>
        <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
          <div id="wrapper">
            <Header onToggleMenu={this.handleToggleMenu}/>
            {children}
            <Footer/>
          </div>
          <Menu onToggleMenu={this.handleToggleMenu}/>
        </div>
      </>
    )
  }
}

export default Layout
