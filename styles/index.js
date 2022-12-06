


 
const toggleBtn = document.querySelector('#toggle-btn')
const menuItems = document.querySelectorAll('.menu a')
let isMenuActive = false

console.log(menuItems);



toggleBtn.addEventListener('click', () => {
    
    if (!isMenuActive) {
        console.log("منو باز شد");
     
      

      
          
                menuItems[0].style.transform = 'translate(40px, -50px)'
        menuItems[1].style.transform = 'translate(70px, 0px)'
        menuItems[2].style.transform = 'translate(40px, 55px)'
        
        
    
        


      toggleBtn.classList.add('active')
      toggleBtn.classList.remove('notactive')
        isMenuActive = true
    } else {


        console.log("منو بسته شد");
        
        toggleBtn.classList.remove('active')
        toggleBtn.classList.add('notactive')
        
        isMenuActive = false
        
        menuItems.forEach(menuItem =>{
           menuItem.style.transform = 'translate(0, 0)' 
           
       
        } )
        
    }


  

})





var options = {
    type: 'doughnut',
    data: {
    
      datasets: [{
        label: '# of Votes',
        data: [2, 2, 2,1,10 ],
        backgroundColor: ["green", "#17b817", "greenyellow","#f5dc00","#fff"]
      }]
    },
    options: {
      rotation: 270, // start angle in degrees
      circumference: 180, // sweep angle in degrees
    }
  }
  
  var ctx = document.getElementById('chartJSContainer').getContext('2d');
  new Chart(ctx, options);





  


var config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'APAC RE Index',
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false,
            data: [
                14,
                16,
                15,
                16,
                17,
                16,
                19
                /*randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()*/
            ],
        }, {
            label: 'APAC PME',
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false,
            data: [
                17,
                16,
                15,
                16,
                17,
                17,
                19
            ],
    
        }]
    },
    options: {
     
        title: {
            display: true,
            text: 'Chart.js Line Chart - Logarithmic'
        },
        scales: {
            xAxes: [{
                min: 30,
                max: 350,
                display: true,
      scaleLabel: {
        display: true,
        labelString: 'Date'
      },
        
            }],
            yAxes: [{
                min: 30,
                max: 350,
                display: true,
                //type: 'logarithmic',
      scaleLabel: {
                        display: true,
                        labelString: 'Index Returns'
                    },
                    min: 30,
                    max: 350,
            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
    console.log(ctx);
};

document.getElementById('randomizeData').addEventListener('click', function() {
    config.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });

    });

    window.myLine.update();
});


const loaderElem = document.querySelector('.loader')

window.addEventListener('load', function () {
   

    loaderElem.style.display='none'

 

})