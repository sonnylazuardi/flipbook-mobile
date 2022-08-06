import*as React from"react";/**
A hook to simply use state between components
Warning: this only works with function components (like any hook)
Usage:
// You can put this in an central file and import it too
const useStore = createStore({ count: 0 })
// And this is how you use it from any component
export function Example() {
    const [store, setStore] = useStore()
    const updateCount = () => setStore({ count: store.count + 1 })
    return <div onClick={updateCount}>{store.count}</div>
}
*/ export function createStore(state){// Store the initial state, copy the object if it's an object
let storeState=typeof state==="object"?{...state}:state;// Keep a list of all the listener, in the form of React hook setters
const storeSetters=new Set;// Create a set function that updates all the listeners / setters
const setStoreState=state=>{// If the state is an object, make sure we copy it
storeState=typeof state==="object"?{...storeState,...state}:state;// Update all the listeners / setters with the new value
storeSetters.forEach(setter=>setter(storeState));};// Create the actual hook based on everything above
function useStore(){// Create the hook we are going to use as a listener
const[state,setState]=React.useState(storeState);// If we unmount the component using this hook, we need to remove the listener
React.useEffect(()=>()=>storeSetters.delete(setState),[]);// But right now, we need to add the listener
storeSetters.add(setState);// Return the state and a function to update the central store
return[state,setStoreState];}return useStore;}
export const __FramerMetadata__ = {"exports":{"createStore":{"type":"function","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./store.map