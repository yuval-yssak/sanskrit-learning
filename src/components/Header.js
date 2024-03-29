import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const HeaderBanner = styled.div`
  background-color: #8cd9e3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  row-gap: 1rem;
`

const Banner = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & img:first-child {
    height: 75px;
    margin-top: 6px;
  }
`

const Links = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Header = () => {
  const location = useLocation()
  const selectedPage = location.pathname.slice(1)

  function classNameForSelectedPage(aPage) {
    return selectedPage === aPage ? 'number-orange' : 'number-green'
  }

  return (
    <>
      <HeaderBanner>
        <Banner>
          <img
            // style={{ verticalAlign: 'middle', margin: '0 20px', width: '140px' }}
            src="/images/SAYR-logo-2.webp"
            alt="logo"
          />
          <img
            // style={{ verticalAlign: 'middle' }}
            src="../../images/title.PNG"
            alt="Sanskrit Program Title"
          />
        </Banner>
        <Links>
          <Link
            to="/learn-letters"
            id="step-1"
            className={classNameForSelectedPage('learn-letters')}
            style={{ backgroundPosition: '24px 0px' }}
          >
            <p>Learn Letters</p>
          </Link>
          <Link
            to="read-simple-syllables"
            id="step-2"
            className={classNameForSelectedPage('read-simple-syllables')}
            style={{ backgroundPosition: '-79px 0' }}
          >
            <p>Read Simple Syllables</p>
          </Link>
          <Link
            to="learn-contracted-vowels"
            id="step-3"
            className={classNameForSelectedPage('learn-contracted-vowels')}
            style={{ backgroundPosition: '-182px 0' }}
          >
            <p>Lean Contracted Vowels</p>
          </Link>
          <Link
            to="read-contracted-vowels"
            id="step-4"
            className={classNameForSelectedPage('read-contracted-vowels')}
            style={{ backgroundPosition: '-285px 0' }}
          >
            <p>Read Contracted Vowels</p>
          </Link>
          <Link
            to="learn-conjuncts"
            id="step-5"
            className={classNameForSelectedPage('learn-conjuncts')}
            style={{ backgroundPosition: '-388px 0' }}
          >
            <p>Learn Conjuncts</p>
          </Link>
          <Link
            to="read-all-words"
            id="step-6"
            className={classNameForSelectedPage('read-all-words')}
            style={{ backgroundPosition: '-492px 0' }}
          >
            <p>Read Words with Conjuncts</p>
          </Link>
          <Link
            to="write-your-own"
            id="step-7"
            className={classNameForSelectedPage('write-your-own')}
            style={{ backgroundPosition: '-595px 0' }}
          >
            <p>Write Your Own Words</p>
          </Link>
        </Links>
      </HeaderBanner>
    </>
  )
}

export default Header
