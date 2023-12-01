var l = console.log

const preview = document.querySelector('.preview');
const partyAnimalsPreview = document.querySelector('.partyAnimalsPreview');
var logo = document.querySelector('.logo');

var navBar = document.querySelector('nav');
const venue = document.querySelector('.venue');
const container = document.querySelector('.container');
const playMusic = document.querySelector('.playSign');
const playToolKit = document.querySelector('.playMusicToolKit');

var pictures = '';
const trackBox = document.querySelector('.box');
const royalPicsSection = document.querySelector('.royalPics');

const king = document.querySelector('.king');

const queen = document.querySelector('.queen');
const president = document.querySelector('.president');
const firstLady = document.querySelector('.firstLady');
const CEO = document.querySelector('.CEO');
const chief = document.querySelector('.chief');

const turnTable = document.querySelector('.turnTable')
const landing = document.querySelector('.landing')

var partyAnimals = document.querySelector('.partyAnimals');
let searchBar = document.querySelector('.searchBar')
const foot = document.querySelector('.footer')
const searchBtn = document.querySelector('.searchIcon')

const suggestion = document.querySelector('.suggestion');
const r = document.querySelector('.r');


const partyAnimalsBack = document.querySelector('.partyAnimalsBack');

const partyAnimalsNames = []
const royalPics = [
  [
   'https://i.postimg.cc/W3Jnkxz4/NSL6349.jpg'
  ], [
    "https://i.postimg.cc/W3Jnkxz4/NSL6349.jpg"
  ]
  , ['https://i.postimg.cc/wjdH1sxK/IM-6354.jpg'], 
  ['https://i.postimg.cc/T3fmxzgF/IMG-20230602-WA0060.jpg'], ['https://i.postimg.cc/8z4vzZb5/IMG-20230602-WA0063.jpg'], ['']
]
//fetch pictures 
fetch('pics.json')
  .then(res => {
    return res.json()
  })
  .then((data) => {

    var pictures = data

    pictures.forEach(p => {
      partyAnimalsNames.push(p[0])
    })

    const tracks = [
"Pop-Smoke-Get-Back-(HipHopKit.com).mp3", "Pop Smoke ft. Quavo - Aim For The Moon (Official MusiimageIndexVideo) ft. Quavo (320 kbps).mp3", "Lil Baby x Gunna - Drip Too Hard (Official Audio).mp3", "Ellie_Goulding_Burn.mp3", "Faded-DRILL-REMIX-Faded-DRILL-REMIX.mp3"
]
    const inp = document.querySelector('.inputSearch')
    var fhtml = `<i class='material-icons'>menu</i>
<div class='floatingTabs'>
            <button class="toggleTheme"></button>
            `;
    const menuBtn = document.querySelector('.menu');
    const horizontalMenu = document.querySelector('.horizontalMenu');

    const floatingMenu = document.createElement('div');
    floatingMenu.classList.add('floatingMenuBtn');

    floatingMenu.innerHTML = fhtml
    container.append(floatingMenu)
    const floatingMenuBtn = document.querySelector('.floatingMenuBtn');
    const floatingTabs = document.querySelector(' .floatingTabs');
    const tabs = document.querySelector('.tabs');

    //creating profile images container for partyAnimals

    class partyAnimal {
      constructor(main, nameClass) {
        this.profilePictue = main
        this.class = nameClass
      }
      create() {
        //create image container 
        const card = document.createElement('div');
        card.classList.add('partyAnimalsProfilePic');
        card.classList.add(`${this.class}`);

        const enlarge = document.createElement('div');
        enlarge.classList.add('enlarge');
        enlarge.innerHTML = `<i class='material-icons'> open_in_full</i>`
        const moreSector = document.createElement('div');
        moreSector.classList.add('more');
        moreSector.innerHTML = `<i class='material-icons'>more_vert</i>`

        card.appendChild(moreSector);
        card.appendChild(enlarge);
        partyAnimals.append(card)
        card.classList.add(this.profilePictue);
        //lazy load images
        new IntersectionObserver(entries => {
          if (entries[0].isIntersecting == true) {

            card.style.backgroundImage = `url('${card.classList[2]}')  `;


          } else {
            ''
          }
        }, {
          rootMargin: '200px'
        }).observe(card)


      }
    }
    pictures.forEach((e) => {
      let doit = new partyAnimal(e[1], e[0]);
      doit.create()

    })

    const partyAnimalsPics = document.querySelectorAll('.partyAnimalsProfilePic');

    inp.addEventListener('focus', () => {
    
      suggestion.style.display = 'flex';
    });
    searchBtn.addEventListener('click', () => {
      if (
        suggestion.style.display != 'flex') {
        
        suggestion.style.display = 'flex'
      }
    });
    //hide suggestion box
    window.addEventListener('click', (e) => {

      if (!e.target.classList.contains('suggestionTab') && !e.target.classList.contains('input') && !e.target.classList.contains('suggestion') &&
        !e.target.classList.contains('searchIcon')) {
        suggestion.style.display = 'none';
      }
    });
    //search partyAnimal
    inp.addEventListener('keypress', findAnimal);
    searchBar.addEventListener('click', findAnimal);

    //searchBtn.addEventListener('click',findAnimal);
    function findAnimal() {

      //clean suggestion box
      suggestion.innerHTML = ''

      //input value 
      const inputValueArray = inp.value.toLowerCase().trim('').split('')



      partyAnimalsNames.forEach(eachPartyAnimalName => {
        //log(eachPartyAnimalName)


        let name = eachPartyAnimalName.toLowerCase().split('')

        //log(name)

        //check for matches
        function check(array1, array2) {

          const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));
          var bol = isSubset(name, inputValueArray)

          if (bol == true) {
            //if match found
            show()

            function show() {
              let v = inp.value
              if (inputValueArray != '') {
                var p = document.createElement('p');
                p.classList.add('suggestionTab')

                p.innerText = eachPartyAnimalName;


                suggestion.appendChild(p)

              }
              else {
                suggestion.style.color = 'blue'
                suggestion.innerText = 'no_shit_found'

              }

            }
          }
          //if match not found
          else {

          }
          //getting animals
          var suggestionTab = document.querySelectorAll('.suggestionTab')
          //display searched animal 

          suggestionTab.forEach((e) => {

            e.addEventListener('click', (n) => {
              const nam = n.target.innerText.toLowerCase().split('')
              partyAnimalsPics.forEach((a) => {
                const test = a.classList[1].toLocaleLowerCase().split('')

                function runCheck(array1, array2) {

                  const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));
                  var bol = isSubset(test, nam)

                  if (bol == false) {
                    //if match found

                    hide()

                    function hide() {
                      a.style.display = 'none'
                      r.style.display = 'flex';

                    }
                  }
                  //if match not found
                  else {}

                };
                runCheck(test, nam)
                //reload partyAnimals
                reloadPartyAnimals(a)
              })

              suggestion.style.display = 'none '
            })

          })

        };
        check(name, inputValueArray)
      })

    }

    function reloadPartyAnimals(a) {
      inp.addEventListener('focus', () => {
        a.style.display = 'flex'

      })
      r.addEventListener('click', () => {
        a.style.display = 'flex'
        r.style.display = 'none'
      })
    }
    //add more images to eachPartyAnimal
    partyAnimalsPics.forEach((eachPartyAnimal, currentPartyAnimalIndex, arr) => {
      eachPartyAnimal.addEventListener('click', (e) => {
        //add profileBar dp

        let dp = document.querySelector('.dp');

        dp.style.backgroundImage = `url(${pictures[currentPartyAnimalIndex][1]})`
        //add profileBar name
        let profileName = document.querySelector('.profileBarName')
        profileName.innerText = pictures[currentPartyAnimalIndex][0]
        //add the other  images to preview 
        if (e.target.classList == 'more') {
          pictures[currentPartyAnimalIndex][2].forEach((e) => {

            const partyAnimalsPreviewCard = document.createElement('div')
            partyAnimalsPreviewCard.classList.add('partyAnimalsOtherPic')

            partyAnimalsPreviewCard.style.background = `url(${e}) center no-repeat`
            partyAnimalsPreviewCard.style.backgroundSize = `cover `

            partyAnimalsPreview.append(partyAnimalsPreviewCard)

          })

          //show partyAnimalsPreview
          partyAnimalsPreview.classList.add('partyAnimalsPreviewShow')



          //enlarge partyAnimalsOtherImage
          const partyAnimalsOtherPic = document.querySelectorAll('.partyAnimalsOtherPic')

          partyAnimalsOtherPic.forEach((e) => {

            e.addEventListener('click', (p) => {
              preview.classList.add('previewShow')

              preview.style.backgroundImage = e.style.backgroundImage;


            })

          })

        }
        //enlarging partyAnimalPic
        else if (e.target.classList == 'enlarge') {
          function lo(e) {
            let image = window.getComputedStyle(e.target.parentElement).backgroundImage;
            localStorage.setItem('background', image)

            window.location.assign('pic.html')

            //preview.classList.add('previewShow');

            // preview.style.backgroundImage = image
          }
          lo(e)
        }
      })
    })



    // close partyAnimalsPreview
    partyAnimalsBack.addEventListener('click', () => {
      let partyAnimalsOtherPic = document.querySelectorAll('.partyAnimalsOtherPic')
      partyAnimalsOtherPic.forEach(
        (h) => {
          h.style.display = 'none'
        })
      partyAnimalsPreview.classList.remove('partyAnimalsPreviewShow')

      //add back btn
    })
    //upload royals

    king.style.backgroundImage = `url(${royalPics[1][0]})`;
    queen.style.backgroundImage = `url(${royalPics[0][0]})`
    president.style.backgroundImage = `url(${royalPics[2][0]})`;
    firstLady.style.backgroundImage = `url(${royalPics[3][0]})`
    CEO.style.backgroundImage = `url(${royalPics[4][0]})`;
    chief.style.backgroundImage = `url(${royalPics[5][0]})`


    //preview royals
    const royals = document.querySelectorAll('.royal')
    royals.forEach((e) => {


      e.addEventListener('click', () => {

        let image = window.getComputedStyle(e).backgroundImage;
        preview.classList.add('previewShow');
        preview.style.backgroundImage = image;
      });
    })
    //hide preview for royals
    preview.addEventListener('click', () => {
      preview.classList.remove('previewShow');
      setTimeout(() => {
        preview.style.backgroundImage = 'none';
      }, 100)
    })

    //click to show menu
    menuBtn.addEventListener('click', () => {

      tabs.style.display != 'flex' ?
        tabs.style.display = 'flex' :
        tabs.style.display = 'none';

    })
    //click to show floatingMenu

    floatingMenuBtn.addEventListener('click', () => {
      floatingTabs.style.display = 'flex';
    });

    document.querySelector('.list').addEventListener('click', () => {
      partyAnimals.classList.toggle('large');
      partyAnimalsPics.forEach((e) => {

        e.classList.toggle('picLarge')
      })

    })
    //creating  tabs in the menu
    var tabss = [['executives', ['wamutu ali', 'ocen sammie']], ['royals', ['queen => her', 'king => jacob elah', 'president => jotham', 'firstLady => harriet', 'CEO =>', 'chief => elungat david']], ['treasurer', ['omara joseph']], ['creator', ['mun enock']]];
    tabss.forEach((e) => {

      const option = document.createElement('h1');
      option.classList.add(`option`);
      option.classList.add(e[0]);

      option.textContent = e[0];

      const dropDown = document.createElement('div');
      dropDown.classList.add('dropDown');


      e[1].forEach((e) => {
        const name = document.createElement('strong')
        name.innerText = e;
        dropDown.append(name);

      })
      option.append(dropDown);
      tabs.append(option);
    });
    horizontalMenu.innerHTML = tabs.innerHTML;
    floatingTabs.innerHTML = tabs.innerHTML;
    //l(tabs.children)
    const tabsBtns = document.querySelectorAll('.option');
    const dropDowns = document.querySelectorAll('.dropDown');
    tabsBtns.forEach((e) => {
      e.addEventListener('click', () => {
        dropDowns.forEach((e) => {
          e.style.display = 'none';
        })
        let w = e.children
        w[0].style.display = 'grid';

        setTimeout(function() {
          e.children[0].style.opacity = 1;

        }, 10);

      })
    })
    //end of creating  tabs
    //scroll to hide menus and dropDowns.
    container.addEventListener('scroll', hidex)
    royalPicsSection.addEventListener('scroll', hidex)

    partyAnimals.addEventListener('scroll', hidex)

    function hidex() {


      tabs.style.display = 'none';
      floatingTabs.style.display = 'none';
      dropDowns.forEach((e) => {
        e.style.display = 'none'
      })
    }

    //toggling the theme
    const themeBtn = document.querySelectorAll('.toggleTheme');
    themeBtn.forEach((e) => {
      e.addEventListener('click', () => {
        document.body.classList.toggle('darkTheme');
        const currentTheme = document.body.classList
        setTimeout(() => {

          localStorage.setItem('theme', currentTheme)
        }, 100)

      })
    })
    window.addEventListener('load', () => {
      if (localStorage.getItem('theme') == 'darkTheme') {
        document.body.classList.toggle('darkTheme');

      }
    })



    //listening to intersection of navBar
    {
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting == true) {
            floatingMenuBtn.style.display = 'none';

          }
          else {
            floatingMenuBtn.style.display = 'flex';

          }
        })
      }).observe(navBar);
    }



    logo.style.backgroundImage = 'url(https://i.postimg.cc/nr89JfdR/be8e0937-d2f0-451c-9467-c9246936b4c7.png)'
    //hide playMusic toolkit
    setTimeout(() => {
      playToolKit.style.display = 'none'
    }, 5000)

    playMusic.addEventListener('click', (e) => {

      trackBox.classList.toggle('showMusic')
      turnTable.classList.toggle('visibility')

    })
    tracks.forEach((t, i, arr) => {
      let track = document.createElement('div');
      track.innerText = `Track ${i}`;
      track.classList.add('track')
      trackBox.append(track)
    })
    const tracksBtns = document.querySelectorAll('.track')

    tracksBtns.forEach((track, currentTrack, ar) => {
      track.addEventListener('click', () => {
        turnTable.setAttribute('src', tracks[currentTrack].trim())
        turnTable.play();


      })
    })

  })


