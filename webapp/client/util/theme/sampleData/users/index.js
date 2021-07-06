import faker from 'faker'

const totalRows = 40
const users = []
const arrAvatarsMale = []
const arrAvatarsFemale = []

let currentIdxMale = 0
let currentIdxFemale = 0

for (let i = 0; i < totalRows; i++) {
  const gender = i % 2 === 0 ? 'male' : 'female'
  let currentImg = null

  // Has image
  if (i % 3 === 0) {
    if (gender === 'male') {
      currentImg = arrAvatarsMale[currentIdxMale]
      currentIdxMale++
    } else {
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

export {
  users
}
