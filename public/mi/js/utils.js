/**
 * Time difference calculation
 * @param {TIME} time1  time node1
 * @param {TIME} time2  time node2
 * @return { object } return the time difference between nodes as object
 */

var getTimeDiff = function(time1,time2) {           
    var timeDiff = Math.round(Math.abs(time1.getTime()-time2.getTime())/1000)
    console.log(timeDiff);
    var dayDiff = parseInt(timeDiff/(60*60*24))
    var hourDiff =parseInt(timeDiff%(60*60*24)/(60*60)) 
    var minuteDiff =parseInt(timeDiff%(60*60)/60) 
    var secondDiff =parseInt(timeDiff%60)
    return {
        day: dayDiff,
        hour: hourDiff,
        minute: minuteDiff,
        second: secondDiff
    } 
}

/**
 * Random number generator
 * @param {NUMBER} m int1
 * @param {NUMBER} n int2
 * @return { NUMBER } random number
 */
var randomNum = function (m, n) {
    var max = Math.max(m,n)
    var min = Math.min(m,n)
    var res = Math.floor(Math.random() * (max - min + 1) + min)
    return res
  }

/**
 * Random color generator
 * @param {BOOLEAN} type true:HEX-color false:rgb-color
 */ 
  var randomColor = function (type) {
    if (type) {
        return  `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`
    }

    var str = '#'
    for (let i = 0; i < 3; i++) {
        var n = randomNum(0, 255).toString()
        if (n.length === 1) n = '0' + n
        str += n
    }
    return str
}

/**
 * Parse queue string to object
 * @param { STRING } str queue string to parse
 * @return { OBJECT } object returned
 */
var parseQueueString = function(str) {
    var obj = {}
    if(str) {
    str = str.slice(1).split('&')
    str.forEach(item => {
        var temp = item.split('=')
        obj[temp[0]] = temp[1]
    });
    }
    return obj     
}
/**
 * 
 * @param { ELEMENT } ele  element
 * @param { STRING } style style 
 * @return { STRING } style got
 */
function getStyle(ele, style) {
    if('getComputedStyle' in window) {
        return window.getComputedStyle(ele)[style]
    } else {
        return ele.currentStyle[style]
    }

}

/**
 * Bind event to element
 * @param { ELEMENT } ele Event Source
 * @param { STRING } type Event type
 * @param { FUNCTION } handler Event handler
 */

function on(ele, type, handler) {
    if(!ele) throw new Error("Wrong parameter")
    if(ele.nodeType !== 1) throw new Error('Event source error ') 

    if (ele.addEventListener) {
        ele.addEventListener(type, handler)
        // console.log('Modern browser')
    } else if (ele.attachEvent) {
        ele.attachEvent('on' + type, handler)
        // console.log('IE');
    } else {
        ele['on' + type] = handler
        // console.log('Toaster');
    }

}

/**
 * Remove event from element
 * @param { ELEMENT } ele Event Source
 * @param { STRING } type Event type
 * @param { FUNCTION } handler Event handler
 */

function off(ele, type, handler) {
    if(!ele) throw new Error("Wrong parameter")
    if(ele.nodeType !== 1) throw new Error('Event source error ') 

    if (ele.removeEventListener) {
        ele.removeEventListener(type, handler)
        // console.log('Modern browser')
    } else if (ele.detachEvent) {
        ele.attachEvent('on' + type, handler)
        // console.log('IE');
    } else {
        ele['on' + type] = null
        // console.log('Toaster');
    }

}

/**
 * Movement function
 * @param { ELEMENT } ele moving element
 * @param { OBJECT } target moving property
 * @param { FUNCTION } fn callback function
 */
function move(ele, target, fn = () =>{}) {
    let count = 0
    for (let key in target) {
        count++
        if (key === 'opacity') target[key] *= 100
        let timer = setInterval(() => {
            let current = key === 'opacity' ? getStyle(ele, key) * 100 : parseInt(getStyle(ele, key))
            let distance = (target[key] - current) / 10
            distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)
            // console.log(current);
            if (current === target[key]) {
                clearInterval(timer)
                count--
                if (!count) fn()
            } else {
                ele.style[key] = key === 'opacity' ? (distance + current) / 100 : distance + current + 'px'
            }
        }, 10)
    }
}