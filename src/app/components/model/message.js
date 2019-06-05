import AmpersandModel from 'ampersand-model'
//test data
const data =  [
    {
      "id": 55747,
      "handle": "Kaitlyn.Barton32",
    // "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marclgonzales/128.jpg",
      "timestamp": "2019-01-02T05:07:54.048Z",
      "source": "Twitter",
    //   "content": "Delectus facilis nisi consequatur numquam consequatur temporibus minima. Quaerat et id et asperiores alias inventore repellat qui. Laudantium at ut temporibus. Architecto delectus modi consequatur. Velit labore fuga iusto.",
      "score": 26,
    //   "meta": {
    //     "isStarred": false,
    //     "isTrashed": false
    //   }
     },
]
// item model
module.exports = AmpersandModel.extend({
    props: {
        id: 'number',
        handle: 'string',
        timestamp: 'string',
        source: 'string',
        score: 'number'
    },
    session: {
        signedIn: ['boolean', true, false],
    },
    derived: {
        handle: {
            deps: ['handle', 'score'],
            fn: function () {
                return this.handle + ' ' + this.score;
            }
        },
        avatar: {
            deps: ['handle'],
            fn: function () {
                return 'http://robohash.org/' + encodeURIComponent(this.fullName) + '?size=80x80';
            }
        },
        editUrl: {
            deps: ['id'],
            fn: function () {
                return '/person/' + this.id + '/edit';
            }
        },
        viewUrl: {
            deps: ['id'],
            fn: function () {
                return '/person/' + this.id;
            }
        }
    }
});
