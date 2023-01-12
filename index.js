const CIRCLE_TYPE = 'martian'
// const CIRCLE_TYPE = 'normalized'

const MIN_LIGHTNESS = 20
const MAX_LIGHTNESS = 95
const DEFAULT_SATURATION = 100

const circleShape = {
  martian: {
    LEVELS: 5,
    SECTORS: 24
  },

  normalized: {
    LEVELS: 10,
    SECTORS: 36
  }
}

const LEVELS = circleShape[CIRCLE_TYPE].LEVELS
const SECTORS = circleShape[CIRCLE_TYPE].SECTORS

const martianColors = [
  ['rgb(255,191,178)', 'black', 'Chicken Breast'],
  ['rgb(255,144,122)', 'black', 'Pale Raspberry'],
  ['rgb(255,0,0)', 'white', 'Red'],
  ['rgb(161,0,0)', 'white', 'Dark Red'],
  ['rgb(102,0,0)', 'white', 'Maroon'],
  // ['hsl(0,100%,7%)', 'white', 'Maroon'],

  ['rgb(255,210,166)', 'black', 'Parmesan Cheese'],
  ['rgb(255,178,102)', 'black', 'Peanut Butter'],
  ['rgb(255,128,0)', 'black', 'Orange'],
  ['rgb(166,83,0)', 'white', 'Brown'],
  ['rgb(95,47,0)', 'white', 'Dark Brown'],
  // ['hsl(30,100%,7%)', 'white', 'Dark Brown'],

  ['rgb(255,224,166)', 'black', 'Buff'],
  ['rgb(255,187,0)', 'black', 'Turmeric'],
  ['rgb(217,159,0)', 'black', 'Yellow Ochre'],
  ['rgb(153,112,0)', 'white', 'Tan'],
  ['rgb(82,60,0)', 'white', 'Milk Chocolate'],
  // ['hsl(44,100%,7%)', 'white', 'Milk Chocolate'],

  ['rgb(255,233,166)', 'black', 'Wheat Ear'],
  ['rgb(255,212,0)', 'black', 'Yellow Cheese'],
  ['rgb(204,170,0)', 'black', 'Olive Oil'],
  ['rgb(140,116,0)', 'white', 'Cane Toad'],
  ['rgb(71,60,0)', 'white', 'Cow Dung'],
  // ['hsl(51,100%,7%)', 'white', 'Cow Dung'],

  ['rgb(255,255,166)', 'black', 'Butter'],
  ['rgb(255,255,0)', 'black', 'Yellow'],
  ['rgb(196,196,0)', 'black', 'Wasabi'],
  ['rgb(138,138,0)', 'white', 'Olive'],
  ['rgb(69,69,0)', 'white', 'Olive Drab'],
  // ['hsl(60,100%,7%)', 'white', 'Olive Drab'],

  ['rgb(236,255,166)', 'black', 'Champagne'],
  ['rgb(221,255,0)', 'black', 'Golden Delicious'],
  ['rgb(182,199,0)', 'black', 'Green Grape'],
  ['rgb(122,133,0)', 'white', 'Light Kelp'],
  ['rgb(60,66,0)', 'white', 'Dark Kelp'],
  // ['hsl(65,100%,7%)', 'white', 'Dark Kelp'],

  ['rgb(219,255,158)', 'black', 'Avacado Flesh'],
  ['rgb(187,255,0)', 'black', 'Chartreuse'],
  ['rgb(150,204,0)', 'black', 'Celery'],
  ['rgb(106,145,0)', 'white', 'Sage'],
  ['rgb(51,69,0)', 'white', 'Oak Leaf'],
  // ['hsl(76,100%,7%)', 'white', 'Oak Leaf'],

  ['rgb(207,255,158)', 'black', 'Green Cabbage'],
  ['rgb(157,255,0)', 'black', 'Green Pea'],
  ['rgb(121,196,0)', 'black', 'Basil'],
  ['rgb(94,153,0)', 'white', 'Spinach'],
  ['rgb(46,74,0)', 'white', 'Rhubarb Leaf'],
  // ['hsl(83,100%,7%)', 'white', 'Rhubarb Leaf'],

  ['rgb(178,255,163)', 'black', 'Green Hellebore'],
  ['rgb(0,255,0)', 'black', 'Granny Smith'],
  ['rgb(0,191,0)', 'black', 'Green'],
  ['rgb(0,153,0)', 'white', 'Green Grass'],
  ['rgb(0,79,0)', 'white', 'Zucchini'],
  // ['hsl(120,100%,7%)', 'white', 'Zucchini'],

  ['rgb(168,255,175)', 'black', 'Celadon'],
  ['rgb(0,255,115)', 'black', 'Chayote'],
  ['rgb(0,181,81)', 'black', 'Clover'],
  ['rgb(0,153,69)', 'white', 'Shaded Fern'],
  ['rgb(0,79,36)', 'white', 'Cucumber'],
  // ['hsl(147,100%,7%)', 'white', 'Cucumber'],

  ['rgb(171,255,198)', 'black', 'Variscite'],
  ['rgb(0,255,161)', 'black', 'Chrysolite'],
  ['rgb(0,178,119)', 'black', 'Light Emerald'],
  ['rgb(0,148,99)', 'white', 'Emerald'],
  ['rgb(0,76,51)', 'white', 'Brunswick Green'],
  // ['hsl(160,100%,7%)', 'white', 'Brunswick Green'],

  ['rgb(176,255,218)', 'black', 'Blue Agave'],
  ['rgb(0,255,196)', 'black', 'Verdigris'],
  ['rgb(0,184,159)', 'black', 'Shallow Sea Green'],
  ['rgb(0,145,126)', 'white', 'Broccoli'],
  ['rgb(0,76,66)', 'white', 'Malachite'],
  // ['hsl(172,100%,7%)', 'white', 'Malachite'],

  ['rgb(176,255,255)', 'black', 'Blue Spruce Light'],
  ['rgb(0,255,255)', 'black', 'Cyan'],
  ['rgb(0,178,178)', 'black', 'Dark Cyan'],
  ['rgb(0,140,140)', 'white', 'Blue Spruce Dark'],
  ['rgb(0,74,74)', 'white', 'Pthalo Green'],
  // ['hsl(180,100%,7%)', 'white', 'Pthalo Green'],

  ['rgb(163,224,255)', 'black', 'Uranus'],
  ['rgb(0,195,255)', 'black', 'Turquoise'],
  ['rgb(0,153,184)', 'white', 'Blue Topaz'],
  ['rgb(0,127,153)', 'white', 'Sea Green'],
  ['rgb(0,66,79)', 'white', 'Dark Sea Green'],
  // ['hsl(190,100%,7%)', 'white', 'Dark Sea Green'],

  ['rgb(150,203,255)', 'black', 'Powder Blue'],
  ['rgb(0,170,255)', 'black', 'Azure'],
  ['rgb(0,119,178)', 'white', 'Dark Azure'],
  ['rgb(0,90,135)', 'white', 'Cobalt Blue'],
  ['rgb(0,57,87)', 'white', 'Prussian Blue'],
  // ['hsl(201,100%,7%)', 'white', 'Prussian Blue'],

  ['rgb(166,195,255)', 'black', 'Pale Sky Blue'],
  ['rgb(115,162,255)', 'black', 'Sky Blue'],
  ['rgb(0,110,255)', 'white', 'Delphinium Blue'],
  ['rgb(0,66,153)', 'white', 'Royal Blue'],
  ['rgb(0,44,102)', 'white', 'Dark Royal Blue'],
  // ['hsl(214,100%,7%)', 'white', 'Dark Royal Blue'],

  ['rgb(179,185,255)', 'black', 'Forget-Me-Not'],
  ['rgb(133,143,255)', 'black', 'Corn Flower'],
  ['rgb(89,89,255)', 'white', 'Light Blue'],
  ['rgb(0,0,255)', 'white', 'Blue'],
  ['rgb(0,0,122)', 'white', 'Dark Blue'],
  // ['hsl(240,100%,7%)', 'white', 'Dark Blue'],

  ['rgb(197,178,255)', 'black', 'Rose De France'],
  ['rgb(165,135,255)', 'black', 'Lavender'],
  ['rgb(128,82,255)', 'white', 'Dark Lavender'],
  ['rgb(102,0,255)', 'white', 'Han Purple'],
  ['rgb(46,0,115)', 'white', 'Dioxazine'],
  // ['hsl(264,100%,7%)', 'white', 'Dioxazine'],

  ['rgb(206,163,255)', 'black', 'Mauve'],
  ['rgb(176,107,255)', 'black', 'Kunzite'],
  ['rgb(140,0,255)', 'white', 'Violet'],
  ['rgb(103,0,156)', 'white', 'Dark Violet'],
  ['rgb(72,0,110)', 'white', 'Spectral Violet'],
  // ['hsl(279,100%,7%)', 'white', 'Spectral Violet'],

  ['rgb(230,163,255)', 'black', 'Lilac'],
  ['rgb(196,0,255)', 'white', 'Rose Of Sharon'],
  ['rgb(155,0,186)', 'white', 'Purple Daisy'],
  ['rgb(124,0,150)', 'white', 'Aniline'],
  ['rgb(86,0,102)', 'white', 'Amethyst'],
  // ['hsl(291,100%,7%)', 'white', 'Amethyst'],

  ['rgb(255,186,255)', 'black', 'Light Magenta'],
  ['rgb(255,0,255)', 'white', 'Magenta'],
  ['rgb(171,0,171)', 'white', 'Dark Magenta'],
  ['rgb(138,0,138)', 'white', 'Light Purple'],
  ['rgb(84,0,84)', 'white', 'Purple'],
  // ['hsl(300,100%,7%)', 'white', 'Purple'],

  ['rgb(255,173,226)', 'black', 'Pink Hibiscus'],
  ['rgb(255,0,187)', 'white', 'Purple Loosestrife'],
  ['rgb(181,0,152)', 'white', 'Shocking Pink'],
  ['rgb(140,0,117)', 'white', 'Purple Bougainvillea'],
  ['rgb(89,0,75)', 'white', 'Purple Bean'],
  // ['hsl(309,100%,7%)', 'white', 'Purple Bean'],

  ['rgb(255,191,214)', 'black', 'Light Pink'],
  ['rgb(255,140,190)', 'black', 'Pink'],
  ['rgb(255,0,153)', 'white', 'Dark Pink'],
  ['rgb(158,0,106)', 'white', 'Prickly Pear'],
  ['rgb(102,0,68)', 'white', 'Elderberry'],
  // ['hsl(320,100%,7%)', 'white', 'Elderberry'],

  ['rgb(255,191,200)', 'black', 'Baby Pink'],
  ['rgb(255,143,165)', 'black', 'Pink Hydrangea'],
  ['rgb(255,0,115)', 'white', 'Dragon Fruit'],
  ['rgb(166,0,75)', 'white', 'Chinese Strawberry'],
  ['rgb(112,0,51)', 'white', 'Red Plum']
  // ['hsl(333,100%,7%)', 'white', 'Red Plum']
]

