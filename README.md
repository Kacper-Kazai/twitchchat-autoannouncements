[![MIT License][license]][license-url]
<details id="readme-top">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#usage-in-obs">Usage in obs</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

# About The Project
TwitchChat-AutoAnnouncements (hereinafter referred to as tcaa) is a <a href="https://caa.twitch.kazai.dev" target="_blank">website</a> designed to automate sending of chat announcements on <a href="https://twitch.tv" target="_blank">twitch.tv</a> website (hereinafter referred to as twitch), intended to be implemented in the docks of the <a href="https://obsproject.com">OBS-Studio</a> program (hereinafter referred to as obs).

## Built With
[![Github Pages][Github-pages]][Github-pages-url]
[![Github Actions][Github-actions]][Github-actions-url]
[![React][Reactjs]][Reactjs-url]
[![Axios][Axios]][Axios-url]
<p align="right">(<a href="#readme-top">back to top</a>)</p>

# How it works
Tcaa uses resources of browser to send requests to twitch API in background, due to these requirements, to use site first, account must be authorized by twitch, in order to improve quality of work and increase accessibility for ordinary users, tcaa presents simple interfaces for login and configuration.<br />
Implement tcaa in obs, configure it once and forget about it!
<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Getting Started
## Usage in obs
1. Open obs
2. Choose docks from menu, select Custom Browser Docks, type own Dock Name & URL as ``https://caa.twitch.kazai.dev`` and apply
<img src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmRQrfbue2sVU9Tt64eaMRUef5JQYp0ZLW7HA9CjM13FSvPrI08vSYyEyPYSo_uYIGlhohbJdL0=w1817-h979" />
3. It's recommended to set tcaa dock as a tab to the chat window
<img src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmTyZpycKAgAIvTBVyyqD6_K8kE4QxXQHg6n3l6J30AIqiuxj53KcQwm-BAiJsiGxbFh_35cRq0=w1609-h866" />
4. Log in with Twitch, configure your settings, then turn on tcaa and enjoy announcements on your twitch channel!
<img src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmSH8M3SAHweDBxNh3vKemxrN5io7dyYV3L6SiWdGLI69HdZCbI7nDLzepgyYtgxOA_VU_gOEJU=w1609-h866" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# License
Distributed under the MIT License. See `LICENSE.txt` for more information.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Contact
Kacper Kazai - kacper.kazai@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[license-url]: https://github.com/Kacper-Kazai/twitchchat-autoannouncements/blob/master/LICENSE.txt
[license]: https://img.shields.io/github/license/Kacper-Kazai/twitchchat-autoannouncements.svg?style=for-the-badge
[Github-pages-url]: https://pages.github.com
[Github-pages]: https://img.shields.io/badge/Github_Pages-427db0?style=for-the-badge&logo=github&logoColor=fff
[Github-actions-url]: https://github.com/features/actions
[Github-actions]: https://img.shields.io/badge/Github_Actions-2088ff?style=for-the-badge&logo=github&logoColor=fff
[Reactjs-url]: https://reactjs.org/
[Reactjs]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Axios-url]: https://axios-http.com
[Axios]: https://img.shields.io/badge/Axios-26292f?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABj1BMVEUAAAAIAxgNBSUQBSUJBBkKBBgKBBkOBiYQBiUTCDMKBBkWCjkYCjcKBBkPBiUdDU0JBBkOBiUKBBkPBiUOBiYPBiYPByUUCDIUCTIWCjgeDEsTCDIXCjkWCjkcDEsfDEoeDUsdDUwfDUsdDUwvEnAsFHIuFHAoEWQuFHAdDUssFHIoEWQuFHItFHEnEmUwFX0zFX1DHqstFHEwFX4tFHExFn8tFHIeDUw+GZYyFn4tFHEsFHJDH6tFH6s6GZY8G5dDHqo9GpdGH7E8G5c8G5dJIL08G5dEHqtJIL1NIr07G5c7G5hMIr1KIb5MIr5LIr47G5hEHrBGHrBMIr1MIr5LIb5bJ+NKIr1LIr1RJMlLIr5LIr1FH7FbKOJYJ+JaKeRbJ+NPJMpYJ+NaJ+NQJMpaJ+NaKeNPJMpaKONQJMpZJ+JaJ+NaKONaKeRaKeRaKeNaKONaKONaKeNaKeNaKeNaKeRaKeRaKeNaKeRZKeRaKeNaKeRZKeRaKONaKeRaKONaKeRaKeRaKeRaKeRaKeSwk5/LAAAAhHRSTlMAAQICAwMFBQUGBwgICgoKDA0PEBIVFRcYGBgaGxweHiIlJSYqMjQ1Nzg8PUVHSkpKS0xMT1NUVVZaXWJnZ2pqa2xvdHp6f39/hIaGiYqPkpSUlJSXoaeqr6+xsre7vL/ExsfHycnLzc/R1NTU1Nfc3+np6+zs7/Dy9PT29/f3+fn7/P3IdR5AAAAB0klEQVR42u3PY8KbAQCEwf2cpEZq2wprt6mb2rZtdw/eC7x/q80zNxgBAAAAAAAAAAAAPWdjWQnGnvE4BVj1yBGRw3ZCZOltR0Q2fHNCZNrJrw6IVHY+txMie+yMyD4iRIgQIfLHTDyVERl90xGRlc8cEVny2QmRoc1vHBE5aidE5l5wRGTWU0dE2q+dEBk49NMJkQmX7YTIoluOiKz+4oTI8O53joicthMiC645IrLujSMiW785IVI6YSdEqvccEVn20BGRpp0QGXPga0Rk4IKdEKmed0Sk/cYRkf12RGRqq8il/y9S7HhuhAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFCZNf2IjP+v0iRHzsUEXlRU0Tk8XRFRK7PVELkU6eihMj3upQQebBYEZF7UxQR6Y4oIfJti5QQebtWEZEvKxQRuT5fCZGPnYoSIt/rUkLk/mJFRO5MVkSkO6KIyDEpIfJ222BE5MZCKSFyVkqIfNhbiYj8qEsJkVcNRUSezlZE5OIcRUTmSQGRP4sIESJEiJwLiRxRROTlpr6IyN05UkLk6iQlRH4c7FdC5P16KSHyZLkiIldGKcKa8eo1AAAAAAAAAAAAwC/YDMai/vRc/wAAAABJRU5ErkJggg==&logoColor=5a29e4