
<script>
import contentInfo from './content-info.js'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  render(h) {
    return h('div',
    {
      attrs: { class: 'hello' }
    },
    [
      h(
        'h1',
        this.msg
      ),
      h(
        'p',
        [
          'For a guide and recipes on how to configure / customize this project,',
          h(
            'br'
          ),
          'check out the',
          h(
            'a',
            {
              attrs: {
                href: "https://cli.vuejs.org",
                target: "_blank",
                rel: "noopener",
              }
            },
            ['vue-cli documentation']
          )
        ]
      ),
      ...(() => {
        let infoList = []
        for(let item in contentInfo) {
          infoList.push(
            h(
              'h3',
              item
            )
          )
          infoList.push(
            h(
              'ul',
              contentInfo[item].map(infoItem => {
                return h(
                  'li',
                  [
                    h(
                      'a',
                      {
                        attrs: {
                          href: infoItem.href,
                          target: infoItem.target,
                          rel: infoItem.rel,
                        }
                      },
                      infoItem.text
                    )
                  ]
                )
              })
            )
          )
        }
        return infoList
      })()
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
