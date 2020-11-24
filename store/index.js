export const state = () => ({
  // Status
  items: ['Rent', 'Sale'],
  currentSearch: 'Sale',
})
export const mutations = {
  // User info
  setRorS(state, value) {
    state.currentSearch = value
  },
}
