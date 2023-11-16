const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const names = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')

setTimeout(()=>{
  fetchData()
},1000)


async function fetchData(){
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  const data = await response.json()
  console.log(data);

  header.innerHTML = `<img src="${data.drinks[0].strDrinkThumb}" alt="" />`
  title.innerHTML = `${data.drinks[0].strDrink}`
  excerpt.innerHTML = `${data.drinks[0].strInstructions}`

  if(excerpt.innerHTML.length > 100 ){
    excerpt.innerHTML = `${data.drinks[0].strInstructions}`.substring(0,100) + "..."
  }

  const userResponse = await fetch("https://randomuser.me/api/")
  const { results } = await userResponse.json() 
  console.log(results[0].name.first);

  profile_img.innerHTML = `<img src="${`${results[0].picture.medium}`}" alt="" >`
  names.innerHTML = `${results[0].name.first}`
  date.innerHTML = `${results[0].location.city + ", " + results[0].location.country} `

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bgs_text.forEach(bg => bg.classList.remove('animated-bgs-text'))
}
