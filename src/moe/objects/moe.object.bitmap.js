/*!
 * moe.object.bitmap v0.0.1
 * (c) 2016 CookieJon
 * Released under the MIT License.
 * https://github.com/CookieJon
 */

 /* eslint-disable */

export default Bitmap

var iq = require('image-q')
var ColorUtils = require('../../moe/utils/moe.utils.color.js')
console.log(ColorUtils)

function Bitmap (options) {
  options = Object.assign({
    // defaults go here
  }, options)

  this.options = options

  this._type = 'Bitmap'

  this.title = 'Untitled'

  this.src = null

  this.width = null //     256
  this.height = null // x   256
  this.length = null // = 65535

  this.pixels_key = null // Original pixels
  this.palette_key = null // Original palette
  this.imageData_key = null // context.getImageData(0,0,this.width, this.height).data

  this.pixels = null // Uint8Array[.length]   Output/used pixels
  this.palette = null // Uint8Array[256]     Output/used palette
  this.imageData = null // context.getImageData(0,0,this.width, this.height).data

  this.imageData = new ImageData(256, 256)
  this.stats = {
    tags: null,
    colors: null,
    noiseLevel: null,
    average: null,
    high: null,
    low: null
  }
}

Bitmap.prototype = {

  constructor: Bitmap,

  // Create (options) {
  //   var options = options
  //   return new Promise((resolve, reject) => {
  //     if (this.init(options)
  //     if (this.$store.dispatch('getUser') && this.$store.dispatch('getEntities')) {
  //       resolve();
  //     } else {
  //       reject(Error('it broke'));
  //     }
  //   });
  // }

  init (options) {
    console.log('bitmap.init() options=', this.options)

    var self = this

    var img = document.createElement('img')

    //  Create from file
    //
    if (options.file) {
      var file = options.file
      // Any old image file
      //
      if (file.type.match(/image.*/)) {
        img.onload = () => {
          window.URL.revokeObjectURL(this.src)
          self.normalisePalette(img)
          alert('LOADED IMAGE!!!')
        }
        img.src = window.URL.createObjectURL(options.file)
        img.height = 60
      }
      // File 2. Proprietary JBitmap file
      //
      else {

      }
    }

    // Create from src
    //
    else if (options.src) {
      // Any old image file from http://
      //
      alert('loading from src')
      img.onload = () => {
        alert('img loaded')
        self.title = 'all aboard!'
        self.normalisePalette(img)
        alert('palette normalised')
      }
      img.src = options.src
      img.height = 60
    }
    // this.imageData = new ImageData(this.width, this.height)
  },

  normalisePalette (img) {
    //
    // var img = this.$refs.src
    // var canvas = this.$refs.dest
    // var img = document.createElement('img')
    // var canvas = document.createElement('canvas')

    // canvas.getContext('2d').drawImage(img, 0, 0, 256, 256)

    // desired colors number

    // ... PREDEFEINED PALETTE
    //
    alert("NORMALISING")
    // * material colors
    //
    var colorFrom = parseInt(Math.random() * 150)
    var colorTo = parseInt(Math.random() * 150) + 151
    colorFrom = 0
    colorTo = 255
    var materialColors = ColorUtils.getMaterialColors(colorFrom, colorTo)

    // * iq.palette <= material colors
    var iqPalette = new iq.utils.Palette()
    for (var j = 0, l = materialColors.length; j < l; j++) {
      var color = materialColors[j]
      iqPalette.add(iq.utils.Point.createByRGBA(color.r, color.g, color.b, color.a))
    }
    // * iq.distance.?
    var iqDistance = new iq.distance.EuclideanRgbQuantWOAlpha()
    //     return new iq.distance.Euclidean();
    //     return new iq.distance.Manhattan();
    //     return new iq.distance.CIEDE2000();
    //     return new iq.distance.CIE94Textiles();
    //     return new iq.distance.CIE94GraphicArts();
    //     return new iq.distance.EuclideanRgbQuantWOAlpha();
    //     return new iq.distance.EuclideanRgbQuantWithAlpha();
    //     return new iq.distance.ManhattanSRGB();
    //     return new iq.distance.CMETRIC();
    //     return new iq.distance.PNGQUANT();
    //     return new iq.distance.ManhattanNommyde();
    // }

    // & iq.image.?
    var inPointContainer = iq.utils.PointContainer.fromHTMLImageElement(img)
    // ////// var iqImage = new iq.image.ErrorDiffusionArray(iqDistance, iq.image.ErrorDiffusionArrayKernel.SierraLite)
    var iqImage = new iq.image.NearestColor(iqDistance)

    var outPointContainer = iqImage.quantize(inPointContainer, iqPalette)
    var uint8array = outPointContainer.toUint8Array()
    // var imageData = canvas.getContext('2d').getImageData(0, 0, 256, 256)
    for (var i = 0; i < uint8array.length; i++) {
      this.imageData.data[i] = uint8array[i]
    }
    this.imageData = this.imageData
    // canvas.getContext('2d').putImageData(imageData, 0, 0)

    // draw palette
    //
    // var paletteCanvas = ColorUtils.drawPixels(iqPalette.getPointContainer(), 16, 32)
    // paletteCanvas.className = 'palette'
    // this.$el.appendChild(paletteCanvas)
  },

  fromArrayBuffer (srcArrayBuffer) {
    // bitmap stream
    var dataview = new DataView(srcArrayBuffer)
    var offBits = dataview.getUint16(10, true)
    this.width = dataview.getUint32(18, true)
    this.height = dataview.getUint32(22, true)
    var bitCount = dataview.getUint16(28, true)
    // var totalColors = dataview.getUint16(46, true)
    var usedColors = dataview.getUint16(50, true)

    // pixels
    this.length = this.width * this.height
    this.pixels_key = new Uint8Array(this.length)
    for (var y = 0; y < 256; y++) {
      for (var x = 0; x < 256; x++) {
        this.pixels_key[x + y * 256] = dataview.getUint8(offBits + x + (255 - y) * 256) // Invert Y axis (BMP8 data goes from bottom->top)
      }
    }
    this.pixels = Uint8Array.from(this.pixels_key)

    // palette
    var length = bitCount === 0 ? 1 << bitCount : usedColors
    // var index = 54
    var tmpPalette = []
    for (var i = 0; i < length; i++) {
//      var b = dataview.getUint8(index++)
//      var g = dataview.getUint8(index++)
//      var r = dataview.getUint8(index++)
//      var a = dataview.getUint8(index++)

      // tmpPalette.push(Palette.getColorFromRGBA(r, g, b, a))
    }
    this.palette_key = tmpPalette
    this.palette = Array.from(tmpPalette)

    return this
  },

  fromFile (srcFile, callback) {
    var file = srcFile
    var reader = new FileReader()
    var title = file.name.replace(/\.bmp|_/g, '').toSentenceCase()
    var bitmap = this(function (reader, title) {
      reader.addEventListener('load', function (e) {
        bitmap.fromArrayBuffer(e.target.result)
        bitmap.title = title
        bitmap.init()
        callback(bitmap)
      }, false)
      reader.readAsArrayBuffer(file) // for BMP8 raw file
      // reader.readAsDataURL(file)  // for Image() object
    })(reader, title)

    return this
  },
  //this function is called when the input loads an image
  renderImage (file) {
    var reader = new FileReader();
    reader.onload = function(event){
      the_url = event.target.result
      //of course using a template library like handlebars.js is a better solution than just inserting a string
      $('#preview').html("<img src='"+the_url+"' />")
      $('#name').html(file.name)
      $('#size').html(humanFileSize(file.size, "MB"))
      $('#type').html(file.type)
    }

    //when the file is read it triggers the onload event above.
    reader.readAsDataURL(file);
  },
  // fromFileName (filename, callback) {
  fromFileName (filename, callback) {
    // Load bitmap programatically
    //
    var oReq = new XMLHttpRequest()
    oReq.open('GET', filename, true)
    oReq.responseType = 'arraybuffer'
    oReq.onload = function (oEvent) {
      var arrayBuffer = oReq.response // Note: not oReq.responseText
      if (arrayBuffer) {
        // var byteArray = new Uint8Array(arrayBuffer)
        var bitmap = new Bitmap().fromArrayBuffer(arrayBuffer)
        bitmap.title = filename.slice(-8).replace(/\.bmp|_/g, '').toSentenceCase()
        bitmap.init()
        callback(bitmap)
      }
    }
    oReq.send(null)
  },

  // OUTPUT
  //
  render () {
    this.generateImageData(this.pixels, this.palette, this.imageData)
  },

  generateImageData (pixels, palette, imageData) {
    // quick method just for the key image with no mapping etc.
    //
    var data = imageData.data

    var mapToIndex = 0

    for (var i = 0; i < 65535; i++) {
      var theColor = this.palette_key[pixels[i]]

      data[mapToIndex++] = theColor.r
      data[mapToIndex++] = theColor.g
      data[mapToIndex++] = theColor.b
      data[mapToIndex++] = 255
    }

    return imageData
  }

}

