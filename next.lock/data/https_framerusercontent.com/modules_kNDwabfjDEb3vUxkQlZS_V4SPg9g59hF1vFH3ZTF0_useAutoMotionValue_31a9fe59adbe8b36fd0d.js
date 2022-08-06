import{useCallback,useEffect,useRef}from"react";import{motionValue,animate,RenderTarget}from"framer";import{isMotionValue}from"https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/TbXI1XaZFNevVKcgIt7G/isMotionValue.js";import{useConstant}from"https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js";export function useAutoMotionValue(inputValue,options){// Put options on a local ref
// Might wanna just memo instead but it works for now
const optionsRef=useRef(options);const animation=useRef();const didInitialMount=useRef(false);const isOnCanvas=RenderTarget.current()===RenderTarget.canvas;// in-progress - trying to figure out effect hooks
const onChangeDeps=(options===null||options===void 0?void 0:options.onChangeDeps)?options.onChangeDeps:[];// Memoize the onChange handler
const onChange=useCallback(options===null||options===void 0?void 0:options.onChange,[...onChangeDeps,]);// Optionally scale the value from props
const transformer=useCallback(value=>{var ref;return((ref=optionsRef.current)===null||ref===void 0?void 0:ref.transform)?optionsRef.current.transform(value):value;},[]);// Create new MotionValue from inputValue
const value1=useConstant(()=>isMotionValue(inputValue)?inputValue:motionValue(transformer(inputValue)));// Setting value from prop change
useEffect(()=>{if(!isMotionValue(inputValue)&&didInitialMount.current){var ref,ref1;const newValue=transformer(inputValue);(ref=animation.current)===null||ref===void 0?void 0:ref.stop();// Call change callback
if(onChange)onChange(newValue,value1);// Trigger animation to new value
if(((ref1=optionsRef.current)===null||ref1===void 0?void 0:ref1.animate)&&!isOnCanvas){var ref2;// @ts-ignore
animation.current=animate(value1,newValue,(ref2=optionsRef.current)===null||ref2===void 0?void 0:ref2.transition);}else{value1.set(newValue);}}didInitialMount.current=true;},[inputValue,...onChangeDeps]);return value1;}
export const __FramerMetadata__ = {"exports":{"useAutoMotionValue":{"type":"function","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./useAutoMotionValue.map