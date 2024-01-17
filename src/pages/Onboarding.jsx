import React from 'react'
import { useState } from 'react'
import Nav from "../components/Nav";
const OnBoarding = () => {
  function hendleSumbit() {
    console.log("submitted")
  }
  function hendleChange() {
    console.log("change")
  }
  return (
    <>
      <Nav
        minimal={true}
        setShowModel={() => { }}
        showModel={false}
      />
      <div className='onboarding'>
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={hendleSumbit}>
          <section>
            <label htmlFor='first_name'>First Name</label>
            <input
              id="first_name"
              type='text'
              name='first_name'
              placeholder='first name'
              required={true}
              value=""
              onChange={hendleChange}
            />
            <label>Birthday</label>
            <div className='multiple-input-container'>
              <input
                id="dob_day"
                type='number'
                name='dob_day'
                placeholder='DD'
                required={true}
                value=""
                onChange={hendleChange}
              />

              <input
                id="dob_month"
                type='number'
                name='dob_month'
                placeholder='MM'
                required={true}
                value=""
                onChange={hendleChange}
              />
              <input
                id="dob_year"
                type='number'
                name='dob_year'
                placeholder='YYYY'
                required={true}
                value=""
                onChange={hendleChange}
              />
            </div>


            <label>Gender</label>
            <div className='multiple-input-container'>
              <input
                id="man-gender-identity"
                type='radio'
                name='gender_identity'
                value="man"
                onChange={hendleChange}
                checked={false}
              />
              <label htmlFor='man-gender-identity'>Man</label>
              <input
                id="woman-gender-identity"
                type='radio'
                name='gender_identity'
                value="woman"
                onChange={hendleChange}
                checked={false}
              />
              <label htmlFor='woman-gender-identity'>Woman</label>
              <input
                id="more-gender-identity"
                type='radio'
                name='gender_identity'
                value="more"
                onChange={hendleChange}
                checked={false}
              />
              <label htmlFor='more-gender-identity'>More</label>
            </div>


            <label htmlFor='show-gender'>Show gender on my profile</label>
            <input
              id="show-gender"
              type='checkbox'
              name='show-gender'
              onChange={hendleChange}
              checked={false}
            />

            <label>Show My</label>
            <div className='multiple-input-container'>
              <input
                id="man-gender-interest"
                type='radio'
                name='gender_interest'
                value="man"
                onChange={hendleChange}
                checked={false}
              />
              <label htmlFor='man-gender-interest'>Man</label>
              <input
                id="woman-gender-interest"
                type='radio'
                name='gender_interest'
                value="woman"
                onChange={hendleChange}
                checked={false}
              />
              <label htmlFor='woman-gender-interest'>Woman</label>
              <input
                id="everyone-gender-interest"
                type='radio'
                name='gender_interest'
                value="everyone"
                onChange={hendleChange}
                checked={false}
              />
              <label htmlFor='more-gender-interest'>Everyone</label>
            </div>
            <label htmlFor='about'>About me</label>
            <input
              id="about"
              type='text'
              name="about"
              required={true}
              placeholder='I like long walks..'
              value={""}
              onChange={hendleChange}
            />
          </section>
          <input type='submit' />
          <section>
            <label htmlFor='about'>Profile Profile</label>
            <input
              type='url'
              name='url'
              id="url"
              onChange={hendleChange}
              required={true}
            />
            <div className='photo-container'>

            </div>
          </section>
        </form>
      </div>
    </>
  )
}


export default OnBoarding