const ApiKEY='1QioCg90admsw07MZHOHdTcaOAwXCLdTfrstJhXYE2ELNj2Q25XE2EpF'
// const ENDPOINT='https://api.pexels.com/v1/search?query=hamsters'

const getHamsters = function (animal) {
    fetch(animal, {
        method: 'GET',
        headers: {
            'Authorization':ApiKEY,
            'Content-Type': 'application/json'}
    }
)
        .then((res) => {
            if(res.ok){
                return res.json()
                console.log(res.json(), )

        } else {
            throw new Error(`${res.status}`)
            }
        }
    )
        .then((listOfImages) => {
            console.log('Image', listOfImages)
            console.log(listOfImages.photos[0])

            let img = document.querySelectorAll('img')
            let small = document.querySelectorAll('small')
            console.log(img[0].currentSrc)
            console.log(small[0])

            const searchHamster = function (click){
            for(let i = 0; i < img.length; i++){
            img[i].setAttribute('src', listOfImages.photos[i].src.tiny)
            small[i].innerText = listOfImages.photos[i].id
            }
        }
        searchHamster()
            img.setAttribute()
        })
        .catch((err) => {
            console.log('Hai un problema.', err)
        })
}


const editButtons = function(){
    const buttons = document.querySelectorAll('.btn-group')
    console.log(buttons[0].lastElementChild.textContent)
    for(let i=0; i < buttons.length; i++)
    buttons[i].lastElementChild.innerText = 'Hide'
        // console.log(buttons[i].lastElementChild.innerText)
}

editButtons()