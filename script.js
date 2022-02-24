//Credits: https://www.codegrepper.com/code-examples/javascript/how+to+reload+page+on+button+click+in+javascript

const $images = document.getElementById('pics')
const gallery = document.getElementById('gallery')
const $images2 = document.getElementById('images2')

let html = []

for (let i = 1; i < 14; i++) {

    html.push(`
        
        <div class="image" id="image${i}">
             <div class="photo">
                <img src="images/image${i}.jpg">           
            </div>
            <div id="mouseover">Copyright Pexels.com</div>
          
        </div>
    `)
}

$images.innerHTML = html.join('')

const $gallery = document.querySelectorAll('.image')

for (let pic of $gallery) {
    
    pic.children[0].addEventListener('click', function (e) {

        $images.innerHTML = pic.children[0].innerHTML + `<div class="text" >Here comes some information about this photo like the Copyright Pexels.com<br> 
            <div id="text">
            <button class="reload" ><i class="fas fa-times"></i></button>
            </div> 
            Close</div>
            `
            
        const reloadButton = document.getElementById('text')


        function reload() {

            reload = location.reload()

        }

        reloadButton.addEventListener('click', reload, false)
    })

    pic.children[0].addEventListener('mouseover', function (e) {
        pic.children[0].style = 'border: 2px solid white; '
    })

    pic.children[0].addEventListener('mouseout', function (e) {
        pic.children[0].style = 'border: none; '
    })

    


}