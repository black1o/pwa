const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "coffee1.jpg" },
  { name: "Voluptatem", image: "coffee2.jpg" },
  { name: "Explicabo", image: "coffee3.jpg" },
  { name: "Rchitecto", image: "coffee4.jpg" },
  { name: " Beatae", image: "coffee5.jpg" },
  { name: " Vitae", image: "coffee6.jpg" },
  { name: "Inventore", image: "coffee7.jpg" },
  { name: "Veritatis", image: "coffee8.jpg" },
  { name: "Accusantium", image: "coffee9.jpg" },
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}