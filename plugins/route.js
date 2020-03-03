export default ({ app }) => {
  app.router.afterEach((to, from) => {
    const targetName = to.path.split('/')[1]
    // if (to.path.includes('detail')) {
    //   targetName = from.path.split('/')[1]
    // }
    const pathName = targetName === '' ? 'home' : targetName
    app.store.dispatch('page/setPathName', pathName)
  })
}
