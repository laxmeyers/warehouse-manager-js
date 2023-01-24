// packages array
const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
  },
  {
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
  },
  {
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
  }]

  function drawPackages(array){
    let page = document.getElementById("list")

    page.innerHTML = array
  }
  
  function sortAllPackages(){
    let all = ''

    packages.forEach(package => {
        all += `<div class="col-2 text-success text-center p-3 border border-light"><h1>TO:</h1></div><div class="col-5 text-success text-end p-3"><h1>${package.to}</h1></div> <div class="col-3 text-success text-end p-3"><h1>ID:</h1></div><div class="col-2 text-success text-end p-3"><h1>${package.trackingNumber}</h1></div></div>`
    })

    drawPackages(all)
  }

  function sortHeavyPackages(){
    let heavey = ''
    packages.forEach(package => {
        if(package.weight > 3){
            heavey += `<div class="col-2 text-success text-end"><h1>TO:</h1></div><div class="col-5 text-success text-end"><h1>${package.to}</h1></div> <div class="col-2 offset-1 text-success text-end"><h1>ID:</h1></div><div class="col-2 text-success text-end"><h1>${package.trackingNumber}</h1></div></div>`
        }
    })

    drawPackages(heavey)
  }