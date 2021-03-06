import getWindowPosition from './getWindowPosition'

const showWindow = (window, tray) => {
    const position = getWindowPosition(window, tray)
    window.setPosition(position.x, position.y, false)
    window.show()
    window.focus()
}

export default showWindow