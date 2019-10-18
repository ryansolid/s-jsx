import S from 's-js';
export * from './runtime'

import { insert, hydration, startSSR } from "./runtime";

type MountableElement = Element | Document | ShadowRoot | DocumentFragment;

export function render(code: () => any, mount: MountableElement): () => void {
  let dispose: () => void;
  S.root(disposer => {
    dispose = disposer;
    insert(mount, code());
  });
  return dispose!;
}

export function renderSSR(code: () => any, element: MountableElement): () => void {
  startSSR();
  return render(code, element);
}

export function hydrate(code: () => any, element: MountableElement): () => void {
  let disposer: () => void;
  hydration(() => {
    disposer = render(code, element);
  }, element);
  return disposer!;
}