import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import TinderCard from 'react-tinder-card'
import ChatContainer from "../components/ChatContainer"
import axios from 'axios'
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const userId = cookies.UserId


  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user', {
        params: { userId }
      })
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [user])

  console.log("user", user);




  const characters = [







    {
      name: 'Richard Hendricks',
      url: 'https://i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Monica Hall',
      url: 'https://i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Jared Dunn',
      url: 'https://i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://i.imgur.com/oPj4A8u.jpg'
    }
  ]

  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }



  return (
    <div className='dashboard'>
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) =>
            <TinderCard
              className='swipe'
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
              <div style={{ backgroundImage: 'url(' + character.url + ')' }}
                className='card'
              ><h3>{character.name}</h3>
              </div>
            </TinderCard>


          )}
          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard