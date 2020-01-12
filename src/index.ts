import S from 's-js';
export * from './runtime'

import { insert, hydrate as hydr, renderToString as rTS } from "./runtime";

type MountableElement = Element | Document | ShadowRoot | DocumentFragment;

export function render(code: () => any, mount: MountableElement): () => void {
  let dispose: () => void;
  S.root(disposer => {
    dispose = disposer;
    insert(mount, code());
  });
  return dispose!;
}

export function renderToString(code: () => any): Promise<string> {
  return S.root(dispose => {
    const p = rTS(code);
    dispose();
    return p;
  });
}

export function hydrate(
  code: () => any,
  element: MountableElement
): () => void {
  let disposer: () => void;
  hydr(() => {
    disposer = render(code, element);
  }, element);
  return disposer!;
}
