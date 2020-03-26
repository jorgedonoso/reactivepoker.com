# reactivepoker.com
A collection of card game resources for beginners

[https://www.reactivepoker.com/](https://www.reactivepoker.com/)

## Modules
* Poker Rules
* Jacks or Better
* Card Counting

## Animation
To create the staggered effect, I used SCSS to generate a set of classes to delay individual cards at different speeds.

```scss
@for $i from 1 through 4 {
    .delay-#{$i} {
        -webkit-animation-delay: $i * 100ms !important;
        animation-delay: $i * 100ms !important;
    }
}
```

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## Author
Jorge Donoso

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
