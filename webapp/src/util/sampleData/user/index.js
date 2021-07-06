const faker = require('faker')
/*
Generate mock data for demo version
*/
const generateUsers = function (totalRows = 30) {
  const users = []
  const arrAvatarsMale = [
    'https://s3.amazonaws.com/uifaces/faces/twitter/conspirator/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/andresenfredrik/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg'
  ]
  const arrAvatarsFemale = [
    'https://s3.amazonaws.com/uifaces/faces/twitter/nellleo/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/aleinadsays/128.jpg',
    'https://s3.amazonaws.com/uifaces/faces/twitter/eugeneeweb/128.jpg'
  ]

  let currentIdxMale = 0
  let currentIdxFemale = 0

  for (let i = 0; i < totalRows; i++) {
    const gender = i % 2 === 0 ? 'male' : 'female'
    let currentImg = null

    // Has image
    if (i % 3 !== 0) {
      if (gender === 'male') {
        if (!arrAvatarsMale[currentIdxMale]) currentIdxMale = 0
        currentImg = arrAvatarsMale[currentIdxMale]
        currentIdxMale++
      } else {
        if (!arrAvatarsFemale[currentIdxFemale]) currentIdxFemale = 0
        currentImg = arrAvatarsFemale[currentIdxFemale]
        currentIdxFemale++
      }
    }
    const user = {
      firstName: faker.name.firstName(gender),
      lastName: faker.name.lastName(gender),
      img: currentImg
    }

    users.push(user)
  }
  return users
}

const getRandomUserList = function (maxUsers = 4) {
  const generatedUsers = generateUsers(30)
  const totalUsers = Math.floor(Math.random() * maxUsers) + 1
  const users = []
  let i = 0
  while (i < totalUsers) {
    const randomIdx = Math.floor(Math.random() * generatedUsers.length)
    users.push(generatedUsers[randomIdx])
    i++
  }
  return users
}

exports.generateUsers = generateUsers
exports.getRandomUserList = getRandomUserList
