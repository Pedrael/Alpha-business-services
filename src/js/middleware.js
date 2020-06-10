import Vue from 'vue'
import axios from 'axios'
var data = { path: 'https://legal-abc.ru' }

export default function App() {
  return new Vue({
      el: '#vue',
      mounted() {
        axios.get(data.path+'/tropheys').then(response => {
          this.tropheys = response.data
        })
        axios.get(data.path+'/services_separate').then(response => {
          this.services_array = response.data
          if(this.getAllUrlParams().id !== undefined) {
            this.id = this.getAllUrlParams().id
          }
          else this.id = 0
          this.service = this.services_array[this.id]
          // creating list of header items
          var uniqueCategories = []
          for(let [i, s] of this.services_array.entries()) {
            if(!uniqueCategories.includes(s.category)) {
              uniqueCategories.push(s.category)
              this.header_items.push({
                category: s.category,
                 list: []
               })
            }
          }

          for(let item of this.header_items) {
            for(let [i, s] of this.services_array.entries()) {
              if(item.category === s.category) {
                item.list.push({
                  id: i,
                  name: s.title
                })
              }
            }
          }

          //console.log(uniqueCategories, this.header_items)
          Vue.nextTick(() => {
            this.createOwlCarousel()
          })

        })
      },
      data: {
        service: '',
        services_array: '',
        tropheys: '',
        header_items: [],
        id: 0
      },
      methods: {

        createOwlCarousel: function() {
          var tropheys = $('#tropheys-carousel')
          tropheys.owlCarousel({
            loop: false,
            rewind: true,
            items: 3,
            dots: false,
            autoplay: true,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                1200: {
                    items: 2
                },
                1880: {
                    items: 3
                }
            }
          })

          var headerCarousel = $('#header-carousel')
          headerCarousel.owlCarousel({
            loop: false,
            rewind: true,
            items: 3,
            dots: false,
            autoplay: false,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
          })

          var header = document.getElementById('header')
          var toggleMenu = document.getElementById('toggle-menu')
          toggleMenu.addEventListener('click', () => {
            header.classList.toggle('menu-hidden')
          })
        },

        selectService: function(i) {
          this.id = i
          this.service = services_array[i]
        },
        getAllUrlParams: function(url) {

            // get query string from url (optional) or window
            var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

            // we'll store the parameters here
            var obj = {};

            // if query string exists
            if (queryString) {

              // stuff after # is not part of query string, so get rid of it
              queryString = queryString.split('#')[0];

              // split our query string into its component parts
              var arr = queryString.split('&');

              for (var i = 0; i < arr.length; i++) {
                // separate the keys and the values
                var a = arr[i].split('=');

                // set parameter name and value (use 'true' if empty)
                var paramName = a[0];
                var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

                // (optional) keep case consistent
                paramName = paramName.toLowerCase();
                if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

                // if the paramName ends with square brackets, e.g. colors[] or colors[2]
                if (paramName.match(/\[(\d+)?\]$/)) {

                  // create key if it doesn't exist
                  var key = paramName.replace(/\[(\d+)?\]/, '');
                  if (!obj[key]) obj[key] = [];

                  // if it's an indexed array e.g. colors[2]
                  if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                  } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                  }
                } else {
                  // we're dealing with a string
                  if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                  } else if (obj[paramName] && typeof obj[paramName] === 'string'){
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                  } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                  }
                }
              }
            }

            return obj;
          }

      }
    })
}
