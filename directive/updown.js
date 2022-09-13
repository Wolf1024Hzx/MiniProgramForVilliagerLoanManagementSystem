const options = {
  defaultColor: '#2D2F31',
  upColor: '#FD6362',
  downColor: '#34C759'
}
export const updown = {
  mounted: (el: HTMLElement):void => {
    updownHandle(el, Object.assign(options, {
      defaultColor: options.defaultColor.toString().replace(/('|")/g, '')
    }))
  },
  updated: (el: HTMLElement):void => {
    updownHandle(el, Object.assign(options, {
      defaultColor: options.defaultColor.toString().replace(/('|")/g, '')
    }))
  }
}
const updownHandle = (el: HTMLElement, {
  upColor,
  downColor,
  defaultColor
}: {upColor: string, downColor: string, defaultColor: string}): void => {
  let num = el.innerHTML
  // eslint-disable-next-line no-useless-escape
  num = num.replace(/(,|%|元|万|千|百|十|\s|(<[^\>]*>))/g, '')
  if (Object.is(NaN, Number(num))) {
    el.style.color = defaultColor
    return
  }
  if (Number(num) > 0) {
    el.style.color = upColor
  } else if (Number(num) < 0) {
    el.style.color = downColor
  } else {
    el.style.color = defaultColor
  }
}