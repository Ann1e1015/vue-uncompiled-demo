
<script>
const contentInfo = {
  'Installed CLI Plugins': [
    {
      href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
      target: '_blank',
      rel: 'noopener',
      text: 'babel'
    },
    {
      href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint',
      target: '_blank',
      rel: 'noopener',
      text: 'eslint'
    },
  ],
  'Essential Links': [
    {
      href: 'https://vuejs.org',
      target: '_blank',
      rel: 'noopener',
      text: 'Core Docs'
    },
    {
      href: 'https://forum.vuejs.org',
      target: '_blank',
      rel: 'noopener',
      text: 'Forum'
    },
    {
      href: 'https://chat.vuejs.org',
      target: '_blank',
      rel: 'noopener',
      text: 'Community Chat'
    },
    {
      href: 'https://twitter.com/vuejs',
      target: '_blank',
      rel: 'noopener',
      text: 'Twitter'
    },
    {
      href: 'https://news.vuejs.org',
      target: '_blank',
      rel: 'noopener',
      text: 'News'
    },
  ],
  'Ecosystem': [
    {
      href: 'https://router.vuejs.org',
      target: '_blank',
      rel: 'noopener',
      text: 'vue-router'
    },
    {
      href: 'https://vuex.vuejs.org',
      target: '_blank',
      rel: 'noopener',
      text: 'vuex'
    },
    {
      href: 'https://github.com/vuejs/vue-devtools#vue-devtools',
      target: '_blank',
      rel: 'noopener',
      text: 'vue-devtools'
    },
    {
      href: 'https://vue-loader.vuejs.org',
      target: '_blank',
      rel: 'noopener',
      text: 'vue-loader'
    },
    {
      href: 'https://github.com/vuejs/awesome-vue',
      target: '_blank',
      rel: 'noopener',
      text: 'awesome-vue'
    },
  ],
}

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
