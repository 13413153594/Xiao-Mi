;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-youjiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M529.840128 47.822848C282.5728 47.822848 82.118656 248.24832 82.118656 495.54432c0 247.237632 200.454144 447.722496 447.722496 447.722496 247.267328 0 447.722496-200.48384 447.722496-447.722496C977.5616 248.24832 777.107456 47.822848 529.840128 47.822848zM529.840128 853.722112c-197.803008 0-358.177792-160.375808-358.177792-358.177792 0-197.830656 160.374784-358.176768 358.177792-358.176768 197.80096 0 358.176768 160.346112 358.176768 358.176768C888.01792 693.346304 727.641088 853.722112 529.840128 853.722112z"  ></path>' +
    '' +
    '<path d="M560.789504 489.478144 399.465472 297.220096c-8.209408-9.783296-6.921216-24.505344 2.863104-32.714752l31.128576-26.121216c9.78432-8.209408 24.506368-6.921216 32.714752 2.86208l194.044928 231.252992c4.113408 4.900864 5.839872 11.039744 5.312512 16.979968 0.528384 5.9392-1.200128 12.079104-5.312512 16.979968L466.171904 737.71008c-8.209408 9.78432-22.931456 11.072512-32.714752 2.863104l-31.128576-26.12224c-9.78432-8.209408-11.072512-22.931456-2.863104-32.714752L560.789504 489.478144z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)