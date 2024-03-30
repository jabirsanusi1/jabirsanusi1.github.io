// Sample car data
const cars = [
    { name: 'Car 1', image: 'car1.jpg', price: '$50/day' },
    { name: 'Car 2', image: 'car2.jpg', price: '$60/day' },
    { name: 'Car 3', image: 'car3.jpg', price: '$55/day' },
    // Add more car objects as needed
  ];
  
  // Function to display cars
  function displayCars() {
    const carList = document.getElementById('carList');
  
    cars.forEach(car => {
      const carDiv = document.createElement('div');
      carDiv.classList.add('car');
  
      const carImg = document.createElement('img');
      carImg.src = car.image;
      carImg.alt = car.name;
  
      const carName = document.createElement('h3');
      carName.textContent = car.name;
  
      const carPrice = document.createElement('p');
      carPrice.textContent = `Price: ${car.price}`;
  
      carDiv.appendChild(carImg);
      carDiv.appendChild(carName);
      carDiv.appendChild(carPrice);
  
      carList.appendChild(carDiv);
    });
  }
  
  // Event listener for "View Cars" button
  document.getElementById('viewCarsBtn').addEventListener('click', function() {
    const carOptions = document.getElementById('carOptions');
    carOptions.classList.toggle('hidden');
  
    if (!carOptions.classList.contains('hidden')) {
      displayCars();
    } else {
      const carList = document.getElementById('carList');
      carList.innerHTML = ''; // Clear the car list if hidden
    }
  });
  