//back up on partyAnimals 
let fo = document.querySelector('.backUp')

new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      fo.style.display = 'flex'
    }
    else {
      fo.style.display = 'none'

    }
  })
}).observe(searchBar)
// observing footer
let backHome = document.querySelector('.backHome')

new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      backHome.style.display = 'flex'
    }
    else {
      backHome.style.display = 'none'

    }
  })
}).observe(foot)
fo.addEventListener('click', () => {
  searchBar.scrollIntoView(true)

})
backHome.addEventListener('click', () => {
  landing.scrollIntoView({
    behavior: "smooth"
  })

})



//fetch  videos
const videos = [];
fetch('videos.json')
  .then(res => {
    return res.json()
  })
  .then((data) => {

    var videos = data
  })


//sliding in images at venue
const toggle = document.querySelector('.toggle');
const images = document.querySelector('.images');
const manyCards = document.querySelector('.manyCards');
const oneCard = document.querySelector('.oneCard');
const frame = document.querySelector('.frame');
const imageBtns = document.querySelectorAll('.nb');
const slideShowImages = document.querySelector('.slideShowImages');

toggle.addEventListener('click', () => {
  new IntersectionObserver(entries => {
    if (entries[0].intersectionRatio !== 0) {
      manyCards.scrollIntoView({
        behavior: 'smooth'

      })

    }
    else {
      oneCard.scrollIntoView({
        behavior: 'smooth'
      })


    }
  }).observe(oneCard)
})