/**
 * @param {number} sector Zero-based sector
 * @param {number} level Zero-based level
 * @param {number} maxLevels Max levels count
 * @returns
 */
const getMartianColorIndex = (sector, level) =>
  sector * LEVELS + (LEVELS - level - 1)

const colorInfoByType = {
  martian: (sector, level) => {
    const colorIndex = getMartianColorIndex(sector, level)
    const c = martianColors[colorIndex]
    return {
      color: c[0] ?? 'white',
      captionColor: c[1] ?? 'black',
      colorName: c[2] ?? '-'
    }
  },

  normalized: (sector, l) => {
    const h = (360 / SECTORS) * sector
    const s = DEFAULT_SATURATION

    return {
      color: `hsl(${h},${s}%,${l}%)`,
      captionColor: l < 50 ? 'white' : 'black',
      colorName: ''
    }
  }
}

const getColorInfo = (type, sector, level) => {
  const fn = colorInfoByType[type]

  if (!fn) throw new Error(`Unknown color info type - ${type}`)

  return fn(sector, level)
}

/**
 * Convert rgb to hsl
 *
 * @link https://stackoverflow.com/a/2348659
 * @param {number} r 0-255
 * @param {number} g 0-255
 * @param {number} b 0-255
 * @returns
 */
function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h
  let s
  const l = (max + min) / 2

  if (max == min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  const H = Math.round(h * 360)
  const S = Math.round(s * 100)
  const L = Math.round(l * 100)

  return [H === 360 ? 0 : H, S, L]
}

