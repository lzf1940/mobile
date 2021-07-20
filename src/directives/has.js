export default {
  inserted(el, binding, vnode) {
    let value = binding.value;
    let boolean = vnode.context.$store.state.user.has[value];
    if (!boolean) {
      el.parentNode.removeChild(el);
    }
  },
};
