// eslint-disable-next-line no-unused-vars
const install = (Vue, options = {}) => {
    Vue.directive('permissions', {
        bind(el, binding, vnode) {
            const {value = []} = binding;

            const context = vnode.context;
            if (!value.some(item => context.$store.state.account.permissions.indexOf(item) !== -1)) {
                el.remove();
            }
        }
    });
    Vue.directive('roles', {
        inserted (el, binding, vnode) {
            const {value = []} = binding;

            const context = vnode.context;
            if (!value.some(item => context.$store.state.account.roles.indexOf(item) !== -1)) {
                el.remove();
            }
        }
    })
}

export default {
    install
}
