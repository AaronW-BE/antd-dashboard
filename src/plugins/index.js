import VueI18nPlugin from './i18n-extend'
import AuthorityPlugin from './authority-plugin'
import TabsPagePlugin from './tabs-page-plugin'

import PermissionPlugin from './permission-plugins';

const Plugins = {
  install: function (Vue) {
    Vue.use(VueI18nPlugin)
    Vue.use(AuthorityPlugin)
    Vue.use(TabsPagePlugin)
    Vue.use(PermissionPlugin);
  }
}
export default Plugins
