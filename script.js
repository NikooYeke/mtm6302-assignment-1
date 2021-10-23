//Data
const $container = document.getElementById('container')

//Code

//Run
// const emojisGallery = `<p><div>&#129409</div><code>129409<code></p> <p><div>&#127790</div><code>127790<code></p> <p><div>&#127789</div><code>127789<code></p> <p><div>&#127791</div><code>127791<code></p> <p><div>&#127792</div><code>127792<code></p> <p><div>&#127793</div><code>127793<code></p> <p><div>&#127794</div><code>127794<code></p> <p><div>&#127795</div><code>127795<code></p> <p><div>&#127796</div><code>127796<code></p> <p><div>&#127797</div><code>127797<code></p> <p><div>&#127798</div><code>127798<code></p> <p><div>&#127799</div><code>127799<code></p> <p><div>&#127800</div><code>127800<code></p> <p><div>&#127801</div><code>127801<code></p> <p><div>&#127802</div><code>127802<code></p> <p><div>&#127803</div><code>127803<code></p> <p><div>&#127804</div><code>127804<code></p> <p><div>&#127805</div><code>127805<code></p> <p><div>&#127806</div><code>127806<code></p> <p><div>&#127807</div><code>127807<code></p> <p><div>&#127808</div><code>127808<code></p> <p><div>&#127809</div><code>127809<code></p> <p><div>&#127810</div><code>127810<code></p> <p><div>&#127811</div><code>127811<code></p> <p><div>&#127812</div><code>127812<code></p> <p><div>&#127813</div><code>127813<code></p> <p><div>&#127814</div><code>127814<code></p> <p><div>&#127815</div><code>127815<code></p> <p><div>&#127816</div><code>127816<code></p> <p><div>&#127817</div><code>127817<code></p> <p><div>&#127818</div><code>127818<code></p> <p><div>&#127819</div><code>127819<code></p> <p><div>&#127820</div><code>127820<code></p>`
const emojisGallery = ['&#127000;<code>127000</code>', '&#127001;<code>127001</code>', '&#127002;<code>127002</code>', '&#127003;<code>127003</code>', '&#127004;<code>127004</code>','&#127005;<code>127005</code>','&#127006;<code>127006</code>','&#127007;<code>127007</code>', '&#127008;<code>127008</code>', '&#127009;<code>127009</code>', '&#127010;<code>127010</code>', '&#127011;<code>127011</code>', '&#127789;<code>127789</code>', '&#127790;<code>127790</code>', '&#127791;<code>127791</code>', '&#127792;<code>127792</code>', '&#127793;<code>127793</code>', '&#127794;<code>127794</code>', '&#127795;<code>127795</code>', '&#127796;<code>127796</code>', '&#127797;<code>127797</code>', '&#127798;<code>127798</code>', '&#127799;<code>127799</code>', '&#127800;<code>127800</code>', '&#127801;<code>127801</code>', '&#127802;<code>127802</code>', '&#127803;<code>127803</code>', '&#127804;<code>127804</code>', '&#127805;<code>127805</code>', '&#127806;<code>127806</code>', '&#127807;<code>127807</code>', '&#127808;<code>127808</code>', '&#127809;<code>127809</code>', '&#127810;<code>127810</code>', '&#127811;<code>127811</code>', '&#127812;<code>127812</code>','&#127813;<code>127813</code>', '&#127814;<code>127814</code>', '&#127815;<code>127815</code>', '&#127816;<code>127816</code>', '&#127817;<code>127817</code>', '&#127818;<code>127818</code>', '&#127819;<code>127819</code>', '&#127820;<code>127820</code>', '&#127821;<code>127821</code>', '&#127822;<code>127822</code>', '&#127823;<code>127823</code>', '&#127824;<code>127824</code>', '&#127825;<code>127825</code>', '&#127826;<code>127826</code>', '&#127827;<code>127827</code>', '&#127883;<code>127883</code>', '&#127829;<code>127829</code>', '&#127830;<code>127830</code>', '&#127831;<code>127831</code>', '&#127832;<code>127832</code>','&#127833;<code>127833</code>', '&#127834;<code>127834</code>', '&#127835;<code>127835</code>', '&#127836;<code>127836</code>', '&#127837;<code>127837</code>', '&#127838;<code>127838</code>', '&#127839;<code>127839</code>', '&#127840;<code>127840</code>', '&#127841;<code>127841</code>', '&#127842;<code>127842</code>', '&#127843;<code>127843</code>', '&#127844;<code>127844</code>', '&#127845;<code>127845</code>', '&#127846;<code>127846</code>', '&#127847;<code>127847</code>', '&#127848;<code>127848</code>', '&#127849;<code>127849</code>', '&#127850;<code>127850</code>', '&#127851;<code>127851</code>', '&#127852;<code>127852</code>', '&#127853;<code>127853</code>', '&#127854;<code>127854</code>', '&#127855;<code>127855</code>', '&#127856;<code>127856</code>', '&#127857;<code>127857</code>', '&#127858;<code>127858</code>', '&#127859;<code>127859</code>', '&#127860;<code>127860</code>', '&#127861;<code>127861</code>', '&#127862;<code>127862</code>', '&#127863;<code>127863</code>', '&#127864;<code>127864</code>', '&#127865;<code>127865</code>', '&#127866;<code>127866</code>', '&#127867;<code>127867</code>', '&#127868;<code>127868</code>', '&#127869;<code>127869</code>', '&#127870;<code>127870</code>', '&#127871;<code>127871</code>', '&#127872;<code>127872</code>', '&#127873;<code>127873</code>', '&#127874;<code>127874</code>', '&#127875;<code>127875</code>', '&#127876;<code>127876</code>', '&#127877;<code>127877</code>', '&#127878;<code>127878</code>', '&#127879;<code>127879</code>', '&#127880;<code>127880</code>', '&#127881;<code>127881</code>', '&#127882;<code>127882</code>' ]

const newElements = []
$container.innerHTML += emojisGallery

//newElements.push("<div id='gallery'>")

console.log(newElements)

const cuteEmojis = newElements.join(``)

$container.innerHTML += cuteEmojis

//for (const emoji of emojisGallery) {
    //newElements.push('<div>${day}</div>')
//}

for (let i = 0; i <= 99; i++) {
    console.log(emojisGallery[i])
}

//console.log(newElements)

//const emojisGallery = newElements.join(``)
console.log(emojisGallery)