const canvas = document.getElementById('circle')
const canvasMaxSize = Math.min(canvas.width, canvas.height)

const SCALE = 6
const FONT_SIZE = Math.round(8 * SCALE)

const LEVEL1_INNER_RADUIS = 60 * SCALE
const LEVEL1_HEIGHT = 45 * SCALE
const LINE_WIDTH = Math.round(0.85 * SCALE)

const RADIAN = Math.PI / 180

const getLineCoord = ({ centerX, centerY, radius1, radius2, angle }) => {
  const angle1Cos = Math.cos(angle)
  const angle1Sin = Math.sin(angle)

  return {
    x1: angle1Cos * radius1 + centerX,
    y1: angle1Sin * radius1 + centerY,
    x2: angle1Cos * radius2 + centerX,
    y2: angle1Sin * radius2 + centerY
  }
}

const getPointCoord = ({ centerX, centerY, radius, angle }) => {
  const angleCos = Math.cos(angle)
  const angleSin = Math.sin(angle)

  return {
    x: angleCos * radius + centerX,
    y: angleSin * radius + centerY
  }
}

const drawSector = (
  ctx,
  {
    caption,
    centerX,
    centerY,
    radius1,
    radius2,
    angle1,
    angle2,
    backgroundColor,
    captionColor
  }
) => {
  const side1 = getLineCoord({
    centerX,
    centerY,
    radius1,
    radius2,
    angle: angle1
  })

  const side2 = getLineCoord({
    centerX,
    centerY,
    radius1,
    radius2,
    angle: angle2
  })

  ctx.beginPath()

  ctx.moveTo(side1.x1, side1.y1)

  ctx.lineTo(side1.x2, side1.y2)

  ctx.arc(centerX, centerY, radius2, angle1, angle2)

  ctx.moveTo(side1.x1, side1.y1)

  ctx.arc(centerX, centerY, radius1, angle1, angle2)

  ctx.lineTo(side2.x2, side2.y2)

  const cectorCenterPoint = getPointCoord({
    centerX,
    centerY,
    radius: (radius1 + radius2) / 2,
    angle: (angle1 + angle2) / 2
  })

  ctx.fillStyle = backgroundColor

  ctx.fill()

  if (caption) {
    ctx.fillStyle = captionColor
    ctx.font = getFontStyle(FONT_SIZE)
    ctx.fillText(caption, cectorCenterPoint.x, cectorCenterPoint.y)
  }

  ctx.stroke()
}

