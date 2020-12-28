export const tint = (color: string, amount: number): string => {

  if (amount === 0) {
    return `#${color}`.toLowerCase();
  }

  let red:number | string = parseInt(color.slice(0, 2), 16)
  let green:number | string = parseInt(color.slice(2, 4), 16)
  let blue:number | string = parseInt(color.slice(4, 6), 16)
  
  red += Math.round(amount * (255 - red))
  green += Math.round(amount * (255 - green))
  blue += Math.round(amount * (255 - blue))

  red = red.toString(16)
  green = green.toString(16)
  blue = blue.toString(16)

  return `#${red}${green}${blue}`
};

export const shade = (color: string, amount: number): string => {
  let red:number | string = parseInt(color.slice(0, 2), 16)
  let green:number | string = parseInt(color.slice(2, 4), 16)
  let blue:number | string = parseInt(color.slice(4, 6), 16)

  red = Math.round((1 - amount) * red)
  green = Math.round((1 - amount) * green)
  blue = Math.round((1 - amount) * blue)

  red = red.toString(16).length < 2 ? '0' + red.toString(16) : red.toString(16)
  green = green.toString(16).length < 2 ? '0' + green.toString(16) : green.toString(16)
  blue = blue.toString(16).length < 2 ? '0' + blue.toString(16) : blue.toString(16)

  return `#${red}${green}${blue}`
};


