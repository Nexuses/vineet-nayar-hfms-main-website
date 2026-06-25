declare module 'turn.js' {
  const turn: unknown
  export default turn
}

declare module 'turn.js/node_modules/jquery' {
  const jquery: unknown
  export default jquery
}

declare global {
  interface Window {
    jQuery?: unknown
    $?: unknown
  }
}

