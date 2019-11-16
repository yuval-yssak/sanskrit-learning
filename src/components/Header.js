import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Header = ({ location }) => {
  const selectedPage = location.pathname.slice(1)

  return (
    <>
      <div id='header-banner'>
        <img
          style={{ verticalAlign: 'middle', margin: '0 20px', width: '140px' }}
          src='../../images/logo.PNG'
          alt='logo'
        />
        <img
          style={{ verticalAlign: 'middle' }}
          src='../../images/title.PNG'
          alt='Sanskrit Program Title'
        />
        <Link
          to='/learn-letters'
          id='step-1'
          className={
            selectedPage === 'learn-letters' ? 'number-orange' : 'number-green'
          }
          style={{ backgroundPosition: '24px 0px' }}
        >
          <p>Learn Letters</p>
        </Link>
        <Link
          to='read-simple-syllables'
          id='step-2'
          className={
            selectedPage === 'read-simple-syllables'
              ? 'number-orange'
              : 'number-green'
          }
          style={{ backgroundPosition: '-79px 0' }}
        >
          <p>Read Simple Syllables</p>
        </Link>
        <Link
          to='learn-contracted-vowels'
          id='step-3'
          className={
            selectedPage === 'learn-contracted-vowels'
              ? 'number-orange'
              : 'number-green'
          }
          style={{ backgroundPosition: '-182px 0' }}
        >
          <p>Lean Contracted Vowels</p>
        </Link>
        <Link
          to='read-simple-words'
          id='step-4'
          className={
            selectedPage === 'read-simple-words'
              ? 'number-orange'
              : 'number-green'
          }
          style={{ backgroundPosition: '-285px 0' }}
        >
          <p>Read Simple Words</p>
        </Link>
        <Link
          to='learn-conjuncts'
          id='step-5'
          className={
            selectedPage === 'learn-conjuncts'
              ? 'number-orange'
              : 'number-green'
          }
          style={{ backgroundPosition: '-388px 0' }}
        >
          <p>Learn Conjuncts</p>
        </Link>
        <Link
          to='read-all-words'
          id='step-6'
          className={
            selectedPage === 'read-all-words' ? 'number-orange' : 'number-green'
          }
          style={{ backgroundPosition: '-492px 0' }}
        >
          <p>Read Words with Conjuncts</p>
        </Link>
        <Link
          to='write-your-own'
          id='step-7'
          className={
            selectedPage === 'write-your-own' ? 'number-orange' : 'number-green'
          }
          style={{ backgroundPosition: '-595px 0' }}
        >
          <p>Write Your Own Words</p>
        </Link>
      </div>
    </>
  )
}

export default withRouter(Header)