const ctx = canvas.getContext('2d')

const getFontStyle = size => `${size}px Roboto`

ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.strokeStyle = 'black'
ctx.lineWidth = LINE_WIDTH

const centerX = canvasMaxSize / 2
const centerY = canvasMaxSize / 2

const levelsRadiuses = [
  LEVEL1_INNER_RADUIS,
  LEVEL1_INNER_RADUIS + LEVEL1_HEIGHT
]

for (let level = 2; level <= LEVELS; level++) {
  const r1 = levelsRadiuses[level - 2]
  const r2 = levelsRadiuses[level - 1]
  const r3 = Math.sqrt(2 * Math.pow(r2, 2) - Math.pow(r1, 2))

  levelsRadiuses.push(r3)
}

const LEVELS_LEN =
  levelsRadiuses[levelsRadiuses.length - 1] - LEVEL1_INNER_RADUIS

const LIGHTNESS_KX = (MAX_LIGHTNESS - MIN_LIGHTNESS) / LEVELS_LEN

for (let level = 0; level < LEVELS; level++) {
  const r1 = levelsRadiuses[level]
  const r2 = levelsRadiuses[level + 1]

  for (let sector = 0; sector < SECTORS; sector++) {
    const angleStep = 360 / SECTORS
    const angle = angleStep * (sector - 0.5) - 90

    let colorInfo

    const l = MIN_LIGHTNESS + (r1 - LEVEL1_INNER_RADUIS) * LIGHTNESS_KX

    if (CIRCLE_TYPE === 'normalized') {
      colorInfo = getColorInfo(CIRCLE_TYPE, sector, l)
    } else {
      colorInfo = getColorInfo(CIRCLE_TYPE, sector, level)
    }

    const backgroundColor = colorInfo.color
    const captionColor = colorInfo.captionColor

    // Угол сектора
    if (level === LEVELS - 1) {
      const angleTextCoord = getPointCoord({
        angle: (angle + angleStep / 2) * RADIAN,
        radius: r2 + (r2 - r1) * 0.6,
        centerX,
        centerY
      })

      ctx.save()

      ctx.fillStyle = 'gray'
      ctx.font = getFontStyle(Math.round(FONT_SIZE * 1))

      // TODO Добавить поворот надписи (ctx.translate и ctx.rotate)

      ctx.fillText(
        `${Math.round(sector * angleStep)}°`,
        angleTextCoord.x,
        angleTextCoord.y
      )

      ctx.restore()
    }

    /*
    // Номер сектора
    if (level === LEVELS - 1) {
      const angleTextCoord = getPointCoord({
        angle: (angle + angleStep / 2) * RADIAN,
        radius: r2 + (r2 - r1) / 2,
        centerX,
        centerY
      })

      ctx.save()

      ctx.fillStyle = 'black'
      ctx.font = getFontStyle(Math.round(FONT_SIZE * 1.2))

      ctx.fillText(`${sector}`, angleTextCoord.x, angleTextCoord.y)

      ctx.restore()
    }
    */

    let caption = sector * 5 + 5 - level

    /* if (sector * angleStep === 90) {
      caption = String(level)
    } else if (sector === 0) {
      caption = Math.round(l)
    } */

    drawSector(ctx, {
      caption,
      centerX,
      centerY,
      radius1: r1,
      radius2: r2,
      angle1: angle * RADIAN,
      angle2: (angle + angleStep) * RADIAN,
      backgroundColor,
      captionColor
    })
  }
}
