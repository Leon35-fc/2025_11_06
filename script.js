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
            console.log(listOfImages.photos[0].src.small)

            let img = document.querySelectorAll('img')
            console.log(img[0].currentSrc)

            const searchHamster = function (click){
            for(let i = 0; i < listOfImages.photos.length; i++){
            img[i].setAttribute('src', listOfImages.photos[i].src.small)
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
    console.log(buttons[0].lastElementChild)
    buttons[0].lastElementChild.setAttribute('innerText', "Hide")

        console.log(buttons[0].lastElementChild.innerText)
}


editButtons()