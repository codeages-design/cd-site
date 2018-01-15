export const tint = (color, amount) => {

  if (amount === 0) {
    return `#${color}`;
  }

  let red = parseInt(color.slice(0, 2), 16)
  let green = parseInt(color.slice(2, 4), 16)
  let blue = parseInt(color.slice(4, 6), 16)
  
  red += Math.round(amount * (255 - red))
  green += Math.round(amount * (255 - green))
  blue += Math.round(amount * (255 - blue))

  red = red.toString(16)
  green = green.toString(16)
  blue = blue.toString(16)

  return `#${red}${green}${blue}`
};

export const shade = (color, amount) => {
  let red = parseInt(color.slice(0, 2), 16)
  let green = parseInt(color.slice(2, 4), 16)
  let blue = parseInt(color.slice(4, 6), 16)

  red = Math.round((1 - amount) * red)
  green = Math.round((1 - amount) * green)
  blue = Math.round((1 - amount) * blue)

  red = red.toString(16)
  green = green.toString(16)
  blue = blue.toString(16)

  return `#${red}${green}${blue}`
};

export const tone = (color, amount) => {

};