var venueImages = ['/Try/20230323_180346.jpg', '/Try/IMG_20200101_183710_561.jpg', '/Try/65302e0565b84d92bdcbeb9dee0812a7.jpg'];
venueImages.forEach((e) => {
  let card = document.createElement('div');
  card.classList.add('venuePic');
  card.innerText = e;
  manyCards.append(card);
  //lazy load images
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting == true) {
      card.style.backgroundImage = `url('${card.innerText}')`;

    } else {
      ''
    }
  }, {
    rootMargin: '200px'
  }).observe(card)

})
let allManyCards = document.querySelectorAll('.venuePic');
allManyCards.forEach((e) => {
  e.addEventListener('click', () => {
    let image = window.getComputedStyle(e).backgroundImage;
    localStorage.setItem('background', image)

    window.location.assign('pic.html')

    //preview.classList.add('previewShow');

    // preview.style.backgroundImage = image
  })
})
let imageIndex = 0
//frame in venue 
frame.style.backgroundImage = `url(${venueImages[imageIndex]})`;

// image changing btns
let currentImage
let slideInterval
let lag
imageBtns.forEach((e) => {

  e.addEventListener('click', (n) => {
    let tar = e.classList[0];
    if (tar == 'shuffleImages') {
      function shuffle() {
        var copy = [],
          n = venueImages.length,
          i;

        // While there remain elements to shuffle…
        while (n) {

          // Pick a remaining element…
          i = Math.floor(Math.random() * venueImages.length);

          // If not already shuffled, move it to the new array.
          if (i in venueImages) {
            copy.push(venueImages[i]);
            delete venueImages[i];
            n--;
          }
        }
        // take new array
        venueImages = copy

      }
      shuffle()

    }
    if (tar == 'nextImage') {
      if (slideShowImages.classList.contains('slide')) {
        slideShowImages.classList.remove('slide');

        clear();
      }

      imageIndex = (imageIndex != venueImages.length - 1) ? imageIndex + 1 : 0;

      currentImage = `url(${venueImages[imageIndex]})`;
      frame.style.backgroundImage = currentImage

    }

    if (tar == 'previousImage') {
      if (slideShowImages.classList.contains('slide')) {
        slideShowImages.classList.remove('slide');

        clear();
      }

      imageIndex = (imageIndex != 0) ? imageIndex - 1 : venueImages.length - 1;
      currentImage = `url(${venueImages[imageIndex]})`;
      frame.style.backgroundImage = currentImage
    }
    if (tar == 'slideShowImages') {
      //display slider
      document.querySelector('.speedSelector').classList.toggle('showSpeed')

      if (!e.classList.contains('slide')) {
        lag = 1000
        document.querySelector('#speed').addEventListener('input', (e) => {
          document.querySelector('#tag').textContent = e.target.value
          //clear inteval b4 changing slide speed      
          clear()

          lag = e.target.value * 1000;
          //slide now
          slideInterval = setInterval(function() {
            imageIndex = (imageIndex != venueImages.length - 1) ? imageIndex + 1 : 0;

            currentImage = `url(${venueImages[imageIndex]})`;
            frame.style.backgroundImage = currentImage;
          }, lag)
        })
        //slide with normal speed 
        slideInterval = setInterval(function() {
          imageIndex = (imageIndex != venueImages.length - 1) ? imageIndex + 1 : 0;

          currentImage = `url(${venueImages[imageIndex]})`;
          frame.style.backgroundImage = currentImage;
        }, lag)
      }
      //clearInterval of slideShow
      else {
        clear()
      }
      // toggle slide class on slideShow btn
      e.classList.toggle('slide');
    }
  })

  function clear() {
    clearInterval(slideInterval)
  }
})


//hide and show arrows
royalPicsSection.addEventListener('scroll', (e) => {
  setTimeout(() => {
    document.querySelector('.arrows').style.display = 'flex'
  }, 2000)
}, {
  once: 'true'
})
var ob = new IntersectionObserver(
  entries => {
    entries[0].isIntersecting ? document.querySelector('.arrows').style.display = 'none' :
      document.querySelector('.arrows').style.display = 'none'
  }
)
ob.observe(foot)

document.querySelector('.arrows').addEventListener('click', () => {
  foot.scrollIntoView({
    behavior: 'smooth'
  })
})